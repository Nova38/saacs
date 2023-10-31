// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file rbac/rbac.proto (package rbac, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, FieldMask, Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum rbac.Error
 */
export enum Error {
  /**
   * @generated from enum value: ERROR_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ERROR_REQUEST_INVALID = 1;
   */
  REQUEST_INVALID = 1,

  /**
   * @generated from enum value: ERROR_RUNTIME = 2;
   */
  RUNTIME = 2,

  /**
   * @generated from enum value: ERROR_RUNTIME_BAD_OPS = 3;
   */
  RUNTIME_BAD_OPS = 3,

  /**
   * The collection id is invalid
   *
   * @generated from enum value: ERROR_COLLECTION_INVALID_ID = 11;
   */
  COLLECTION_INVALID_ID = 11,

  /**
   * The collection is not registered
   *
   * @generated from enum value: ERROR_COLLECTION_UNREGISTERED = 12;
   */
  COLLECTION_UNREGISTERED = 12,

  /**
   * The collection is already registered
   *
   * @generated from enum value: ERROR_COLLECTION_ALREADY_REGISTERED = 13;
   */
  COLLECTION_ALREADY_REGISTERED = 13,

  /**
   * The Collection is invalid
   *
   * @generated from enum value: ERROR_COLLECTION_INVALID = 14;
   */
  COLLECTION_INVALID = 14,

  /**
   * The object type name is invalid
   *
   * @generated from enum value: ERROR_COLLECTION_INVALID_OBJECT_TYPE = 15;
   */
  COLLECTION_INVALID_OBJECT_TYPE = 15,

  /**
   * The role id is invalid
   *
   * @generated from enum value: ERROR_COLLECTION_INVALID_ROLE_ID = 16;
   */
  COLLECTION_INVALID_ROLE_ID = 16,

  /**
   * The user does not have permission to perform the operation
   *
   * @generated from enum value: ERROR_USER_INVALID_ID = 20;
   */
  USER_INVALID_ID = 20,

  /**
   * The user is not registered
   *
   * @generated from enum value: ERROR_USER_UNREGISTERED = 21;
   */
  USER_UNREGISTERED = 21,

  /**
   * The user is already registered
   *
   * @generated from enum value: ERROR_USER_ALREADY_REGISTERED = 22;
   */
  USER_ALREADY_REGISTERED = 22,

  /**
   * The user is invalid
   *
   * @generated from enum value: ERROR_USER_INVALID = 23;
   */
  USER_INVALID = 23,

  /**
   * The user does not have a role in the collection
   *
   * @generated from enum value: ERROR_USER_NO_ROLE = 24;
   */
  USER_NO_ROLE = 24,

  /**
   * The user has a deleted role in the collection
   *
   * @generated from enum value: ERROR_USER_DELETED_ROLE = 25;
   */
  USER_DELETED_ROLE = 25,

  /**
   * The user does not have permission to perform the operation
   *
   * @generated from enum value: ERROR_USER_PERMISSION_DENIED = 26;
   */
  USER_PERMISSION_DENIED = 26,

  /**
   * The object id is invalid
   *
   * @generated from enum value: ERROR_OBJECT_INVALID_ID = 31;
   */
  OBJECT_INVALID_ID = 31,

  /**
   * The object is not registered
   *
   * @generated from enum value: ERROR_OBJECT_UNREGISTERED = 32;
   */
  OBJECT_UNREGISTERED = 32,

  /**
   * The object is already registered
   *
   * @generated from enum value: ERROR_OBJECT_ALREADY_REGISTERED = 33;
   */
  OBJECT_ALREADY_REGISTERED = 33,

  /**
   * The object is invalid
   *
   * @generated from enum value: ERROR_OBJECT_INVALID = 34;
   */
  OBJECT_INVALID = 34,

  /**
   * @generated from enum value: ERROR_INVALID_OBJECT_FIELD_PATH = 35;
   */
  INVALID_OBJECT_FIELD_PATH = 35,

