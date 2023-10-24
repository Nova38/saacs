// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: rbac/service.proto

package rbac

import (
	_ "buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go/buf/validate"
	_ "github.com/nova38/thesis/lib/go/gen/key"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/descriptorpb"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	fieldmaskpb "google.golang.org/protobuf/types/known/fieldmaskpb"
	_ "google.golang.org/protobuf/types/known/structpb"
	_ "google.golang.org/protobuf/types/known/typepb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetUserRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id *User_Id `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetUserRequest) Reset() {
	*x = GetUserRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rbac_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetUserRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUserRequest) ProtoMessage() {}

func (x *GetUserRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rbac_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUserRequest.ProtoReflect.Descriptor instead.
func (*GetUserRequest) Descriptor() ([]byte, []int) {
	return file_rbac_service_proto_rawDescGZIP(), []int{0}
}

func (x *GetUserRequest) GetId() *User_Id {
	if x != nil {
		return x.Id
	}
	return nil
}

type UserRegisterRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	User *User `protobuf:"bytes,1,opt,name=user,proto3" json:"user,omitempty"`
}

func (x *UserRegisterRequest) Reset() {
	*x = UserRegisterRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rbac_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserRegisterRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserRegisterRequest) ProtoMessage() {}

func (x *UserRegisterRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rbac_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserRegisterRequest.ProtoReflect.Descriptor instead.
func (*UserRegisterRequest) Descriptor() ([]byte, []int) {
	return file_rbac_service_proto_rawDescGZIP(), []int{1}
}

func (x *UserRegisterRequest) GetUser() *User {
	if x != nil {
		return x.User
	}
	return nil
}

type UpdateMembershipRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           *User_Id       `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	CollectionId *Collection_Id `protobuf:"bytes,2,opt,name=collection_id,json=collectionId,proto3" json:"collection_id,omitempty"`
	Role         int32          `protobuf:"varint,3,opt,name=role,proto3" json:"role,omitempty"`
}

func (x *UpdateMembershipRequest) Reset() {
	*x = UpdateMembershipRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rbac_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateMembershipRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateMembershipRequest) ProtoMessage() {}

func (x *UpdateMembershipRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rbac_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateMembershipRequest.ProtoReflect.Descriptor instead.
func (*UpdateMembershipRequest) Descriptor() ([]byte, []int) {
	return file_rbac_service_proto_rawDescGZIP(), []int{2}
}

func (x *UpdateMembershipRequest) GetId() *User_Id {
	if x != nil {
		return x.Id
	}
	return nil
}

func (x *UpdateMembershipRequest) GetCollectionId() *Collection_Id {
	if x != nil {
		return x.CollectionId
	}
	return nil
}

func (x *UpdateMembershipRequest) GetRole() int32 {
	if x != nil {
		return x.Role
	}
	return 0
}

type GetCollectionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id *Collection_Id `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetCollectionRequest) Reset() {
	*x = GetCollectionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rbac_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetCollectionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetCollectionRequest) ProtoMessage() {}

func (x *GetCollectionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rbac_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetCollectionRequest.ProtoReflect.Descriptor instead.
func (*GetCollectionRequest) Descriptor() ([]byte, []int) {
	return file_rbac_service_proto_rawDescGZIP(), []int{3}
}

func (x *GetCollectionRequest) GetId() *Collection_Id {
	if x != nil {
		return x.Id
	}
	return nil
}

type CollectionCreateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Collection *Collection `protobuf:"bytes,1,opt,name=collection,proto3" json:"collection,omitempty"`
}

func (x *CollectionCreateRequest) Reset() {
	*x = CollectionCreateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rbac_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CollectionCreateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CollectionCreateRequest) ProtoMessage() {}

