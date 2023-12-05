package generators

import (
	"strings"

	authpb "github.com/nova38/thesis/packages/saacs/gen/auth/v1"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"

	"google.golang.org/protobuf/types/dynamicpb"
)

const (
	// errorsPackage  = protogen.GoImportPath("errors")
	// loPackage      = protogen.GoImportPath("github.com/samber/lo")
	// stringsPackage = protogen.GoImportPath("strings")

	authPackage = protogen.GoImportPath("github.com/nova38/thesis/packages/saacs/gen/auth/v1")
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

	return g, nil
}

// Handle the messages
func (kg *KeyGenerator) GenerateMessage(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	msg *protogen.Message,
) (notUsed bool) {
	keySchema := KeySchemaOptions(msg)
	ItemKey := g.QualifiedGoIdent(authPackage.Ident("ItemKey"))
	// SubItem := g.QualifiedGoIdent(authPackage.Ident("SubItem"))

	// ItemKind := GetItemKind(msg)
	if keySchema == nil {
		return true
	}
	// // g.QualifiedGoIdent(protogen.GoIdent{GoName: "lo", GoImportPath: "github.com/samber/lo"})

	{
		ns := keySchema.GetItemType()
		if ns == "" {
			g.P("func (m *", msg.GoIdent.GoName, ") ItemType() string {")
			g.P("	return \"", msg.Desc.FullName(), "\"")
			g.P("}")
		} else {
			g.P("func (m *", msg.GoIdent.GoName, ") ItemType() string {")
			g.P("	return \"", ns, "\"")
		}
	}

	kp := keySchema.GetProperties()
	od := keySchema.GetItemKind()

	// dCol := keySchema.GetDefaultCollectionId()
	// ItemKind := GetItemKind()

	// sub := keySchema.GetSubItem()
	// function for key
	newMsg := dynamicpb.NewMessage(msg.Desc)

	if kp.IsValid(newMsg) {
		rawPaths := kp.GetPaths()

		// g.QualifiedGoIdent(stringsPackage.Ident("strings"))
		// g.QualifiedGoIdent(errorsPackage.Ident("errors"))

		// g.P("func (m *", msg.GoIdent.GoName, ") KeyAttr() (map[string]string) {")
		// g.P("attr := make(map[string]string)")
		// for _, f := range rawPaths {
		// 	field := msg.Desc.Fields().ByName(protoreflect.Name(f))

		// 	if field == nil {
		// 		continue
		// 	}
		// 	if field.IsList() {
		// 		g.P("//", f, "is a list")
		// 		// g.P("attr[\"", f, "\"] = strings.Join(m.", PathToGetter(f), ", \",\")")
		// 		// Put the list entries in the map with felid of f and the index as the key
		// 		g.P("for i, v := range m.", PathToGetter(f), " {")
		// 		g.P("attr[\"", f, "\" + string(i)] = v")
		// 		g.P("}")

		// 	} else {
		// 		g.P("attr[\"", f, "\"] = m.", PathToGetter(f))
		// 	}

		// }
		// g.P("return attr")
		// g.P("}")

		g.P("func (m *", msg.GoIdent.GoName, ") ", "KeyAttr()", "[]string {")

		g.P("attr := []string{}")

		// g.P("ok := lo.Try(func () error {")

		for _, f := range rawPaths {
			field := msg.Desc.Fields().ByName(protoreflect.Name(f))

			if field == nil {
				continue
			}
			if field.IsList() {
				g.P("//", f, "is a list")
				g.P("attr = append(attr, m.", PathToGetter(f), "...)")
			} else {
				g.P("attr = append(attr, m.", PathToGetter(f), ")")
			}

		}

		g.P("return attr")
		g.P("}")

		{ // Generate SetKeyAttr
			g.P("func (m *", msg.GoIdent.GoName, ") ", "SetKeyAttr", "(attr []string) {")
			// check if there is more attributes than the key schema
			// g.P("if len(attr) > ", len(rawPaths), " {")
			// g.P("return ")
			// g.P("}")

			// g.P("for i, f := range attr {")
			// g.P("field := m.")

			// g.P("}")
			// g.P("return nil")

			// g.P("}")

			for i, f := range rawPaths {
				field := msg.Desc.Fields().ByName(protoreflect.Name(f))

				if field == nil {
					continue
				}

				g.P("if len(attr) > ", i, " {")
				g.P("m.", PathToSet(f), " = attr[", i, "]")
				g.P("} else{ return }")
			}

			g.P("return}")

			// g.P("ok := lo.Try(func () error {")

		}

		{
			//
			// if authpb.ItemKind(od.Number()) == authpb.ItemKind_ITEM_KIND_GLOBAL_ITEM {
			//	g.P("// Global Item")
			//	g.P("func (m *", msg.GoIdent.GoName, ") IsGlobal() (bool) {")
			//	g.P("	return true")
			//	g.P("}")
			//
			//	g.P("func (m *", msg.GoIdent.GoName, ") ", "SetKey", "(key *", ItemKey, ") {")
			//	g.P("m.SetKeyAttr(key.ItemIdParts)")
			//	g.P("m.CollectionId = \"global\"")
			//	g.P("return }")
			//
			//	g.P("func (m *", msg.GoIdent.GoName, ") ", "ItemKey()", "(*", ItemKey, ") {")
			//	g.P("key := &", ItemKey, "{")
			//	g.P("CollectionId: \"global\",")
			//	g.P("ItemType: \"", string(msg.Desc.FullName()), "\",")
			//	g.P("ItemIdParts: m.KeyAttr(),")
			//	g.P("}")
			//	g.P("return key")
			//	g.P("}")
			//
			//}

			if authpb.ItemKind(
				od.Number(),
			) == authpb.ItemKind_ITEM_KIND_PRIMARY_ITEM {
				g.P("// Domain Item")
				g.P("func (m *", msg.GoIdent.GoName, ") IsPrimary() (bool) {")
				g.P("	return true")
				g.P("}")

				g.P("func (m *", msg.GoIdent.GoName, ") ", "SetKey", "(key *", ItemKey, ") {")
				g.P("m.SetKeyAttr(key.ItemIdParts)")
				g.P("m.CollectionId = key.GetCollectionId()")
				g.P("return }")

				g.P("func (m *", msg.GoIdent.GoName, ") ", "ItemKey()", "(*", ItemKey, ") {")
				g.P("key := &", ItemKey, "{")
				g.P("CollectionId: m.GetCollectionId(),")
				g.P("ItemType: \"", string(msg.Desc.FullName()), "\",")
				g.P("ItemIdParts: m.KeyAttr(),")
				g.P("}")
				g.P("return key")
				g.P("}")

			}

			if authpb.ItemKind(od.Number()) == authpb.ItemKind_ITEM_KIND_SUB_ITEM {
				g.P("// Domain Item")
				g.P("func (m *", msg.GoIdent.GoName, ") IsSecondary() (bool) {")
				g.P("	return true")
				g.P("}")

				g.P("func (m *", msg.GoIdent.GoName, ") ", "SetKey", "(key *", ItemKey, ") {")
				g.P("m.PrimaryKey = key")
				g.P("return }")

				g.P("func (m *", msg.GoIdent.GoName, ") ", "ItemKey()", "(*", ItemKey, ") {")
				g.P("return m.GetPrimaryKey()")
				g.P("}")

			}

		}

		return false
	}
	return true
}

