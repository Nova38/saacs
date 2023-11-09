// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file chaincode/rbac/schema/v1/auth_service.proto (package rbac.schema.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Collection, Operation, StateActivity, User, User_Id } from "../../../../auth/v1/auth_pb.js";

/**
 * Test Helpers
 *
 * @generated from message rbac.schema.v1.TestOperationRequest
 */
export class TestOperationRequest extends Message<TestOperationRequest> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: auth.Operation operation = 2;
   */
  operation?: Operation;

  constructor(data?: PartialMessage<TestOperationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.TestOperationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "operation", kind: "message", T: Operation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestOperationRequest {
    return new TestOperationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestOperationRequest {
    return new TestOperationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestOperationRequest {
    return new TestOperationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TestOperationRequest | PlainMessage<TestOperationRequest> | undefined, b: TestOperationRequest | PlainMessage<TestOperationRequest> | undefined): boolean {
    return proto3.util.equals(TestOperationRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.TestOperationResponse
 */
export class TestOperationResponse extends Message<TestOperationResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result = false;

  constructor(data?: PartialMessage<TestOperationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.TestOperationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestOperationResponse {
    return new TestOperationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestOperationResponse {
    return new TestOperationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestOperationResponse {
    return new TestOperationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TestOperationResponse | PlainMessage<TestOperationResponse> | undefined, b: TestOperationResponse | PlainMessage<TestOperationResponse> | undefined): boolean {
    return proto3.util.equals(TestOperationResponse, a, b);
  }
}

/**
 * User
 * Query
 * UserGetCurrent
 *
 * @generated from message rbac.schema.v1.UserGetCurrentResponse
 */
export class UserGetCurrentResponse extends Message<UserGetCurrentResponse> {
  /**
   * @generated from field: auth.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<UserGetCurrentResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserGetCurrentResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserGetCurrentResponse {
    return new UserGetCurrentResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserGetCurrentResponse {
    return new UserGetCurrentResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserGetCurrentResponse {
    return new UserGetCurrentResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserGetCurrentResponse | PlainMessage<UserGetCurrentResponse> | undefined, b: UserGetCurrentResponse | PlainMessage<UserGetCurrentResponse> | undefined): boolean {
    return proto3.util.equals(UserGetCurrentResponse, a, b);
  }
}

/**
 * UserGetCurrentId
 *
 * @generated from message rbac.schema.v1.UserGetCurrentIdResponse
 */
export class UserGetCurrentIdResponse extends Message<UserGetCurrentIdResponse> {
  /**
   * @generated from field: auth.User.Id user_id = 1;
   */
  userId?: User_Id;

  constructor(data?: PartialMessage<UserGetCurrentIdResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserGetCurrentIdResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "message", T: User_Id },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserGetCurrentIdResponse {
    return new UserGetCurrentIdResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserGetCurrentIdResponse {
    return new UserGetCurrentIdResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserGetCurrentIdResponse {
    return new UserGetCurrentIdResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserGetCurrentIdResponse | PlainMessage<UserGetCurrentIdResponse> | undefined, b: UserGetCurrentIdResponse | PlainMessage<UserGetCurrentIdResponse> | undefined): boolean {
    return proto3.util.equals(UserGetCurrentIdResponse, a, b);
  }
}

/**
 * UserGetList
 * message UserGetListRequest{
 *   string bookmark = 1;
 *   int32 page_size = 2;
 * }
 *
 * @generated from message rbac.schema.v1.UserGetListResponse
 */
export class UserGetListResponse extends Message<UserGetListResponse> {
  /**
   * string bookmark = 2;
   *
   * @generated from field: repeated auth.User users = 1;
   */
  users: User[] = [];

  constructor(data?: PartialMessage<UserGetListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserGetListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "users", kind: "message", T: User, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserGetListResponse {
    return new UserGetListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserGetListResponse {
    return new UserGetListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserGetListResponse {
    return new UserGetListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserGetListResponse | PlainMessage<UserGetListResponse> | undefined, b: UserGetListResponse | PlainMessage<UserGetListResponse> | undefined): boolean {
    return proto3.util.equals(UserGetListResponse, a, b);
  }
}

/**
 * UserGet
 *
 * @generated from message rbac.schema.v1.UserGetRequest
 */
export class UserGetRequest extends Message<UserGetRequest> {
  /**
   * @generated from field: auth.User.Id id = 1;
   */
  id?: User_Id;

  constructor(data?: PartialMessage<UserGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: User_Id },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserGetRequest {
    return new UserGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserGetRequest {
    return new UserGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserGetRequest {
    return new UserGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserGetRequest | PlainMessage<UserGetRequest> | undefined, b: UserGetRequest | PlainMessage<UserGetRequest> | undefined): boolean {
    return proto3.util.equals(UserGetRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.UserGetResponse
 */
export class UserGetResponse extends Message<UserGetResponse> {
  /**
   * @generated from field: auth.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<UserGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserGetResponse {
    return new UserGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserGetResponse {
    return new UserGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserGetResponse {
    return new UserGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserGetResponse | PlainMessage<UserGetResponse> | undefined, b: UserGetResponse | PlainMessage<UserGetResponse> | undefined): boolean {
    return proto3.util.equals(UserGetResponse, a, b);
  }
}

/**
 * UserGetHistory
 *
 * @generated from message rbac.schema.v1.UserGetHistoryRequest
 */
export class UserGetHistoryRequest extends Message<UserGetHistoryRequest> {
  /**
   * @generated from field: auth.User.Id id = 1;
   */
  id?: User_Id;

  constructor(data?: PartialMessage<UserGetHistoryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserGetHistoryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: User_Id },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserGetHistoryRequest {
    return new UserGetHistoryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserGetHistoryRequest {
    return new UserGetHistoryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserGetHistoryRequest {
    return new UserGetHistoryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserGetHistoryRequest | PlainMessage<UserGetHistoryRequest> | undefined, b: UserGetHistoryRequest | PlainMessage<UserGetHistoryRequest> | undefined): boolean {
    return proto3.util.equals(UserGetHistoryRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.UserGetHistoryResponse
 */
export class UserGetHistoryResponse extends Message<UserGetHistoryResponse> {
  /**
   * @generated from field: auth.User.Id user_id = 1;
   */
  userId?: User_Id;

  /**
   * @generated from field: auth.StateActivity history = 2;
   */
  history?: StateActivity;

  constructor(data?: PartialMessage<UserGetHistoryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserGetHistoryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "message", T: User_Id },
    { no: 2, name: "history", kind: "message", T: StateActivity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserGetHistoryResponse {
    return new UserGetHistoryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserGetHistoryResponse {
    return new UserGetHistoryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserGetHistoryResponse {
    return new UserGetHistoryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserGetHistoryResponse | PlainMessage<UserGetHistoryResponse> | undefined, b: UserGetHistoryResponse | PlainMessage<UserGetHistoryResponse> | undefined): boolean {
    return proto3.util.equals(UserGetHistoryResponse, a, b);
  }
}

/**
 * Invoke
 *
 * UserRegister
 *
 * @generated from message rbac.schema.v1.UserRegisterRequest
 */
export class UserRegisterRequest extends Message<UserRegisterRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<UserRegisterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserRegisterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserRegisterRequest {
    return new UserRegisterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserRegisterRequest {
    return new UserRegisterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserRegisterRequest {
    return new UserRegisterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserRegisterRequest | PlainMessage<UserRegisterRequest> | undefined, b: UserRegisterRequest | PlainMessage<UserRegisterRequest> | undefined): boolean {
    return proto3.util.equals(UserRegisterRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.UserRegisterResponse
 */
export class UserRegisterResponse extends Message<UserRegisterResponse> {
  /**
   * @generated from field: auth.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<UserRegisterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserRegisterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserRegisterResponse {
    return new UserRegisterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserRegisterResponse {
    return new UserRegisterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserRegisterResponse {
    return new UserRegisterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserRegisterResponse | PlainMessage<UserRegisterResponse> | undefined, b: UserRegisterResponse | PlainMessage<UserRegisterResponse> | undefined): boolean {
    return proto3.util.equals(UserRegisterResponse, a, b);
  }
}

/**
 * UserUpdateMembership
 *
 * @generated from message rbac.schema.v1.UserUpdateMembershipRequest
 */
export class UserUpdateMembershipRequest extends Message<UserUpdateMembershipRequest> {
  /**
   * @generated from field: auth.User.Id id = 1;
   */
  id?: User_Id;

  /**
   * @generated from field: string collection_id = 2;
   */
  collectionId = "";

  /**
   * @generated from field: string role = 3;
   */
  role = "";

  constructor(data?: PartialMessage<UserUpdateMembershipRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserUpdateMembershipRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: User_Id },
    { no: 2, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserUpdateMembershipRequest {
    return new UserUpdateMembershipRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserUpdateMembershipRequest {
    return new UserUpdateMembershipRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserUpdateMembershipRequest {
    return new UserUpdateMembershipRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserUpdateMembershipRequest | PlainMessage<UserUpdateMembershipRequest> | undefined, b: UserUpdateMembershipRequest | PlainMessage<UserUpdateMembershipRequest> | undefined): boolean {
    return proto3.util.equals(UserUpdateMembershipRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.UserUpdateMembershipResponse
 */
export class UserUpdateMembershipResponse extends Message<UserUpdateMembershipResponse> {
  /**
   * @generated from field: auth.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<UserUpdateMembershipResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.UserUpdateMembershipResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserUpdateMembershipResponse {
    return new UserUpdateMembershipResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserUpdateMembershipResponse {
    return new UserUpdateMembershipResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserUpdateMembershipResponse {
    return new UserUpdateMembershipResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserUpdateMembershipResponse | PlainMessage<UserUpdateMembershipResponse> | undefined, b: UserUpdateMembershipResponse | PlainMessage<UserUpdateMembershipResponse> | undefined): boolean {
    return proto3.util.equals(UserUpdateMembershipResponse, a, b);
  }
}

/**
 * Collection
 * Query
 * CollectionGetList
 * message CollectionGetListRequest{
 *   string bookmark = 1;
 *   int32 page_size = 2;
 * }
 *
 * @generated from message rbac.schema.v1.CollectionGetListResponse
 */
export class CollectionGetListResponse extends Message<CollectionGetListResponse> {
  /**
   * string bookmark = 2;
   *
   * @generated from field: repeated auth.Collection collections = 1;
   */
  collections: Collection[] = [];

  constructor(data?: PartialMessage<CollectionGetListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionGetListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collections", kind: "message", T: Collection, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionGetListResponse {
    return new CollectionGetListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionGetListResponse {
    return new CollectionGetListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionGetListResponse {
    return new CollectionGetListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionGetListResponse | PlainMessage<CollectionGetListResponse> | undefined, b: CollectionGetListResponse | PlainMessage<CollectionGetListResponse> | undefined): boolean {
    return proto3.util.equals(CollectionGetListResponse, a, b);
  }
}

/**
 * CollectionGet
 *
 * @generated from message rbac.schema.v1.CollectionGetRequest
 */
export class CollectionGetRequest extends Message<CollectionGetRequest> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  constructor(data?: PartialMessage<CollectionGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionGetRequest {
    return new CollectionGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionGetRequest {
    return new CollectionGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionGetRequest {
    return new CollectionGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionGetRequest | PlainMessage<CollectionGetRequest> | undefined, b: CollectionGetRequest | PlainMessage<CollectionGetRequest> | undefined): boolean {
    return proto3.util.equals(CollectionGetRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.CollectionGetResponse
 */
export class CollectionGetResponse extends Message<CollectionGetResponse> {
  /**
   * @generated from field: auth.Collection collection = 1;
   */
  collection?: Collection;

  constructor(data?: PartialMessage<CollectionGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection", kind: "message", T: Collection },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionGetResponse {
    return new CollectionGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionGetResponse {
    return new CollectionGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionGetResponse {
    return new CollectionGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionGetResponse | PlainMessage<CollectionGetResponse> | undefined, b: CollectionGetResponse | PlainMessage<CollectionGetResponse> | undefined): boolean {
    return proto3.util.equals(CollectionGetResponse, a, b);
  }
}

/**
 * CollectionGetHistory
 *
 * @generated from message rbac.schema.v1.CollectionGetHistoryRequest
 */
export class CollectionGetHistoryRequest extends Message<CollectionGetHistoryRequest> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  constructor(data?: PartialMessage<CollectionGetHistoryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionGetHistoryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionGetHistoryRequest {
    return new CollectionGetHistoryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionGetHistoryRequest {
    return new CollectionGetHistoryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionGetHistoryRequest {
    return new CollectionGetHistoryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionGetHistoryRequest | PlainMessage<CollectionGetHistoryRequest> | undefined, b: CollectionGetHistoryRequest | PlainMessage<CollectionGetHistoryRequest> | undefined): boolean {
    return proto3.util.equals(CollectionGetHistoryRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.CollectionGetHistoryResponse
 */
export class CollectionGetHistoryResponse extends Message<CollectionGetHistoryResponse> {
  /**
   * @generated from field: repeated auth.Collection collections = 1;
   */
  collections: Collection[] = [];

  constructor(data?: PartialMessage<CollectionGetHistoryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionGetHistoryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collections", kind: "message", T: Collection, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionGetHistoryResponse {
    return new CollectionGetHistoryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionGetHistoryResponse {
    return new CollectionGetHistoryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionGetHistoryResponse {
    return new CollectionGetHistoryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionGetHistoryResponse | PlainMessage<CollectionGetHistoryResponse> | undefined, b: CollectionGetHistoryResponse | PlainMessage<CollectionGetHistoryResponse> | undefined): boolean {
    return proto3.util.equals(CollectionGetHistoryResponse, a, b);
  }
}

/**
 * Invoke
 * CollectionCreate
 *
 * @generated from message rbac.schema.v1.CollectionCreateRequest
 */
export class CollectionCreateRequest extends Message<CollectionCreateRequest> {
  /**
   * @generated from field: auth.Collection collection = 1;
   */
  collection?: Collection;

  constructor(data?: PartialMessage<CollectionCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection", kind: "message", T: Collection },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionCreateRequest {
    return new CollectionCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionCreateRequest {
    return new CollectionCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionCreateRequest {
    return new CollectionCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionCreateRequest | PlainMessage<CollectionCreateRequest> | undefined, b: CollectionCreateRequest | PlainMessage<CollectionCreateRequest> | undefined): boolean {
    return proto3.util.equals(CollectionCreateRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.CollectionCreateResponse
 */
export class CollectionCreateResponse extends Message<CollectionCreateResponse> {
  /**
   * @generated from field: auth.Collection collection = 1;
   */
  collection?: Collection;

  constructor(data?: PartialMessage<CollectionCreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionCreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection", kind: "message", T: Collection },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionCreateResponse {
    return new CollectionCreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionCreateResponse {
    return new CollectionCreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionCreateResponse {
    return new CollectionCreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionCreateResponse | PlainMessage<CollectionCreateResponse> | undefined, b: CollectionCreateResponse | PlainMessage<CollectionCreateResponse> | undefined): boolean {
    return proto3.util.equals(CollectionCreateResponse, a, b);
  }
}

/**
 * CollectionRolesUpdate
 *
 * @generated from message rbac.schema.v1.CollectionUpdateRolesRequest
 */
export class CollectionUpdateRolesRequest extends Message<CollectionUpdateRolesRequest> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: map<string, string> roles_to_add = 2;
   */
  rolesToAdd: { [key: string]: string } = {};

  /**
   * @generated from field: map<string, string> roles_to_remove = 3;
   */
  rolesToRemove: { [key: string]: string } = {};

  constructor(data?: PartialMessage<CollectionUpdateRolesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionUpdateRolesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "roles_to_add", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "roles_to_remove", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionUpdateRolesRequest {
    return new CollectionUpdateRolesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionUpdateRolesRequest {
    return new CollectionUpdateRolesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionUpdateRolesRequest {
    return new CollectionUpdateRolesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionUpdateRolesRequest | PlainMessage<CollectionUpdateRolesRequest> | undefined, b: CollectionUpdateRolesRequest | PlainMessage<CollectionUpdateRolesRequest> | undefined): boolean {
    return proto3.util.equals(CollectionUpdateRolesRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.CollectionUpdateRolesResponse
 */
export class CollectionUpdateRolesResponse extends Message<CollectionUpdateRolesResponse> {
  /**
   * @generated from field: auth.Collection collection = 1;
   */
  collection?: Collection;

  /**
   * @generated from field: map<string, string> roles_added = 2;
   */
  rolesAdded: { [key: string]: string } = {};

  /**
   * @generated from field: map<string, string> roles_removed = 3;
   */
  rolesRemoved: { [key: string]: string } = {};

  constructor(data?: PartialMessage<CollectionUpdateRolesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionUpdateRolesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection", kind: "message", T: Collection },
    { no: 2, name: "roles_added", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "roles_removed", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionUpdateRolesResponse {
    return new CollectionUpdateRolesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionUpdateRolesResponse {
    return new CollectionUpdateRolesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionUpdateRolesResponse {
    return new CollectionUpdateRolesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionUpdateRolesResponse | PlainMessage<CollectionUpdateRolesResponse> | undefined, b: CollectionUpdateRolesResponse | PlainMessage<CollectionUpdateRolesResponse> | undefined): boolean {
    return proto3.util.equals(CollectionUpdateRolesResponse, a, b);
  }
}

/**
 * CollectionPermissionsUpdate
 *
 * @generated from message rbac.schema.v1.CollectionUpdatePermissionRequest
 */
export class CollectionUpdatePermissionRequest extends Message<CollectionUpdatePermissionRequest> {
  /**
   * map<string, ACL> acl = 5;
   *
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  constructor(data?: PartialMessage<CollectionUpdatePermissionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionUpdatePermissionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionUpdatePermissionRequest {
    return new CollectionUpdatePermissionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionUpdatePermissionRequest {
    return new CollectionUpdatePermissionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionUpdatePermissionRequest {
    return new CollectionUpdatePermissionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionUpdatePermissionRequest | PlainMessage<CollectionUpdatePermissionRequest> | undefined, b: CollectionUpdatePermissionRequest | PlainMessage<CollectionUpdatePermissionRequest> | undefined): boolean {
    return proto3.util.equals(CollectionUpdatePermissionRequest, a, b);
  }
}

/**
 * @generated from message rbac.schema.v1.CollectionUpdatePermissionResponse
 */
export class CollectionUpdatePermissionResponse extends Message<CollectionUpdatePermissionResponse> {
  /**
   * @generated from field: auth.Collection collection = 1;
   */
  collection?: Collection;

  constructor(data?: PartialMessage<CollectionUpdatePermissionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.schema.v1.CollectionUpdatePermissionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection", kind: "message", T: Collection },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CollectionUpdatePermissionResponse {
    return new CollectionUpdatePermissionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CollectionUpdatePermissionResponse {
    return new CollectionUpdatePermissionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CollectionUpdatePermissionResponse {
    return new CollectionUpdatePermissionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CollectionUpdatePermissionResponse | PlainMessage<CollectionUpdatePermissionResponse> | undefined, b: CollectionUpdatePermissionResponse | PlainMessage<CollectionUpdatePermissionResponse> | undefined): boolean {
    return proto3.util.equals(CollectionUpdatePermissionResponse, a, b);
  }
}