func (x *CollectionCreateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rbac_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CollectionCreateRequest.ProtoReflect.Descriptor instead.
func (*CollectionCreateRequest) Descriptor() ([]byte, []int) {
	return file_rbac_service_proto_rawDescGZIP(), []int{4}
}

func (x *CollectionCreateRequest) GetCollection() *Collection {
	if x != nil {
		return x.Collection
	}
	return nil
}

type CollectionUpdateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Collection *Collection            `protobuf:"bytes,1,opt,name=collection,proto3" json:"collection,omitempty"`
	UpdateMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
}

func (x *CollectionUpdateRequest) Reset() {
	*x = CollectionUpdateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rbac_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CollectionUpdateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CollectionUpdateRequest) ProtoMessage() {}

func (x *CollectionUpdateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rbac_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CollectionUpdateRequest.ProtoReflect.Descriptor instead.
func (*CollectionUpdateRequest) Descriptor() ([]byte, []int) {
	return file_rbac_service_proto_rawDescGZIP(), []int{5}
}

func (x *CollectionUpdateRequest) GetCollection() *Collection {
	if x != nil {
		return x.Collection
	}
	return nil
}

func (x *CollectionUpdateRequest) GetUpdateMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.UpdateMask
	}
	return nil
}

var File_rbac_service_proto protoreflect.FileDescriptor

var file_rbac_service_proto_rawDesc = []byte{
	0x0a, 0x12, 0x72, 0x62, 0x61, 0x63, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x72, 0x62, 0x61, 0x63, 0x1a, 0x0f, 0x72, 0x62, 0x61, 0x63,
	0x2f, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x62, 0x75, 0x66,
	0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61,
	0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1a, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x0d, 0x6b, 0x65, 0x79, 0x2f, 0x6b, 0x65, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x2f, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x1d, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0d,
	0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x49, 0x64, 0x52, 0x02, 0x69,
	0x64, 0x22, 0x35, 0x0a, 0x13, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65,
	0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1e, 0x0a, 0x04, 0x75, 0x73, 0x65, 0x72,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x55, 0x73,
	0x65, 0x72, 0x52, 0x04, 0x75, 0x73, 0x65, 0x72, 0x22, 0x86, 0x01, 0x0a, 0x17, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x0d, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x49, 0x64, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x38, 0x0a, 0x0d, 0x63, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x72, 0x62, 0x61,
	0x63, 0x2e, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x49, 0x64, 0x52,
	0x0c, 0x63, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x12, 0x0a,
	0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x72, 0x6f, 0x6c,
	0x65, 0x22, 0x3b, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x43, 0x6f, 0x6c,
	0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x49, 0x64, 0x52, 0x02, 0x69, 0x64, 0x22, 0x4b,
	0x0a, 0x17, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x30, 0x0a, 0x0a, 0x63, 0x6f, 0x6c,
	0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e,
	0x72, 0x62, 0x61, 0x63, 0x2e, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x0a, 0x63, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x88, 0x01, 0x0a, 0x17,
	0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x30, 0x0a, 0x0a, 0x63, 0x6f, 0x6c, 0x6c, 0x65,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x72, 0x62,
	0x61, 0x63, 0x2e, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x63,
	0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3b, 0x0a, 0x0b, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x4d, 0x61, 0x73, 0x6b, 0x32, 0xea, 0x04, 0x0a, 0x0b, 0x41, 0x75, 0x74, 0x68, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x34, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x43, 0x75, 0x72,
	0x72, 0x65, 0x6e, 0x74, 0x55, 0x73, 0x65, 0x72, 0x12, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79,
	0x1a, 0x0a, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x12, 0x39, 0x0a, 0x10,
	0x47, 0x65, 0x74, 0x43, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x55, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x0d, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e,
	0x55, 0x73, 0x65, 0x72, 0x2e, 0x49, 0x64, 0x12, 0x36, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x55, 0x73,
	0x65, 0x72, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x0f,
	0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x12,
	0x2b, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x12, 0x14, 0x2e, 0x72, 0x62, 0x61,
	0x63, 0x2e, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x0a, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x12, 0x35, 0x0a, 0x0c,
	0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x12, 0x19, 0x2e, 0x72,
	0x62, 0x61, 0x63, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0a, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x55,
	0x73, 0x65, 0x72, 0x12, 0x41, 0x0a, 0x14, 0x55, 0x73, 0x65, 0x72, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x12, 0x1d, 0x2e, 0x72, 0x62,
	0x61, 0x63, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73,
	0x68, 0x69, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0a, 0x2e, 0x72, 0x62, 0x61,
	0x63, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x12, 0x42, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x43, 0x6f, 0x6c,
	0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x16, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d,
	0x70, 0x74, 0x79, 0x1a, 0x15, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x43, 0x6f, 0x6c, 0x6c, 0x65,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x3d, 0x0a, 0x0d, 0x47, 0x65,
	0x74, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x2e, 0x72, 0x62,
	0x61, 0x63, 0x2e, 0x47, 0x65, 0x74, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x10, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x43,
	0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x43, 0x0a, 0x10, 0x43, 0x6f, 0x6c,
	0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x1d, 0x2e,
	0x72, 0x62, 0x61, 0x63, 0x2e, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x10, 0x2e, 0x72,
	0x62, 0x61, 0x63, 0x2e, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x43,
	0x0a, 0x10, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x12, 0x1d, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x10, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x2e, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x42, 0x72, 0x0a, 0x08, 0x63, 0x6f, 0x6d, 0x2e, 0x72, 0x62, 0x61, 0x63, 0x42,
	0x0c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x28, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6e, 0x6f, 0x76, 0x61,
	0x33, 0x38, 0x2f, 0x74, 0x68, 0x65, 0x73, 0x69, 0x73, 0x2f, 0x6c, 0x69, 0x62, 0x2f, 0x67, 0x6f,
	0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x72, 0x62, 0x61, 0x63, 0xa2, 0x02, 0x03, 0x52, 0x58, 0x58, 0xaa,
	0x02, 0x04, 0x52, 0x62, 0x61, 0x63, 0xca, 0x02, 0x04, 0x52, 0x62, 0x61, 0x63, 0xe2, 0x02, 0x10,
	0x52, 0x62, 0x61, 0x63, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0xea, 0x02, 0x04, 0x52, 0x62, 0x61, 0x63, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_rbac_service_proto_rawDescOnce sync.Once
	file_rbac_service_proto_rawDescData = file_rbac_service_proto_rawDesc
)

