// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file auth/v1/objects.proto (package auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, FieldMask, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Action, AuthType, ItemKind } from "./auth_pb.js";

/**
 * Keys
 * ─────────────────────────────────────────────────────────────────────────────────────
 * Item Keys
 * When converted to its string form it will be:
 * - Key := {ITEM_TYPE}{COLLECTION_ID}{...ITEM_ID}
 * 
 * Reference Keys
 * Used to store references to items for case like a user having a role
 * When converted to its string form it will be:
 * {Ref}{REFERENCE_TYPE}{COLLECTION_ID}[{ITEM1_TYPE}{...ITEM1_ID}][{ITEM2_TYPE}{...ITEM2_ID}]
 * 
 * 
 * SubKeys
 * When converted to its string form it will be:
 * {SUB_ITEM_TYPE}{COLLECTION_ID}{ITEM_TYPE}{...ITEM_ID}{SUB_ITEM_ID}
 * Examples
 * - Suggestion := {auth.Suggestion}  {COLLECTION_ID}{ITEM_TYPE}{...ITEM_ID}{SUGGESTION_ID}
 * - HiddenTxList := {auth.HiddenTxList}{COLLECTION_ID}{ITEM_TYPE} {...ITEM_ID}
 *
 * @generated from message auth.ItemKey
 */
