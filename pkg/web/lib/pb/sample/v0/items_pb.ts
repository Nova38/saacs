// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file sample/v0/items.proto (package sample, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message sample.SimpleItem
 */
export class SimpleItem extends Message<SimpleItem> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: int32 quantity = 4;
   */
  quantity = 0;

  constructor(data?: PartialMessage<SimpleItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sample.SimpleItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "quantity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleItem {
    return new SimpleItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleItem {
    return new SimpleItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleItem {
    return new SimpleItem().fromJsonString(jsonString, options);
  }

  static equals(a: SimpleItem | PlainMessage<SimpleItem> | undefined, b: SimpleItem | PlainMessage<SimpleItem> | undefined): boolean {
    return proto3.util.equals(SimpleItem, a, b);
  }
}

/**
 * @generated from message sample.Group
 */
export class Group extends Message<Group> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string group_id = 2;
   */
  groupId = "";

  /**
   * @generated from field: sample.SimpleItem item1 = 3;
   */
  item1?: SimpleItem;

  /**
   * @generated from field: sample.SimpleItem item2 = 4;
   */
  item2?: SimpleItem;

  constructor(data?: PartialMessage<Group>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sample.Group";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "item1", kind: "message", T: SimpleItem },
    { no: 4, name: "item2", kind: "message", T: SimpleItem },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Group {
    return new Group().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Group {
    return new Group().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Group {
    return new Group().fromJsonString(jsonString, options);
  }

  static equals(a: Group | PlainMessage<Group> | undefined, b: Group | PlainMessage<Group> | undefined): boolean {
    return proto3.util.equals(Group, a, b);
  }
}

/**
 * @generated from message sample.Book
 */
export class Book extends Message<Book> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string isbn = 2;
   */
  isbn = "";

  /**
   * @generated from field: string book_title = 3;
   */
  bookTitle = "";

  /**
   * @generated from field: string author = 4;
   */
  author = "";

  /**
   * @generated from field: int32 year = 5;
   */
  year = 0;

  /**
   * @generated from field: string publisher = 6;
   */
  publisher = "";

  /**
   * @generated from field: string language = 7;
   */
  language = "";

  /**
   * @generated from field: string description = 8;
   */
  description = "";

  constructor(data?: PartialMessage<Book>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sample.Book";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "isbn", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "book_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "author", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "year", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "publisher", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "language", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Book {
    return new Book().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Book {
    return new Book().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Book {
    return new Book().fromJsonString(jsonString, options);
  }

  static equals(a: Book | PlainMessage<Book> | undefined, b: Book | PlainMessage<Book> | undefined): boolean {
    return proto3.util.equals(Book, a, b);
  }
}