  /**
   * @generated from enum value: ERROR_INVALID_OBJECT_FIELD_VALUE = 36;
   */
  INVALID_OBJECT_FIELD_VALUE = 36,
}
// Retrieve enum metadata with: proto3.getEnumType(Error)
proto3.util.setEnumType(Error, "rbac.Error", [
  { no: 0, name: "ERROR_UNSPECIFIED" },
  { no: 1, name: "ERROR_REQUEST_INVALID" },
  { no: 2, name: "ERROR_RUNTIME" },
  { no: 3, name: "ERROR_RUNTIME_BAD_OPS" },
  { no: 11, name: "ERROR_COLLECTION_INVALID_ID" },
  { no: 12, name: "ERROR_COLLECTION_UNREGISTERED" },
  { no: 13, name: "ERROR_COLLECTION_ALREADY_REGISTERED" },
  { no: 14, name: "ERROR_COLLECTION_INVALID" },
  { no: 15, name: "ERROR_COLLECTION_INVALID_OBJECT_TYPE" },
  { no: 16, name: "ERROR_COLLECTION_INVALID_ROLE_ID" },
  { no: 20, name: "ERROR_USER_INVALID_ID" },
  { no: 21, name: "ERROR_USER_UNREGISTERED" },
  { no: 22, name: "ERROR_USER_ALREADY_REGISTERED" },
  { no: 23, name: "ERROR_USER_INVALID" },
  { no: 24, name: "ERROR_USER_NO_ROLE" },
  { no: 25, name: "ERROR_USER_DELETED_ROLE" },
  { no: 26, name: "ERROR_USER_PERMISSION_DENIED" },
  { no: 31, name: "ERROR_OBJECT_INVALID_ID" },
  { no: 32, name: "ERROR_OBJECT_UNREGISTERED" },
  { no: 33, name: "ERROR_OBJECT_ALREADY_REGISTERED" },
  { no: 34, name: "ERROR_OBJECT_INVALID" },
  { no: 35, name: "ERROR_INVALID_OBJECT_FIELD_PATH" },
  { no: 36, name: "ERROR_INVALID_OBJECT_FIELD_VALUE" },
]);

/**
 * The ACL will be defined in a map per role
 *
 * @generated from message rbac.ACL
 */
export class ACL extends Message<ACL> {
  /**
   * The permissions for modifications to valid roles in the collection
   * # Policy
   *   - Maps to the domain: DOMAIN_COLLECTION_ROLES
   *
   * @generated from field: rbac.ACL.Policy.Roles role_defs = 1;
   */
  roleDefs?: ACL_Policy_Roles;

  /**
   * The permissions for modifications the permissions of a role
   * # Policy
   *   - Maps to the domain: DOMAIN_COLLECTION_PERMISSION
   *
   * @generated from field: rbac.ACL.Policy.Roles role_permissions = 2;
   */
  rolePermissions?: ACL_Policy_Roles;

  /**
   * The permissions for modifications user memberships in the collection
   * # Policy
   *   - Maps to the domain: DOMAIN_USER
   *
   * @generated from field: rbac.ACL.Policy.Roles memberships = 3;
   */
  memberships?: ACL_Policy_Roles;

  /**
   * The permissions for modifications to the object
   * # Policy
   *   - Maps to the domain: DOMAIN_OBJECT
   *
   * @generated from field: rbac.ACL.Policy.Object object = 4;
   */
  object?: ACL_Policy_Object;

  /**
   * The permissions for modifications to the object's fields
   * # Policy
   *   - Maps to the domain: DOMAIN_OBJECT_FIELD
   *
   * @generated from field: rbac.ACL.PathRolePermission object_paths = 5;
   */
  objectPaths?: ACL_PathRolePermission;