export class ItemKey extends Message<ItemKey> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string item_type = 2;
   */
  itemType = "";

  /**
   * @generated from field: auth.ItemKind item_kind = 3;
   */
  itemKind = ItemKind.UNSPECIFIED;

  /**
   * @generated from field: repeated string item_key_parts = 4;
   */
  itemKeyParts: string[] = [];

  constructor(data?: PartialMessage<ItemKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.ItemKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "item_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "item_kind", kind: "enum", T: proto3.getEnumType(ItemKind) },
    { no: 4, name: "item_key_parts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ItemKey {
    return new ItemKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ItemKey {
    return new ItemKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ItemKey {
    return new ItemKey().fromJsonString(jsonString, options);
  }

  static equals(a: ItemKey | PlainMessage<ItemKey> | undefined, b: ItemKey | PlainMessage<ItemKey> | undefined): boolean {
    return proto3.util.equals(ItemKey, a, b);
  }
}

/**
 * @generated from message auth.Item
 */
export class Item extends Message<Item> {
  /**
   * @generated from field: auth.ItemKey key = 1;
   */
  key?: ItemKey;

  /**
   * @generated from field: google.protobuf.Any value = 2;
   */
  value?: Any;

  constructor(data?: PartialMessage<Item>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Item";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "message", T: ItemKey },
    { no: 2, name: "value", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Item {
    return new Item().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Item {
    return new Item().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Item {
    return new Item().fromJsonString(jsonString, options);
  }

  static equals(a: Item | PlainMessage<Item> | undefined, b: Item | PlainMessage<Item> | undefined): boolean {
    return proto3.util.equals(Item, a, b);
  }
}

/**
 * Reference Keys
 * {auth.Reference}{REFERENCE_TYPE}{COLLECTION_ID}[{ITEM1_TYPE}{...ITEM1_ID}][{ITEM2_TYPE}{...ITEM2_ID}]
 *
 * @generated from message auth.ReferenceKey
 */
export class ReferenceKey extends Message<ReferenceKey> {
  /**
   *  string reference_type = 2;
   *
   * @generated from field: auth.ItemKey key1 = 1;
   */
  key1?: ItemKey;

  /**
   * @generated from field: auth.ItemKey key2 = 2;
   */
  key2?: ItemKey;

  constructor(data?: PartialMessage<ReferenceKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.ReferenceKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key1", kind: "message", T: ItemKey },
    { no: 2, name: "key2", kind: "message", T: ItemKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceKey {
    return new ReferenceKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceKey {
    return new ReferenceKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceKey {
    return new ReferenceKey().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceKey | PlainMessage<ReferenceKey> | undefined, b: ReferenceKey | PlainMessage<ReferenceKey> | undefined): boolean {
    return proto3.util.equals(ReferenceKey, a, b);
  }
}

/**
 * Collection
 * ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 * Note that the types of items are stored in the default ACLEntry
 * 
 * key := {COLLECTION}{COLLECTION_ID}
 *
 * @generated from message auth.Collection
 */
export class Collection extends Message<Collection> {
  /**
   * The key for the ledger
   *
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: auth.AuthType auth_type = 3;
   */
  authType = AuthType.UNSPECIFIED;

  /**
   * @generated from field: repeated string item_types = 4;
   */
  itemTypes: string[] = [];

  /**
   * @generated from field: auth.Polices default = 5;
   */
  default?: Polices;

  constructor(data?: PartialMessage<Collection>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Collection";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "auth_type", kind: "enum", T: proto3.getEnumType(AuthType) },
    { no: 4, name: "item_types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "default", kind: "message", T: Polices },
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
 * @generated from message auth.Role
 */
export class Role extends Message<Role> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string role_id = 2;
   */
  roleId = "";

  /**
   * @generated from field: auth.Polices polices = 4;
   */
  polices?: Polices;

  /**
   * @generated from field: string note = 5;
   */
  note = "";

  /**
   * @generated from field: repeated string parent_role_ids = 6;
   */
  parentRoleIds: string[] = [];

  constructor(data?: PartialMessage<Role>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Role";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "role_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "polices", kind: "message", T: Polices },
    { no: 5, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "parent_role_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role {
    return new Role().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJsonString(jsonString, options);
  }

  static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean {
    return proto3.util.equals(Role, a, b);
  }
}

/**
 * An attribute is used to define permissions via the value of the attribute in the
 * users certificate for a given msp
 *
 * @generated from message auth.Attribute
 */
export class Attribute extends Message<Attribute> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * The msp of the organization that this attribute applies to
   *
   * @generated from field: string msp_id = 2;
   */
  mspId = "";

  /**
   * The oid of the attribute
   *
   * @generated from field: string oid = 3;
   */
  oid = "";

  /**
   * The value of the attribute required to be satisfied by the user to have the
   * role
   *
   * @generated from field: string value = 4;
   */
  value = "";

  /**
   * The Permission that the user will have if they have the attribute
   *
   * @generated from field: auth.Polices polices = 5;
   */
  polices?: Polices;

  /**
   * @generated from field: string note = 6;
   */
  note = "";

  constructor(data?: PartialMessage<Attribute>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Attribute";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "oid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "polices", kind: "message", T: Polices },
    { no: 6, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Attribute {
    return new Attribute().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Attribute {
    return new Attribute().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Attribute {
    return new Attribute().fromJsonString(jsonString, options);
  }

  static equals(a: Attribute | PlainMessage<Attribute> | undefined, b: Attribute | PlainMessage<Attribute> | undefined): boolean {
    return proto3.util.equals(Attribute, a, b);
  }
}

/**
 * Membership is used to store permissions for a user in a collection
 *
 * @generated from message auth.UserDirectMembership
 */
export class UserDirectMembership extends Message<UserDirectMembership> {
  /**
   * The collection that the user is a member of
   *
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * The msp of the organization that the user's certificate is from
   *
   * @generated from field: string msp_id = 2;
   */
  mspId = "";

  /**
   * The id of the user from the certificate
   *
   * @generated from field: string user_id = 3;
   */
  userId = "";

  /**
   * The Permissions that the user will have
   *
   * @generated from field: auth.Polices polices = 4;
   */
  polices?: Polices;

  /**
   * @generated from field: string note = 6;
   */
  note = "";

  constructor(data?: PartialMessage<UserDirectMembership>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.UserDirectMembership";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "polices", kind: "message", T: Polices },
    { no: 6, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserDirectMembership {
    return new UserDirectMembership().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserDirectMembership {
    return new UserDirectMembership().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserDirectMembership {
    return new UserDirectMembership().fromJsonString(jsonString, options);
  }

  static equals(a: UserDirectMembership | PlainMessage<UserDirectMembership> | undefined, b: UserDirectMembership | PlainMessage<UserDirectMembership> | undefined): boolean {
    return proto3.util.equals(UserDirectMembership, a, b);
  }
}

/**
 * @generated from message auth.UserEmbeddedRoles
 */
export class UserEmbeddedRoles extends Message<UserEmbeddedRoles> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * The msp of the organization that the user's certificate is from
   *
   * @generated from field: string msp_id = 2;
   */
  mspId = "";

  /**
   * The id of the user from the certificate
   *
   * @generated from field: string user_id = 3;
   */
  userId = "";

  /**
   * The roles that the user has in the collection
   * key is the collection id
   * value is the list of rolesIds
   *
   * @generated from field: map<string, auth.RoleList> roles = 4;
   */
  roles: { [key: string]: RoleList } = {};

  constructor(data?: PartialMessage<UserEmbeddedRoles>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.UserEmbeddedRoles";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "roles", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: RoleList} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserEmbeddedRoles {
    return new UserEmbeddedRoles().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserEmbeddedRoles {
    return new UserEmbeddedRoles().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserEmbeddedRoles {
    return new UserEmbeddedRoles().fromJsonString(jsonString, options);
  }

  static equals(a: UserEmbeddedRoles | PlainMessage<UserEmbeddedRoles> | undefined, b: UserEmbeddedRoles | PlainMessage<UserEmbeddedRoles> | undefined): boolean {
    return proto3.util.equals(UserEmbeddedRoles, a, b);
  }
}

/**
 * @generated from message auth.RoleList
 */
export class RoleList extends Message<RoleList> {
  /**
   * @generated from field: repeated string role_id = 1;
   */
  roleId: string[] = [];

  constructor(data?: PartialMessage<RoleList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.RoleList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "role_id", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleList {
    return new RoleList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleList {
    return new RoleList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleList {
    return new RoleList().fromJsonString(jsonString, options);
  }

  static equals(a: RoleList | PlainMessage<RoleList> | undefined, b: RoleList | PlainMessage<RoleList> | undefined): boolean {
    return proto3.util.equals(RoleList, a, b);
  }
}

/**
 * @generated from message auth.UserCollectionRoles
 */
export class UserCollectionRoles extends Message<UserCollectionRoles> {
  /**
   * The collection that the user is a member of
   *
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * The msp of the organization that the user's certificate is from
   *
   * @generated from field: string msp_id = 2;
   */
  mspId = "";

  /**
   * The id of the user from the certificate
   *
   * @generated from field: string user_id = 3;
   */
  userId = "";

  /**
   * The roles that the user has in the collection
   *
   * @generated from field: repeated string role_ids = 4;
   */
  roleIds: string[] = [];

  /**
   * @generated from field: string note = 6;
   */
  note = "";

  constructor(data?: PartialMessage<UserCollectionRoles>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.UserCollectionRoles";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "role_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserCollectionRoles {
    return new UserCollectionRoles().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserCollectionRoles {
    return new UserCollectionRoles().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserCollectionRoles {
    return new UserCollectionRoles().fromJsonString(jsonString, options);
  }

  static equals(a: UserCollectionRoles | PlainMessage<UserCollectionRoles> | undefined, b: UserCollectionRoles | PlainMessage<UserCollectionRoles> | undefined): boolean {
    return proto3.util.equals(UserCollectionRoles, a, b);
  }
}

/**
 * Key should be
 * {auth.Suggestion}{COLLECTION_ID}{ITEM_TYPE}{...ITEM_ID}{SUGGESTION_ID}
 *
 * @generated from message auth.Suggestion
 */
export class Suggestion extends Message<Suggestion> {
  /**
   * @generated from field: auth.ItemKey primary_key = 1;
   */
  primaryKey?: ItemKey;

  /**
   * @generated from field: string suggestion_id = 2;
   */
  suggestionId = "";

  /**
   * @generated from field: google.protobuf.FieldMask paths = 5;
   */
  paths?: FieldMask;

  /**
   * @generated from field: google.protobuf.Any value = 6;
   */
  value?: Any;

  constructor(data?: PartialMessage<Suggestion>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Suggestion";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "primary_key", kind: "message", T: ItemKey },
    { no: 2, name: "suggestion_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "paths", kind: "message", T: FieldMask },
    { no: 6, name: "value", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Suggestion {
    return new Suggestion().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Suggestion {
    return new Suggestion().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Suggestion {
    return new Suggestion().fromJsonString(jsonString, options);
  }

  static equals(a: Suggestion | PlainMessage<Suggestion> | undefined, b: Suggestion | PlainMessage<Suggestion> | undefined): boolean {
    return proto3.util.equals(Suggestion, a, b);
  }
}

/**
 * @generated from message auth.HiddenTx
 */
export class HiddenTx extends Message<HiddenTx> {
  /**
   * @generated from field: string tx_id = 1;
   */
  txId = "";

  /**
   * @generated from field: string msp_id = 2;
   */
  mspId = "";

  /**
   * @generated from field: string user_id = 3;
   */
  userId = "";

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: string note = 5;
   */
  note = "";

  constructor(data?: PartialMessage<HiddenTx>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.HiddenTx";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    { no: 5, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HiddenTx {
    return new HiddenTx().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HiddenTx {
    return new HiddenTx().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HiddenTx {
    return new HiddenTx().fromJsonString(jsonString, options);
  }

  static equals(a: HiddenTx | PlainMessage<HiddenTx> | undefined, b: HiddenTx | PlainMessage<HiddenTx> | undefined): boolean {
    return proto3.util.equals(HiddenTx, a, b);
  }
}

/**
 * Key should be {COLLECTION_ID}{auth.HiddenTxList}{ITEM_TYPE}{...ITEM_ID}
 *
 * @generated from message auth.HiddenTxList
 */
export class HiddenTxList extends Message<HiddenTxList> {
  /**
   * The key that is used to store the item
   *
   * @generated from field: auth.ItemKey primary_key = 1;
   */
  primaryKey?: ItemKey;

  /**
   * The list of hidden txs by tx_id
   *
   * @generated from field: repeated auth.HiddenTx txs = 4;
   */
  txs: HiddenTx[] = [];

  constructor(data?: PartialMessage<HiddenTxList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.HiddenTxList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "primary_key", kind: "message", T: ItemKey },
    { no: 4, name: "txs", kind: "message", T: HiddenTx, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HiddenTxList {
    return new HiddenTxList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HiddenTxList {
    return new HiddenTxList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HiddenTxList {
    return new HiddenTxList().fromJsonString(jsonString, options);
  }

  static equals(a: HiddenTxList | PlainMessage<HiddenTxList> | undefined, b: HiddenTxList | PlainMessage<HiddenTxList> | undefined): boolean {
    return proto3.util.equals(HiddenTxList, a, b);
  }
}

/**
 * Used to return the values of the items that are referenced
 *
 * @generated from message auth.Reference
 */
export class Reference extends Message<Reference> {
  /**
   * @generated from field: auth.ReferenceKey reference = 1;
   */
  reference?: ReferenceKey;

  /**
   * @generated from field: auth.Item item1 = 2;
   */
  item1?: Item;

  /**
   * @generated from field: auth.Item item2 = 3;
   */
  item2?: Item;

  constructor(data?: PartialMessage<Reference>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Reference";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reference", kind: "message", T: ReferenceKey },
    { no: 2, name: "item1", kind: "message", T: Item },
    { no: 3, name: "item2", kind: "message", T: Item },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Reference {
    return new Reference().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Reference {
    return new Reference().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Reference {
    return new Reference().fromJsonString(jsonString, options);
  }

  static equals(a: Reference | PlainMessage<Reference> | undefined, b: Reference | PlainMessage<Reference> | undefined): boolean {
    return proto3.util.equals(Reference, a, b);
  }
}

/**
 * @generated from message auth.FullItem
 */
export class FullItem extends Message<FullItem> {
  /**
   * @generated from field: auth.Item item = 1;
   */
  item?: Item;

  /**
   * @generated from field: auth.History history = 2;
   */
  history?: History;

  /**
   * @generated from field: repeated auth.Suggestion suggestions = 3;
   */
  suggestions: Suggestion[] = [];

  /**
   * @generated from field: repeated auth.Reference references = 4;
   */
  references: Reference[] = [];

  constructor(data?: PartialMessage<FullItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.FullItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "item", kind: "message", T: Item },
    { no: 2, name: "history", kind: "message", T: History },
    { no: 3, name: "suggestions", kind: "message", T: Suggestion, repeated: true },
    { no: 4, name: "references", kind: "message", T: Reference, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FullItem {
    return new FullItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FullItem {
    return new FullItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FullItem {
    return new FullItem().fromJsonString(jsonString, options);
  }

  static equals(a: FullItem | PlainMessage<FullItem> | undefined, b: FullItem | PlainMessage<FullItem> | undefined): boolean {
    return proto3.util.equals(FullItem, a, b);
  }
}

/**
 * @generated from message auth.HistoryEntry
 */
export class HistoryEntry extends Message<HistoryEntry> {
  /**
   * The transaction id that caused the change
   *
   * @generated from field: string tx_id = 1;
   */
  txId = "";

  /**
   * Whether the item was deleted
   *
   * @generated from field: bool is_delete = 2;
   */
  isDelete = false;

  /**
   * Whether the transaction was hidden
   *
   * @generated from field: bool is_hidden = 3;
   */
  isHidden = false;

  /**
   * The timestamp of the change
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  /**
   * A note about the change
   *
   * @generated from field: string note = 5;
   */
  note = "";

  /**
   * The value of the item
   *
   * @generated from field: google.protobuf.Any value = 6;
   */
  value?: Any;

  constructor(data?: PartialMessage<HistoryEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.HistoryEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_delete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "is_hidden", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    { no: 5, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "value", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryEntry {
    return new HistoryEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryEntry {
    return new HistoryEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryEntry {
    return new HistoryEntry().fromJsonString(jsonString, options);
  }

  static equals(a: HistoryEntry | PlainMessage<HistoryEntry> | undefined, b: HistoryEntry | PlainMessage<HistoryEntry> | undefined): boolean {
    return proto3.util.equals(HistoryEntry, a, b);
  }
}

/**
 * @generated from message auth.History
 */
export class History extends Message<History> {
  /**
   * @generated from field: repeated auth.HistoryEntry entries = 1;
   */
  entries: HistoryEntry[] = [];

  /**
   * @generated from field: auth.HiddenTxList hidden_txs = 2;
   */
  hiddenTxs?: HiddenTxList;

  constructor(data?: PartialMessage<History>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.History";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entries", kind: "message", T: HistoryEntry, repeated: true },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTxList },
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
 * This message is the tree node for operations on the state item
 *
 * @generated from message auth.PathPolicy
 */
export class PathPolicy extends Message<PathPolicy> {
  /**
   * The path is a sub path of a field mask
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: string full_path = 2;
   */
  fullPath = "";

  /**
   * @generated from field: bool allow_sub_paths = 3;
   */
  allowSubPaths = false;

  /**
   * The key is a valid sub path in the type of state item
   *
   * @generated from field: map<string, auth.PathPolicy> sub_paths = 4;
   */
  subPaths: { [key: string]: PathPolicy } = {};

  /**
   * If the policy is not set than use a parent policy unless nested policy is set
   *
   * @generated from field: repeated auth.Action actions = 5;
   */
  actions: Action[] = [];

  constructor(data?: PartialMessage<PathPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.PathPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "full_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "allow_sub_paths", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "sub_paths", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: PathPolicy} },
    { no: 5, name: "actions", kind: "enum", T: proto3.getEnumType(Action), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PathPolicy {
    return new PathPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PathPolicy {
    return new PathPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PathPolicy {
    return new PathPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: PathPolicy | PlainMessage<PathPolicy> | undefined, b: PathPolicy | PlainMessage<PathPolicy> | undefined): boolean {
    return proto3.util.equals(PathPolicy, a, b);
  }
}

/**
 * @generated from message auth.Polices
 */
export class Polices extends Message<Polices> {
  /**
   * key is the item type
   *
   * @generated from field: map<string, auth.PathPolicy> item_policies = 1;
   */
  itemPolicies: { [key: string]: PathPolicy } = {};

  /**
   * Default policy for all items
   *
   * @generated from field: auth.PathPolicy default_policy = 2;
   */
  defaultPolicy?: PathPolicy;

  /**
   * The types that are excluded from the default policy
   *
   * @generated from field: repeated string default_excluded_types = 3;
   */
  defaultExcludedTypes: string[] = [];

  constructor(data?: PartialMessage<Polices>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Polices";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "item_policies", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: PathPolicy} },
    { no: 2, name: "default_policy", kind: "message", T: PathPolicy },
    { no: 3, name: "default_excluded_types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Polices {
    return new Polices().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Polices {
    return new Polices().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Polices {
    return new Polices().fromJsonString(jsonString, options);
  }

  static equals(a: Polices | PlainMessage<Polices> | undefined, b: Polices | PlainMessage<Polices> | undefined): boolean {
    return proto3.util.equals(Polices, a, b);
  }
}

