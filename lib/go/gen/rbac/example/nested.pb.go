// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: rbac/example/nested.proto

package example

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type NestedMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name          string         `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	SimpleMessage *SimpleMessage `protobuf:"bytes,2,opt,name=simple_message,json=simpleMessage,proto3" json:"simple_message,omitempty"`
}

func (x *NestedMessage) Reset() {
	*x = NestedMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rbac_example_nested_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NestedMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NestedMessage) ProtoMessage() {}

func (x *NestedMessage) ProtoReflect() protoreflect.Message {
	mi := &file_rbac_example_nested_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NestedMessage.ProtoReflect.Descriptor instead.
func (*NestedMessage) Descriptor() ([]byte, []int) {
	return file_rbac_example_nested_proto_rawDescGZIP(), []int{0}
}

func (x *NestedMessage) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *NestedMessage) GetSimpleMessage() *SimpleMessage {
	if x != nil {
		return x.SimpleMessage
	}
	return nil
}

var File_rbac_example_nested_proto protoreflect.FileDescriptor

var file_rbac_example_nested_proto_rawDesc = []byte{
	0x0a, 0x19, 0x72, 0x62, 0x61, 0x63, 0x2f, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2f, 0x6e,
	0x65, 0x73, 0x74, 0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x65, 0x78, 0x61,
	0x6d, 0x70, 0x6c, 0x65, 0x1a, 0x19, 0x72, 0x62, 0x61, 0x63, 0x2f, 0x65, 0x78, 0x61, 0x6d, 0x70,
	0x6c, 0x65, 0x2f, 0x73, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x62, 0x0a, 0x0d, 0x4e, 0x65, 0x73, 0x74, 0x65, 0x64, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3d, 0x0a, 0x0e, 0x73, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x5f, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x65,
	0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x4d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x52, 0x0d, 0x73, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x4d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x42, 0x88, 0x01, 0x0a, 0x0b, 0x63, 0x6f, 0x6d, 0x2e, 0x65, 0x78, 0x61, 0x6d,
	0x70, 0x6c, 0x65, 0x42, 0x0b, 0x4e, 0x65, 0x73, 0x74, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6e,
	0x6f, 0x76, 0x61, 0x33, 0x38, 0x2f, 0x74, 0x68, 0x65, 0x73, 0x69, 0x73, 0x2f, 0x6c, 0x69, 0x62,
	0x2f, 0x67, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x72, 0x62, 0x61, 0x63, 0x2f, 0x65, 0x78, 0x61,
	0x6d, 0x70, 0x6c, 0x65, 0xa2, 0x02, 0x03, 0x45, 0x58, 0x58, 0xaa, 0x02, 0x07, 0x45, 0x78, 0x61,
	0x6d, 0x70, 0x6c, 0x65, 0xca, 0x02, 0x07, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0xe2, 0x02,
	0x13, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_rbac_example_nested_proto_rawDescOnce sync.Once
	file_rbac_example_nested_proto_rawDescData = file_rbac_example_nested_proto_rawDesc
)

func file_rbac_example_nested_proto_rawDescGZIP() []byte {
	file_rbac_example_nested_proto_rawDescOnce.Do(func() {
		file_rbac_example_nested_proto_rawDescData = protoimpl.X.CompressGZIP(file_rbac_example_nested_proto_rawDescData)
	})
	return file_rbac_example_nested_proto_rawDescData
}

var file_rbac_example_nested_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_rbac_example_nested_proto_goTypes = []interface{}{
	(*NestedMessage)(nil), // 0: example.NestedMessage
	(*SimpleMessage)(nil), // 1: example.SimpleMessage
}
var file_rbac_example_nested_proto_depIdxs = []int32{
	1, // 0: example.NestedMessage.simple_message:type_name -> example.SimpleMessage
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_rbac_example_nested_proto_init() }
func file_rbac_example_nested_proto_init() {
	if File_rbac_example_nested_proto != nil {
		return
	}
	file_rbac_example_simple_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_rbac_example_nested_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NestedMessage); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_rbac_example_nested_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_rbac_example_nested_proto_goTypes,
		DependencyIndexes: file_rbac_example_nested_proto_depIdxs,
		MessageInfos:      file_rbac_example_nested_proto_msgTypes,
	}.Build()
	File_rbac_example_nested_proto = out.File
	file_rbac_example_nested_proto_rawDesc = nil
	file_rbac_example_nested_proto_goTypes = nil
	file_rbac_example_nested_proto_depIdxs = nil
}