func file_rbac_service_proto_rawDescGZIP() []byte {
	file_rbac_service_proto_rawDescOnce.Do(func() {
		file_rbac_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_rbac_service_proto_rawDescData)
	})
	return file_rbac_service_proto_rawDescData
}

var file_rbac_service_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_rbac_service_proto_goTypes = []interface{}{
	(*GetUserRequest)(nil),          // 0: rbac.GetUserRequest
	(*UserRegisterRequest)(nil),     // 1: rbac.UserRegisterRequest
	(*UpdateMembershipRequest)(nil), // 2: rbac.UpdateMembershipRequest
	(*GetCollectionRequest)(nil),    // 3: rbac.GetCollectionRequest
	(*CollectionCreateRequest)(nil), // 4: rbac.CollectionCreateRequest
	(*CollectionUpdateRequest)(nil), // 5: rbac.CollectionUpdateRequest
	(*User_Id)(nil),                 // 6: rbac.User.Id
	(*User)(nil),                    // 7: rbac.User
	(*Collection_Id)(nil),           // 8: rbac.Collection.Id
	(*Collection)(nil),              // 9: rbac.Collection
	(*fieldmaskpb.FieldMask)(nil),   // 10: google.protobuf.FieldMask
	(*emptypb.Empty)(nil),           // 11: google.protobuf.Empty
	(*User_List)(nil),               // 12: rbac.User.List
	(*Collection_List)(nil),         // 13: rbac.Collection.List
}
var file_rbac_service_proto_depIdxs = []int32{
	6,  // 0: rbac.GetUserRequest.id:type_name -> rbac.User.Id
	7,  // 1: rbac.UserRegisterRequest.user:type_name -> rbac.User
	6,  // 2: rbac.UpdateMembershipRequest.id:type_name -> rbac.User.Id
	8,  // 3: rbac.UpdateMembershipRequest.collection_id:type_name -> rbac.Collection.Id
	8,  // 4: rbac.GetCollectionRequest.id:type_name -> rbac.Collection.Id
	9,  // 5: rbac.CollectionCreateRequest.collection:type_name -> rbac.Collection
	9,  // 6: rbac.CollectionUpdateRequest.collection:type_name -> rbac.Collection
	10, // 7: rbac.CollectionUpdateRequest.update_mask:type_name -> google.protobuf.FieldMask
	11, // 8: rbac.AuthService.GetCurrentUser:input_type -> google.protobuf.Empty
	11, // 9: rbac.AuthService.GetCurrentUserId:input_type -> google.protobuf.Empty
	11, // 10: rbac.AuthService.GetUserList:input_type -> google.protobuf.Empty
	0,  // 11: rbac.AuthService.GetUser:input_type -> rbac.GetUserRequest
	1,  // 12: rbac.AuthService.UserRegister:input_type -> rbac.UserRegisterRequest
	2,  // 13: rbac.AuthService.UserUpdateMembership:input_type -> rbac.UpdateMembershipRequest
	11, // 14: rbac.AuthService.GetCollectionList:input_type -> google.protobuf.Empty
	3,  // 15: rbac.AuthService.GetCollection:input_type -> rbac.GetCollectionRequest
	4,  // 16: rbac.AuthService.CollectionCreate:input_type -> rbac.CollectionCreateRequest
	5,  // 17: rbac.AuthService.CollectionUpdate:input_type -> rbac.CollectionUpdateRequest
	7,  // 18: rbac.AuthService.GetCurrentUser:output_type -> rbac.User
	6,  // 19: rbac.AuthService.GetCurrentUserId:output_type -> rbac.User.Id
	12, // 20: rbac.AuthService.GetUserList:output_type -> rbac.User.List
	7,  // 21: rbac.AuthService.GetUser:output_type -> rbac.User
	7,  // 22: rbac.AuthService.UserRegister:output_type -> rbac.User
	7,  // 23: rbac.AuthService.UserUpdateMembership:output_type -> rbac.User
	13, // 24: rbac.AuthService.GetCollectionList:output_type -> rbac.Collection.List
	9,  // 25: rbac.AuthService.GetCollection:output_type -> rbac.Collection
	9,  // 26: rbac.AuthService.CollectionCreate:output_type -> rbac.Collection
	9,  // 27: rbac.AuthService.CollectionUpdate:output_type -> rbac.Collection
	18, // [18:28] is the sub-list for method output_type
	8,  // [8:18] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_rbac_service_proto_init() }
func file_rbac_service_proto_init() {
	if File_rbac_service_proto != nil {
		return
	}
	file_rbac_rbac_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_rbac_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetUserRequest); i {
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
		file_rbac_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserRegisterRequest); i {
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
		file_rbac_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateMembershipRequest); i {
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
		file_rbac_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetCollectionRequest); i {
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
		file_rbac_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CollectionCreateRequest); i {
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
		file_rbac_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CollectionUpdateRequest); i {
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
			RawDescriptor: file_rbac_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_rbac_service_proto_goTypes,
		DependencyIndexes: file_rbac_service_proto_depIdxs,
		MessageInfos:      file_rbac_service_proto_msgTypes,
	}.Build()
	File_rbac_service_proto = out.File
	file_rbac_service_proto_rawDesc = nil
	file_rbac_service_proto_goTypes = nil
	file_rbac_service_proto_depIdxs = nil
}