func PathToSet(path string) string {
	subPaths := toSubPaths(path)

	firstTime := true
	str := ""
	for _, subPath := range subPaths {
		if !firstTime {
			str += "."
		}

		// Convert the string from snake case to camel case
		sections := strings.Split(subPath, "_")

		for _, section := range sections {
			str += cases.Title(language.Und).String(section)
		}
		str += "()"
		firstTime = false
	}

	// remove the last ()
	if len(str) > 2 {
		str = str[:len(str)-2]
	}
	return str
}

func PathToGetter(path string) string {
	subPaths := toSubPaths(path)

	firstTime := true
	str := ""
	for _, subPath := range subPaths {
		if !firstTime {
			str += "."
		}
		str += "Get"

		// Convert the string from snake case to camel case
		sections := strings.Split(subPath, "_")

		for _, section := range sections {
			str += cases.Title(language.Und).String(section)
		}
		str += "()"
		firstTime = false
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

func KeySchemaOptions(m *protogen.Message) *authpb.KeySchema {
	v, ok := proto.GetExtension(m.Desc.Options(), authpb.E_KeySchema).(*authpb.KeySchema)

	if !ok {
		return nil
	}
	return v
}

// func GetItemKind(m *protogen.Message) *authpb.ItemKind {
// 	v, ok := proto.GetExtension(m.Desc.Options(), authpb.E_ItemKind).(*authpb.ItemKind)

// 	if !ok {
// 		return nil
// 	}

// 	return v
// }