// @generated by protoc-gen-connect-es v0.13.0
// @generated from file rbac/service.proto (package rbac, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { Collection, Collection_List, User, User_Id, User_List } from "./rbac_pb.js";
import { CollectionCreateRequest, CollectionUpdateRequest, GetCollectionRequest, GetUserRequest, UpdateMembershipRequest, UserRegisterRequest } from "./service_pb.js";

/**
 * @generated from service rbac.AuthService
 */
export declare const AuthService: {
  readonly typeName: "rbac.AuthService",
  readonly methods: {
    /**
     * *
     * GetCurrentUser: Returns the current user.
     *
     * Returns the current user.
     * Requires:
     * - User submitting the transaction is a registered user.
     *
     * @generated from rpc rbac.AuthService.GetCurrentUser
     */
    readonly getCurrentUser: {
      readonly name: "GetCurrentUser",
      readonly I: typeof Empty,
      readonly O: typeof User,
      readonly kind: MethodKind.Unary,
    },
    /**
     * *
     * Returns the current user id.
     * Requires:
     * - User submitting the transaction is a registered user.
     *
     * @generated from rpc rbac.AuthService.GetCurrentUserId
     */
    readonly getCurrentUserId: {
      readonly name: "GetCurrentUserId",
      readonly I: typeof Empty,
      readonly O: typeof User_Id,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc rbac.AuthService.GetUserList
     */
    readonly getUserList: {
      readonly name: "GetUserList",
      readonly I: typeof Empty,
      readonly O: typeof User_List,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc rbac.AuthService.GetUser
     */
    readonly getUser: {
      readonly name: "GetUser",
      readonly I: typeof GetUserRequest,
      readonly O: typeof User,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc rbac.AuthService.UserRegister
     */
    readonly userRegister: {
      readonly name: "UserRegister",
      readonly I: typeof UserRegisterRequest,
      readonly O: typeof User,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc rbac.AuthService.UserUpdateMembership
     */
    readonly userUpdateMembership: {
      readonly name: "UserUpdateMembership",
      readonly I: typeof UpdateMembershipRequest,
      readonly O: typeof User,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc rbac.AuthService.GetCollectionList
     */
    readonly getCollectionList: {
      readonly name: "GetCollectionList",
      readonly I: typeof Empty,
      readonly O: typeof Collection_List,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc rbac.AuthService.GetCollection
     */
    readonly getCollection: {
      readonly name: "GetCollection",
      readonly I: typeof GetCollectionRequest,
      readonly O: typeof Collection,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc rbac.AuthService.CollectionCreate
     */
    readonly collectionCreate: {
      readonly name: "CollectionCreate",
      readonly I: typeof CollectionCreateRequest,
      readonly O: typeof Collection,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc rbac.AuthService.CollectionUpdate
     */
    readonly collectionUpdate: {
      readonly name: "CollectionUpdate",
      readonly I: typeof CollectionUpdateRequest,
      readonly O: typeof Collection,
      readonly kind: MethodKind.Unary,
    },
  }
};
