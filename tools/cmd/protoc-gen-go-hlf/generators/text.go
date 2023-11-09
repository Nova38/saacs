package generators

import (
	auth_pb "github.com/nova38/thesis/lib/go/gen/auth/v1"

	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/proto"
	_ "google.golang.org/protobuf/proto"

	_ "strings"

	_ "google.golang.org/protobuf/types/dynamicpb"
)

type TextGenerater struct{}

func (sg *TextGenerater) GenerateFile(
	gen *protogen.Plugin,
	file *protogen.File,
) (*protogen.GeneratedFile, error) {
	filename := file.GeneratedFilenamePrefix + ".cc.service.pb.text"
	g := gen.NewGeneratedFile(filename, file.GoImportPath)

	// Generate the header
	g.P("// Code generated by proto-gen-go-auth_pb. DO NOT EDIT.")
	g.P("// versions:")

	g.P("// - protoc-gen-cckey v0.0.1")
	g.P("// source: ", file.Desc.Path())
	g.P()
	g.P("package ", file.GoPackageName)
	g.P()

	//for _, msg := range file.Messages {
	//	//sv.GenerateMessage(gen, g, msg)
	//}

	if file.Services == nil {
		g.Skip()
	}

	for _, sv := range file.Services {
		// g.P("type AuthContractImpl struct{}")
		sg.GenerateService(gen, g, sv)
	}

	return g, nil
}

func (sv *TextGenerater) GenerateService(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	v *protogen.Service,
) {
	g.P("// Service ", v.GoName)

	sv.GenerateInterface(gen, g, v)
	g.P()
	g.P()
	sv.GenerateStruct(gen, g, v)
}

func (sv *TextGenerater) GenerateInterface(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	v *protogen.Service,
) {
	ctx := g.QualifiedGoIdent(
		protogen.GoIdent{
			GoName:       "GenericAuthTxCtxInterface",
			GoImportPath: "github.com/nova38/thesis/lib/go/fabric/rbac",
		},
	)
	// shortName, _ := strings.CutSuffix(v.GoName, "Service")
	// ctx := shortName + "TxCtx"

	g.P("type ", v.GoName, "Interface[T ", ctx, "] interface{")
	defer g.P("}")

	for _, m := range v.Methods {

		mComments := m.Comments.Leading.String()

		if len(mComments) == 0 {
			// add the fn name to the comments
			mComments += "// " + m.GoName + "\n // \n"
		}

		op, ok := proto.GetExtension(m.Desc.Options(), auth_pb.E_Operation).(*auth_pb.Operation)

		if !ok {
			mComments += "// No operation defined for " + m.GoName + "\n"
		} else if op != nil {
			mComments += "// # Operation: \n"
			mComments += "//   - Action: " + op.Action.String() + "\n"
			mComments += "//   - Object: " + op.ObjectTypeName + "\n"
		}

		if m.Input.Desc.Name() == "Empty" {
			mComments += "// " + "\n"
			mComments += "// req is empty\n"
			g.P(
				mComments, m.GoName,
				"(ctx T) ",
				"(res *", m.Output.GoIdent, ",err error)",
			)
		} else {
			g.P(
				mComments, m.GoName,
				"(ctx T, req *", m.Input.GoIdent, ") ",
				"(res *", m.Output.GoIdent, ",err error)",
			)
		}
		g.P()
	}
}

func (sv *TextGenerater) GenerateStruct(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	v *protogen.Service,
) {
	g.P("type ", v.GoName, "Base struct{")
	g.P("}")

	sv.GenerateStructEvaluateTransactions(gen, g, v)
	g.P()
	GenerateOperationLookup(gen, g, v)
}

func (sv *TextGenerater) GenerateStructEvaluateTransactions(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	v *protogen.Service,
) {
	g.P("func (s *", v.GoName, "Base) GetEvaluateTransactions() []string {")
	// g.P("return []string{")

	fns := []string{}

	for _, m := range v.Methods {
		tt, ok := proto.GetExtension(m.Desc.Options(), auth_pb.E_TransactionType).(auth_pb.TransactionType)

		if !ok {
			continue
		}

		if tt == auth_pb.TransactionType_TRANSACTION_TYPE_QUERY {
			fns = append(fns, m.GoName)
		}
	}
	if len(fns) == 0 {
		g.P("return []string{}")
	} else {
		g.P("return []string{")
		for _, fn := range fns {
			g.P("\"", fn, "\",")
		}
		g.P("}")
	}
	g.P("}")
}

func (sv *TextGenerater) GenerateOperationLookup(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	v *protogen.Service,
) {
	opImport := g.QualifiedGoIdent(
		protogen.GoIdent{
			GoName:       "ACL_Operation",
			GoImportPath: "github.com/nova38/thesis/lib/go/gen/rbac",
		},
	)
	fmtImport := g.QualifiedGoIdent(protogen.GoIdent{GoImportPath: "fmt"})
	g.P("//")

	g.P("func ", v.GoName, "GetTxOperation(txName string)", "( op *", opImport, ", err error) {")

	g.P("switch txName {")
	for _, m := range v.Methods {
		g.P("case \"", m.GoName, "\":")
		op, ok := proto.GetExtension(m.Desc.Options(), auth_pb.E_Operation).(*auth_pb.Operation)
		g.P("//", op)
		if !ok {
			g.P("// No operation defined for ", m.GoName)
			g.P("return nil,", fmtImport, ".Errorf(\"No operation defined for ", m.GoName, "\")")
		} else if op != nil {
			g.P("return &", opImport, "{")
			g.P("Action: ", op.Action.Number(), ",")

			if op.ObjectTypeName != "" {
				g.P("ObjectTypeName: ", op.ObjectTypeName, ",")
			}

			g.P("}, nil")

		}
	}
	g.P("default:")
	g.P("return nil,", fmtImport, "Errorf(\"No operation defined for \"+txName)")
	g.P("}")
	g.P("return nil, nil")
	g.P("}")

	// Gen GetIgnoredFunctions
	g.P()
	g.P("func (s *", v.GoName, "Base) GetIgnoredFunctions() []string {")
	g.P("return []string{\"GetTxOperation\"}")
	g.P("}")
}

// func (s *SpecimenContract) GetEvaluateTransactions() []string {
// 	return []string{
// 		"GetSpecimen",
// 		"GetSpecimenList",
// 		"GetSpecimenByCollection",
// 		"GetSpecimenHistory",
// 	}
// }