  constructor(data?: PartialMessage<ACL>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.ACL";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "role_defs", kind: "message", T: ACL_Policy_Roles },
    { no: 2, name: "role_permissions", kind: "message", T: ACL_Policy_Roles },
    { no: 3, name: "memberships", kind: "message", T: ACL_Policy_Roles },
    { no: 4, name: "object", kind: "message", T: ACL_Policy_Object },
    { no: 5, name: "object_paths", kind: "message", T: ACL_PathRolePermission },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACL {
    return new ACL().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACL {
    return new ACL().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACL {
    return new ACL().fromJsonString(jsonString, options);
  }

  static equals(a: ACL | PlainMessage<ACL> | undefined, b: ACL | PlainMessage<ACL> | undefined): boolean {
    return proto3.util.equals(ACL, a, b);
  }
}

/**
 * @generated from enum rbac.ACL.Domain
 */
export enum ACL_Domain {
  /**
   * @generated from enum value: DOMAIN_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Meta create
   *
   * @generated from enum value: DOMAIN_COLLECTION = 1;
   */
  COLLECTION = 1,

  /**
   * @generated from enum value: DOMAIN_COLLECTION_MEMBERSHIP = 2;
   */
  COLLECTION_MEMBERSHIP = 2,

  /**
   * @generated from enum value: DOMAIN_COLLECTION_PERMISSION = 3;
   */
  COLLECTION_PERMISSION = 3,

  /**
   * @generated from enum value: DOMAIN_COLLECTION_ROLES = 4;
   */
  COLLECTION_ROLES = 4,

  /**
   * @generated from enum value: DOMAIN_USER = 5;
   */
  USER = 5,

  /**
   * @generated from enum value: DOMAIN_OBJECT = 6;
   */
  OBJECT = 6,

  /**
   * @generated from enum value: DOMAIN_OBJECT_FIELD = 7;
   */
  OBJECT_FIELD = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(ACL_Domain)
proto3.util.setEnumType(ACL_Domain, "rbac.ACL.Domain", [
  { no: 0, name: "DOMAIN_UNSPECIFIED" },
  { no: 1, name: "DOMAIN_COLLECTION" },
  { no: 2, name: "DOMAIN_COLLECTION_MEMBERSHIP" },
  { no: 3, name: "DOMAIN_COLLECTION_PERMISSION" },
  { no: 4, name: "DOMAIN_COLLECTION_ROLES" },
  { no: 5, name: "DOMAIN_USER" },
  { no: 6, name: "DOMAIN_OBJECT" },
  { no: 7, name: "DOMAIN_OBJECT_FIELD" },
]);

/**
 * @generated from enum rbac.ACL.Action
 */
export enum ACL_Action {
  /**
   * Default
   *
   * @generated from enum value: ACTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * View
   *
   * @generated from enum value: ACTION_VIEW = 1;
   */
  VIEW = 1,

  /**
   * Create
   *
   * @generated from enum value: ACTION_CREATE = 2;
   */
  CREATE = 2,

  /**
   * Delete
   *
   * @generated from enum value: ACTION_DELETE = 3;
   */
  DELETE = 3,

  /**
   * Edit/Update
   *
   * @generated from enum value: ACTION_EDIT = 4;
   */
  EDIT = 4,

  /**
   * View the suggested update to the object
   *
   * @generated from enum value: ACTION_VIEW_SUGGEST = 5;
   */
  VIEW_SUGGEST = 5,

  /**
   * Suggest an update to the object
   *
   * @generated from enum value: ACTION_SUGGEST_EDIT = 6;
   */
  SUGGEST_EDIT = 6,

  /**
   * Approve the suggested update
   *
   * @generated from enum value: ACTION_SUGGEST_APPROVE = 7;
   */
  SUGGEST_APPROVE = 7,

  /**
   * Reject the suggested update
   *
   * @generated from enum value: ACTION_SUGGEST_REJECT = 8;
   */
  SUGGEST_REJECT = 8,

  /**
   * View the history of the object
   *
   * @generated from enum value: ACTION_VIEW_HISTORY = 9;
   */
  VIEW_HISTORY = 9,

  /**
   * view, hide, unhide
   *
   * @generated from enum value: ACTION_HIDDEN_TX = 10;
   */
  HIDDEN_TX = 10,
}
// Retrieve enum metadata with: proto3.getEnumType(ACL_Action)
proto3.util.setEnumType(ACL_Action, "rbac.ACL.Action", [
  { no: 0, name: "ACTION_UNSPECIFIED" },
  { no: 1, name: "ACTION_VIEW" },
  { no: 2, name: "ACTION_CREATE" },
  { no: 3, name: "ACTION_DELETE" },
  { no: 4, name: "ACTION_EDIT" },
  { no: 5, name: "ACTION_VIEW_SUGGEST" },
  { no: 6, name: "ACTION_SUGGEST_EDIT" },
  { no: 7, name: "ACTION_SUGGEST_APPROVE" },
  { no: 8, name: "ACTION_SUGGEST_REJECT" },
  { no: 9, name: "ACTION_VIEW_HISTORY" },
  { no: 10, name: "ACTION_HIDDEN_TX" },
]);

/**
 * @generated from message rbac.ACL.Operation
 */
export class ACL_Operation extends Message<ACL_Operation> {
  /**
   * @generated from field: rbac.ACL.Domain domain = 1;
   */
  domain = ACL_Domain.UNSPECIFIED;

  /**
   * @generated from field: rbac.ACL.Action action = 2;
   */
  action = ACL_Action.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.FieldMask paths = 3;
   */
  paths?: FieldMask;

  constructor(data?: PartialMessage<ACL_Operation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.ACL.Operation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "domain", kind: "enum", T: proto3.getEnumType(ACL_Domain) },
    { no: 2, name: "action", kind: "enum", T: proto3.getEnumType(ACL_Action) },
    { no: 3, name: "paths", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACL_Operation {
    return new ACL_Operation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACL_Operation {
    return new ACL_Operation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACL_Operation {
    return new ACL_Operation().fromJsonString(jsonString, options);
  }

  static equals(a: ACL_Operation | PlainMessage<ACL_Operation> | undefined, b: ACL_Operation | PlainMessage<ACL_Operation> | undefined): boolean {
    return proto3.util.equals(ACL_Operation, a, b);
  }
}

/**
 * Types of Policies for the ACL
 *
 * @generated from message rbac.ACL.Policy
 */
export class ACL_Policy extends Message<ACL_Policy> {
  /**
   * @generated from oneof rbac.ACL.Policy.policy
   */
  policy: {
    /**
     * @generated from field: rbac.ACL.Policy.Roles roles = 1;
     */
    value: ACL_Policy_Roles;
    case: "roles";
  } | {
    /**
     * @generated from field: rbac.ACL.Policy.Roles membership = 2;
     */
    value: ACL_Policy_Roles;
    case: "membership";
  } | {
    /**
     * @generated from field: rbac.ACL.Policy.Object object = 3;
     */
    value: ACL_Policy_Object;
    case: "object";
  } | {
    /**
     * @generated from field: rbac.ACL.Policy.ObjectField object_field = 4;
     */
    value: ACL_Policy_ObjectField;
    case: "objectField";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ACL_Policy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.ACL.Policy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "roles", kind: "message", T: ACL_Policy_Roles, oneof: "policy" },
    { no: 2, name: "membership", kind: "message", T: ACL_Policy_Roles, oneof: "policy" },
    { no: 3, name: "object", kind: "message", T: ACL_Policy_Object, oneof: "policy" },
    { no: 4, name: "object_field", kind: "message", T: ACL_Policy_ObjectField, oneof: "policy" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACL_Policy {
    return new ACL_Policy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACL_Policy {
    return new ACL_Policy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACL_Policy {
    return new ACL_Policy().fromJsonString(jsonString, options);
  }

  static equals(a: ACL_Policy | PlainMessage<ACL_Policy> | undefined, b: ACL_Policy | PlainMessage<ACL_Policy> | undefined): boolean {
    return proto3.util.equals(ACL_Policy, a, b);
  }
}

/**
 * Policy for altering the membership of a role or perms of a role
 *
 * @generated from message rbac.ACL.Policy.Roles
 */
export class ACL_Policy_Roles extends Message<ACL_Policy_Roles> {
  /**
   * @generated from field: bool view = 1;
   */
  view = false;

  /**
   * @generated from field: bool create = 2;
   */
  create = false;

  /**
   * @generated from field: bool edit = 3;
   */
  edit = false;

  /**
   * @generated from field: bool delete = 4;
   */
  delete = false;

  constructor(data?: PartialMessage<ACL_Policy_Roles>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.ACL.Policy.Roles";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "view", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "create", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "edit", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "delete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACL_Policy_Roles {
    return new ACL_Policy_Roles().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACL_Policy_Roles {
    return new ACL_Policy_Roles().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACL_Policy_Roles {
    return new ACL_Policy_Roles().fromJsonString(jsonString, options);
  }

  static equals(a: ACL_Policy_Roles | PlainMessage<ACL_Policy_Roles> | undefined, b: ACL_Policy_Roles | PlainMessage<ACL_Policy_Roles> | undefined): boolean {
    return proto3.util.equals(ACL_Policy_Roles, a, b);
  }
}

/**
 * Policy for altering the object
 *
 * @generated from message rbac.ACL.Policy.Object
 */
export class ACL_Policy_Object extends Message<ACL_Policy_Object> {
  /**
   * @generated from field: bool view = 1;
   */
  view = false;

  /**
   * @generated from field: bool create = 2;
   */
  create = false;

  /**
   * @generated from field: bool delete = 3;
   */
  delete = false;

  /**
   * @generated from field: bool view_history = 4;
   */
  viewHistory = false;

  /**
   * @generated from field: bool hidden_tx = 5;
   */
  hiddenTx = false;

  constructor(data?: PartialMessage<ACL_Policy_Object>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.ACL.Policy.Object";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "view", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "create", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "delete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "view_history", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "hidden_tx", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACL_Policy_Object {
    return new ACL_Policy_Object().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACL_Policy_Object {
    return new ACL_Policy_Object().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACL_Policy_Object {
    return new ACL_Policy_Object().fromJsonString(jsonString, options);
  }

  static equals(a: ACL_Policy_Object | PlainMessage<ACL_Policy_Object> | undefined, b: ACL_Policy_Object | PlainMessage<ACL_Policy_Object> | undefined): boolean {
    return proto3.util.equals(ACL_Policy_Object, a, b);
  }
}

/**
 * Policy for altering the object
 *
 * @generated from message rbac.ACL.Policy.ObjectField
 */
export class ACL_Policy_ObjectField extends Message<ACL_Policy_ObjectField> {
  /**
   * @generated from field: bool view = 1;
   */
  view = false;

  /**
   * @generated from field: bool edit = 2;
   */
  edit = false;

  /**
   * @generated from field: bool suggest_edit = 3;
   */
  suggestEdit = false;

  /**
   * @generated from field: bool suggest_approve = 4;
   */
  suggestApprove = false;

  /**
   * @generated from field: bool suggest_reject = 5;
   */
  suggestReject = false;

  constructor(data?: PartialMessage<ACL_Policy_ObjectField>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.ACL.Policy.ObjectField";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "view", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "edit", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "suggest_edit", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "suggest_approve", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "suggest_reject", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACL_Policy_ObjectField {
    return new ACL_Policy_ObjectField().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACL_Policy_ObjectField {
    return new ACL_Policy_ObjectField().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACL_Policy_ObjectField {
    return new ACL_Policy_ObjectField().fromJsonString(jsonString, options);
  }

  static equals(a: ACL_Policy_ObjectField | PlainMessage<ACL_Policy_ObjectField> | undefined, b: ACL_Policy_ObjectField | PlainMessage<ACL_Policy_ObjectField> | undefined): boolean {
    return proto3.util.equals(ACL_Policy_ObjectField, a, b);
  }
}

/**
 * This message is the tree node for operations on the state object
 *
 * @generated from message rbac.ACL.PathRolePermission
 */
export class ACL_PathRolePermission extends Message<ACL_PathRolePermission> {
  /**
   * The path is a sub path of a field mask
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: bool allow_sub_paths = 2;
   */
  allowSubPaths = false;

  /**
   * The key is a valid sub path in the type of state object
   *
   * @generated from field: map<string, rbac.ACL.PathRolePermission> sub_paths = 3;
   */
  subPaths: { [key: string]: ACL_PathRolePermission } = {};

  /**
   * The Key must be a valid role id defined in the roles map
   *
   * @generated from field: rbac.ACL.Policy.ObjectField policy = 4;
   */
  policy?: ACL_Policy_ObjectField;

  constructor(data?: PartialMessage<ACL_PathRolePermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.ACL.PathRolePermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "allow_sub_paths", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "sub_paths", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: ACL_PathRolePermission} },
    { no: 4, name: "policy", kind: "message", T: ACL_Policy_ObjectField },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACL_PathRolePermission {
    return new ACL_PathRolePermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACL_PathRolePermission {
    return new ACL_PathRolePermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACL_PathRolePermission {
    return new ACL_PathRolePermission().fromJsonString(jsonString, options);
  }

  static equals(a: ACL_PathRolePermission | PlainMessage<ACL_PathRolePermission> | undefined, b: ACL_PathRolePermission | PlainMessage<ACL_PathRolePermission> | undefined): boolean {
    return proto3.util.equals(ACL_PathRolePermission, a, b);
  }
}

/**
 * @generated from message rbac.Collection
 */
export class Collection extends Message<Collection> {
  /**
   * The key for the ledger
   *
   * @generated from field: rbac.Collection.Id id = 1;
   */
  id?: Collection_Id;

  /**
   * The namespace of the object
   *
   * @generated from field: string object_namespace = 2;
   */
  objectNamespace = "";

  /**
   * The full name of the object type
   * must be a valid protobuf message type
   *
   * @generated from field: string object_type = 3;
   */
  objectType = "";

  /**
   * Declared Roles for the collection
   *   - The key is the role id
   *   - The value is the role name
   *
   * @generated from field: map<int32, string> roles = 4;
   */
  roles: { [key: number]: string } = {};

  /**
   * @generated from field: repeated int32 role_nums = 9;
   */
  roleNums: number[] = [];

  /**
   * Declared Permissions for the permissions of all roles in the collection
   *
   * @generated from field: map<int32, rbac.ACL> acl = 5;
   */
  acl: { [key: number]: ACL } = {};

  constructor(data?: PartialMessage<Collection>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.Collection";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: Collection_Id },
    { no: 2, name: "object_namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "roles", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 9, name: "role_nums", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 5, name: "acl", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: ACL} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Collection {
    return new Collection().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Collection {
    return new Collection().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Collection {
    return new Collection().fromJsonString(jsonString, options);
  }

  static equals(a: Collection | PlainMessage<Collection> | undefined, b: Collection | PlainMessage<Collection> | undefined): boolean {
    return proto3.util.equals(Collection, a, b);
  }
}

/**
 * @generated from message rbac.Collection.Id
 */
export class Collection_Id extends Message<Collection_Id> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  constructor(data?: PartialMessage<Collection_Id>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.Collection.Id";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Collection_Id {
    return new Collection_Id().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Collection_Id {
    return new Collection_Id().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Collection_Id {
    return new Collection_Id().fromJsonString(jsonString, options);
  }

  static equals(a: Collection_Id | PlainMessage<Collection_Id> | undefined, b: Collection_Id | PlainMessage<Collection_Id> | undefined): boolean {
    return proto3.util.equals(Collection_Id, a, b);
  }
}

/**
 * Users are a special type of object
 * buf:lint:ignore MESSAGE_NO_DELETE
 *
 * @generated from message rbac.User
 */
export class User extends Message<User> {
  /**
   * The key for the ledger
   *
   * @generated from field: rbac.User.Id id = 1;
   */
  id?: User_Id;

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * Key is the collectionID
   *
   * @generated from field: map<string, rbac.User.Role> roles = 3;
   */
  roles: { [key: string]: User_Role } = {};

  /**
   * @generated from field: google.protobuf.Struct metadata = 4;
   */
  metadata?: Struct;

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: User_Id },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "roles", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: User_Role} },
    { no: 4, name: "metadata", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

/**
 * The key for the ledger
 *
 * @generated from message rbac.User.Id
 */
export class User_Id extends Message<User_Id> {
  /**
   * @generated from field: string msp_id = 1;
   */
  mspId = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<User_Id>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.User.Id";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User_Id {
    return new User_Id().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User_Id {
    return new User_Id().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User_Id {
    return new User_Id().fromJsonString(jsonString, options);
  }

  static equals(a: User_Id | PlainMessage<User_Id> | undefined, b: User_Id | PlainMessage<User_Id> | undefined): boolean {
    return proto3.util.equals(User_Id, a, b);
  }
}

/**
 * @generated from message rbac.User.Role
 */
export class User_Role extends Message<User_Role> {
  /**
   * @generated from field: rbac.Collection.Id collection_id = 1;
   */
  collectionId?: Collection_Id;

  /**
   * @generated from field: int32 role_id = 2;
   */
  roleId = 0;

  /**
   * @generated from field: rbac.User.Id granted_by = 3;
   */
  grantedBy?: User_Id;

  constructor(data?: PartialMessage<User_Role>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.User.Role";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "message", T: Collection_Id },
    { no: 2, name: "role_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "granted_by", kind: "message", T: User_Id },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User_Role {
    return new User_Role().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User_Role {
    return new User_Role().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User_Role {
    return new User_Role().fromJsonString(jsonString, options);
  }

  static equals(a: User_Role | PlainMessage<User_Role> | undefined, b: User_Role | PlainMessage<User_Role> | undefined): boolean {
    return proto3.util.equals(User_Role, a, b);
  }
}

/**
 * @generated from message rbac.StateActivity
 */
export class StateActivity extends Message<StateActivity> {
  /**
   * @generated from field: string tx_id = 1;
   */
  txId = "";

  /**
   * @generated from field: string note = 2;
   */
  note = "";

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: rbac.User.Id user_id = 4;
   */
  userId?: User_Id;

  constructor(data?: PartialMessage<StateActivity>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.StateActivity";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "user_id", kind: "message", T: User_Id },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateActivity {
    return new StateActivity().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateActivity {
    return new StateActivity().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateActivity {
    return new StateActivity().fromJsonString(jsonString, options);
  }

  static equals(a: StateActivity | PlainMessage<StateActivity> | undefined, b: StateActivity | PlainMessage<StateActivity> | undefined): boolean {
    return proto3.util.equals(StateActivity, a, b);
  }
}

/**
 * @generated from message rbac.History
 */
export class History extends Message<History> {
  /**
   * @generated from field: repeated rbac.History.Entry entries = 1;
   */
  entries: History_Entry[] = [];

  constructor(data?: PartialMessage<History>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.History";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entries", kind: "message", T: History_Entry, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): History {
    return new History().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): History {
    return new History().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): History {
    return new History().fromJsonString(jsonString, options);
  }

  static equals(a: History | PlainMessage<History> | undefined, b: History | PlainMessage<History> | undefined): boolean {
    return proto3.util.equals(History, a, b);
  }
}

/**
 * @generated from message rbac.History.Entry
 */
export class History_Entry extends Message<History_Entry> {
  /**
   * @generated from field: string tx_id = 1;
   */
  txId = "";

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: bool is_deleted = 3;
   */
  isDeleted = false;

  /**
   * @generated from field: bool is_hidden = 4;
   */
  isHidden = false;

  /**
   * @generated from field: google.protobuf.Any state = 5;
   */
  state?: Any;

  constructor(data?: PartialMessage<History_Entry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbac.History.Entry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "is_deleted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "is_hidden", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "state", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): History_Entry {
    return new History_Entry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): History_Entry {
    return new History_Entry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): History_Entry {
    return new History_Entry().fromJsonString(jsonString, options);
  }

  static equals(a: History_Entry | PlainMessage<History_Entry> | undefined, b: History_Entry | PlainMessage<History_Entry> | undefined): boolean {
    return proto3.util.equals(History_Entry, a, b);
  }
}

