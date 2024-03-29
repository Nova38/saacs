// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file chaincode/common/reference.proto (package auth.common, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ItemKey, Reference, ReferenceKey } from "../../auth/v1/objects_pb.js";

/**
 * ════════════════════════════════ References ═════════════════════════════════════
 * ──────────────────────────────── Query ──────────────────────────────────────────
 *
 * @generated from message auth.common.ReferenceRequest
 */
export class ReferenceRequest extends Message<ReferenceRequest> {
  /**
   * buf:lint:ignore FIELD_SAME_TYPE
   *
   * @generated from field: auth.ReferenceKey reference = 1;
   */
  reference?: ReferenceKey;

  constructor(data?: PartialMessage<ReferenceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reference", kind: "message", T: ReferenceKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceRequest {
    return new ReferenceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceRequest {
    return new ReferenceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceRequest {
    return new ReferenceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceRequest | PlainMessage<ReferenceRequest> | undefined, b: ReferenceRequest | PlainMessage<ReferenceRequest> | undefined): boolean {
    return proto3.util.equals(ReferenceRequest, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceResponse
 */
export class ReferenceResponse extends Message<ReferenceResponse> {
  /**
   * @generated from field: bool exists = 1;
   */
  exists = false;

  /**
   * @generated from field: auth.Reference reference = 2;
   */
  reference?: Reference;

  constructor(data?: PartialMessage<ReferenceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exists", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "reference", kind: "message", T: Reference },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceResponse {
    return new ReferenceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceResponse {
    return new ReferenceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceResponse {
    return new ReferenceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceResponse | PlainMessage<ReferenceResponse> | undefined, b: ReferenceResponse | PlainMessage<ReferenceResponse> | undefined): boolean {
    return proto3.util.equals(ReferenceResponse, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceByCollectionRequest
 */
export class ReferenceByCollectionRequest extends Message<ReferenceByCollectionRequest> {
  /**
   * @generated from field: string bookmark = 1;
   */
  bookmark = "";

  /**
   * @generated from field: uint32 limit = 2;
   */
  limit = 0;

  /**
   * @generated from field: string collection_id = 3;
   */
  collectionId = "";

  constructor(data?: PartialMessage<ReferenceByCollectionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceByCollectionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceByCollectionRequest {
    return new ReferenceByCollectionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceByCollectionRequest {
    return new ReferenceByCollectionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceByCollectionRequest {
    return new ReferenceByCollectionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceByCollectionRequest | PlainMessage<ReferenceByCollectionRequest> | undefined, b: ReferenceByCollectionRequest | PlainMessage<ReferenceByCollectionRequest> | undefined): boolean {
    return proto3.util.equals(ReferenceByCollectionRequest, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceByCollectionResponse
 */
export class ReferenceByCollectionResponse extends Message<ReferenceByCollectionResponse> {
  /**
   * @generated from field: string bookmark = 1;
   */
  bookmark = "";

  /**
   * @generated from field: repeated auth.ReferenceKey references = 2;
   */
  references: ReferenceKey[] = [];

  constructor(data?: PartialMessage<ReferenceByCollectionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceByCollectionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "references", kind: "message", T: ReferenceKey, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceByCollectionResponse {
    return new ReferenceByCollectionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceByCollectionResponse {
    return new ReferenceByCollectionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceByCollectionResponse {
    return new ReferenceByCollectionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceByCollectionResponse | PlainMessage<ReferenceByCollectionResponse> | undefined, b: ReferenceByCollectionResponse | PlainMessage<ReferenceByCollectionResponse> | undefined): boolean {
    return proto3.util.equals(ReferenceByCollectionResponse, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceByPartialKeyRequest
 */
export class ReferenceByPartialKeyRequest extends Message<ReferenceByPartialKeyRequest> {
  /**
   * @generated from field: string bookmark = 1;
   */
  bookmark = "";

  /**
   * @generated from field: uint32 limit = 2;
   */
  limit = 0;

  /**
   * @generated from field: auth.ReferenceKey reference = 3;
   */
  reference?: ReferenceKey;

  constructor(data?: PartialMessage<ReferenceByPartialKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceByPartialKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "reference", kind: "message", T: ReferenceKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceByPartialKeyRequest {
    return new ReferenceByPartialKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceByPartialKeyRequest {
    return new ReferenceByPartialKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceByPartialKeyRequest {
    return new ReferenceByPartialKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceByPartialKeyRequest | PlainMessage<ReferenceByPartialKeyRequest> | undefined, b: ReferenceByPartialKeyRequest | PlainMessage<ReferenceByPartialKeyRequest> | undefined): boolean {
    return proto3.util.equals(ReferenceByPartialKeyRequest, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceByPartialKeyResponse
 */
export class ReferenceByPartialKeyResponse extends Message<ReferenceByPartialKeyResponse> {
  /**
   * @generated from field: string bookmark = 1;
   */
  bookmark = "";

  /**
   * @generated from field: repeated auth.ReferenceKey references = 2;
   */
  references: ReferenceKey[] = [];

  constructor(data?: PartialMessage<ReferenceByPartialKeyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceByPartialKeyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "references", kind: "message", T: ReferenceKey, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceByPartialKeyResponse {
    return new ReferenceByPartialKeyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceByPartialKeyResponse {
    return new ReferenceByPartialKeyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceByPartialKeyResponse {
    return new ReferenceByPartialKeyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceByPartialKeyResponse | PlainMessage<ReferenceByPartialKeyResponse> | undefined, b: ReferenceByPartialKeyResponse | PlainMessage<ReferenceByPartialKeyResponse> | undefined): boolean {
    return proto3.util.equals(ReferenceByPartialKeyResponse, a, b);
  }
}

/**
 * Get all of the collections
 *
 * @generated from message auth.common.ReferenceByItemRequest
 */
export class ReferenceByItemRequest extends Message<ReferenceByItemRequest> {
  /**
   * @generated from field: string bookmark = 1;
   */
  bookmark = "";

  /**
   * @generated from field: uint32 limit = 2;
   */
  limit = 0;

  /**
   * @generated from field: string collection_id = 3;
   */
  collectionId = "";

  /**
   * @generated from field: auth.ItemKey item_key = 4;
   */
  itemKey?: ItemKey;

  constructor(data?: PartialMessage<ReferenceByItemRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceByItemRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "item_key", kind: "message", T: ItemKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceByItemRequest {
    return new ReferenceByItemRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceByItemRequest {
    return new ReferenceByItemRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceByItemRequest {
    return new ReferenceByItemRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceByItemRequest | PlainMessage<ReferenceByItemRequest> | undefined, b: ReferenceByItemRequest | PlainMessage<ReferenceByItemRequest> | undefined): boolean {
    return proto3.util.equals(ReferenceByItemRequest, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceByItemResponse
 */
export class ReferenceByItemResponse extends Message<ReferenceByItemResponse> {
  /**
   * @generated from field: string bookmark = 1;
   */
  bookmark = "";

  /**
   * @generated from field: repeated auth.ReferenceKey references = 2;
   */
  references: ReferenceKey[] = [];

  constructor(data?: PartialMessage<ReferenceByItemResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceByItemResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "references", kind: "message", T: ReferenceKey, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceByItemResponse {
    return new ReferenceByItemResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceByItemResponse {
    return new ReferenceByItemResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceByItemResponse {
    return new ReferenceByItemResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceByItemResponse | PlainMessage<ReferenceByItemResponse> | undefined, b: ReferenceByItemResponse | PlainMessage<ReferenceByItemResponse> | undefined): boolean {
    return proto3.util.equals(ReferenceByItemResponse, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceCreateRequest
 */
export class ReferenceCreateRequest extends Message<ReferenceCreateRequest> {
  /**
   * @generated from field: auth.ReferenceKey ref_key = 1;
   */
  refKey?: ReferenceKey;

  constructor(data?: PartialMessage<ReferenceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ref_key", kind: "message", T: ReferenceKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceCreateRequest {
    return new ReferenceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceCreateRequest {
    return new ReferenceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceCreateRequest {
    return new ReferenceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceCreateRequest | PlainMessage<ReferenceCreateRequest> | undefined, b: ReferenceCreateRequest | PlainMessage<ReferenceCreateRequest> | undefined): boolean {
    return proto3.util.equals(ReferenceCreateRequest, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceCreateResponse
 */
export class ReferenceCreateResponse extends Message<ReferenceCreateResponse> {
  /**
   * @generated from field: auth.ReferenceKey ref_key = 1;
   */
  refKey?: ReferenceKey;

  constructor(data?: PartialMessage<ReferenceCreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceCreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ref_key", kind: "message", T: ReferenceKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceCreateResponse {
    return new ReferenceCreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceCreateResponse {
    return new ReferenceCreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceCreateResponse {
    return new ReferenceCreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceCreateResponse | PlainMessage<ReferenceCreateResponse> | undefined, b: ReferenceCreateResponse | PlainMessage<ReferenceCreateResponse> | undefined): boolean {
    return proto3.util.equals(ReferenceCreateResponse, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceDeleteRequest
 */
export class ReferenceDeleteRequest extends Message<ReferenceDeleteRequest> {
  /**
   * @generated from field: auth.ReferenceKey ref_key = 1;
   */
  refKey?: ReferenceKey;

  constructor(data?: PartialMessage<ReferenceDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceDeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ref_key", kind: "message", T: ReferenceKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceDeleteRequest {
    return new ReferenceDeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceDeleteRequest {
    return new ReferenceDeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceDeleteRequest {
    return new ReferenceDeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceDeleteRequest | PlainMessage<ReferenceDeleteRequest> | undefined, b: ReferenceDeleteRequest | PlainMessage<ReferenceDeleteRequest> | undefined): boolean {
    return proto3.util.equals(ReferenceDeleteRequest, a, b);
  }
}

/**
 * @generated from message auth.common.ReferenceDeleteResponse
 */
export class ReferenceDeleteResponse extends Message<ReferenceDeleteResponse> {
  /**
   * @generated from field: auth.ReferenceKey ref_key = 1;
   */
  refKey?: ReferenceKey;

  constructor(data?: PartialMessage<ReferenceDeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.common.ReferenceDeleteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ref_key", kind: "message", T: ReferenceKey },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceDeleteResponse {
    return new ReferenceDeleteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceDeleteResponse {
    return new ReferenceDeleteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceDeleteResponse {
    return new ReferenceDeleteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceDeleteResponse | PlainMessage<ReferenceDeleteResponse> | undefined, b: ReferenceDeleteResponse | PlainMessage<ReferenceDeleteResponse> | undefined): boolean {
    return proto3.util.equals(ReferenceDeleteResponse, a, b);
  }
}

