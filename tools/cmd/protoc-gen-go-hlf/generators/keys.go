package generators

import (
	"strings"

	auth_pb "github.com/nova38/thesis/lib/go/gen/auth/v1"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/proto"

	"google.golang.org/protobuf/types/dynamicpb"
)

type KeyGenerator struct{}

func (kg *KeyGenerator) GenerateFile(
	gen *protogen.Plugin,
	file *protogen.File,
) (*protogen.GeneratedFile, error) {
	filename := file.GeneratedFilenamePrefix + ".cc.key.pb.go"
	g := gen.NewGeneratedFile(filename, file.GoImportPath)

	// Generate the header
	g.P("// Code generated by protoc-gen-go-hlf. DO NOT EDIT.")
	g.P("// versions:")

	g.P("// - protoc-gen-cckey v0.0.1")
	g.P("// source: ", file.Desc.Path())
	g.P()
	g.P("package ", file.GoPackageName)
	g.P()

	v := true
	for _, msg := range file.Messages {
		b := kg.GenerateMessage(gen, g, msg)
		v = v && b
	}

	if v {
		g.P("// No key schema found. Skipping file.")
		g.Skip()
	}
	// if toSkip {
	// 	g.Skip()
	// }

	return g, nil
}

// Handle the messages
func (kg *KeyGenerator) GenerateMessage(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	msg *protogen.Message,
) (notUsed bool) {
	// notUsed = true
	// Check for sub messages
	for _, subMsg := range msg.Messages {
		kg.GenerateMessage(gen, g, subMsg)
	}

	keySchema := KeySchemaOptions(msg)
	if keySchema == nil {
		return true
	}

	// ns := keySchema.GetNamespace()

	kp := keySchema.GetKeyPaths()

	// Add the imports
	g.QualifiedGoIdent(protogen.GoIdent{GoName: "errors", GoImportPath: "errors"})
	g.QualifiedGoIdent(protogen.GoIdent{GoName: "lo", GoImportPath: "github.com/samber/lo"})

	// function for namespace
	// g.P("// ", msg.Desc.FullName(), " is the namespace for ", msg.GoIdent.GoName)
	g.P("func (m *", msg.GoIdent.GoName, ") Namespace() string {")
	g.P("	return \"", msg.Desc.FullName(), "\"")
	g.P("}")

	// function for key
	new_msg := dynamicpb.NewMessage(msg.Desc)

	if kp.IsValid(new_msg) {
		raw_paths := kp.GetPaths()

		g.QualifiedGoIdent(protogen.GoIdent{GoName: "errors", GoImportPath: "errors"})
		g.QualifiedGoIdent(protogen.GoIdent{GoName: "lo", GoImportPath: "github.com/samber/lo"})

		g.P("func (m *", msg.GoIdent.GoName, ") ", "Key()", "([]string, error) {")
		g.P("attr := []string{}")

		g.P("ok := lo.Try(func () error {")

		for _, f := range raw_paths {
			g.P("attr = append(attr, m.", PathToGetter(f), ")")
		}
		g.P("return nil")
		g.P("})")

		g.P("if !ok {")
		g.P("return nil, errors.New(\"Key is nil\")}")
		g.P("return attr, nil")
		g.P("}")

		return false
	}
	return true
}

func PathToGetter(path string) string {
	subPaths := toSubPaths(path)

	first_time := true
	str := ""
	for _, subPath := range subPaths {
		if !first_time {
			str += "."
		}
		str += "Get"

		// Convert the string from snake case to camel case
		sections := strings.Split(subPath, "_")

		for _, section := range sections {
			str += cases.Title(language.Und).String(section)
		}
		str += "()"
		first_time = false
	}
	return str
}

// paths split by their dot notation
func toSubPaths(rawPaths string) []string {
	var p []string
	subPaths := strings.Split(rawPaths, ".")
	for _, path := range subPaths {
		sections := strings.Split(path, ".")
		p = append(p, sections...)
	}
	return p
}

func KeySchemaOptions(m *protogen.Message) *auth_pb.KeySchema {
	v, ok := proto.GetExtension(m.Desc.Options(), auth_pb.E_KeySchema).(*auth_pb.KeySchema)
	if !ok {
		return nil
	}
	return v
}
