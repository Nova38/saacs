// Code generated by proto-gen-go-auth_pb. DO NOT EDIT.
// versions:
// - protoc-gen-cckey v0.0.1
// source: chaincode/common/reference.proto

package common

import (
	fmt "fmt"
	common "github.com/nova38/saacs/pkg/chaincode/common"
	v1 "github.com/nova38/saacs/pkg/chaincode/gen/auth/v1"
)

// Service ReferenceService
type ReferenceServiceInterface[T common.GenericTxCtxInterface] interface {
	// Reference
	//
	// # Operation:
	//   - Domain: ACTION_REFERENCE_VIEW
	Reference(ctx T, req *ReferenceRequest) (res *ReferenceResponse, err error)

	// ReferenceByItem
	//
	// # Operation:
	//   - Domain: ACTION_REFERENCE_VIEW
	ReferenceByItem(ctx T, req *ReferenceByItemRequest) (res *ReferenceByItemResponse, err error)

	// ReferenceByPartialKey
	//
	// # Operation:
	//   - Domain: ACTION_SUGGEST_VIEW
	ReferenceByPartialKey(ctx T, req *ReferenceByPartialKeyRequest) (res *ReferenceByPartialKeyResponse, err error)

	// ReferenceCreate
	//
	// # Operation:
	//   - Domain: ACTION_REFERENCE_CREATE
	ReferenceCreate(ctx T, req *ReferenceCreateRequest) (res *ReferenceCreateResponse, err error)

	// ReferenceDelete
	//
	// # Operation:
	//   - Domain: ACTION_REFERENCE_DELETE
	ReferenceDelete(ctx T, req *ReferenceDeleteRequest) (res *ReferenceDeleteResponse, err error)
}

type ReferenceServiceBase struct {
}

func (s *ReferenceServiceBase) GetEvaluateTransactions() []string {
	return []string{
		"Reference",
		"ReferenceByItem",
		"ReferenceByPartialKey",
	}
}

func ReferenceServiceGetTxOperation(txName string) (op *v1.Operation, err error) {
	switch txName {
	case "Reference":
		// action:ACTION_REFERENCE_VIEW
		return &v1.Operation{
			Action: 32,
		}, nil
	case "ReferenceByItem":
		// action:ACTION_REFERENCE_VIEW
		return &v1.Operation{
			Action: 32,
		}, nil
	case "ReferenceByPartialKey":
		// action:ACTION_SUGGEST_VIEW
		return &v1.Operation{
			Action: 14,
		}, nil
	case "ReferenceCreate":
		// action:ACTION_REFERENCE_CREATE
		return &v1.Operation{
			Action: 30,
		}, nil
	case "ReferenceDelete":
		// action:ACTION_REFERENCE_DELETE
		return &v1.Operation{
			Action: 31,
		}, nil
	default:
		return nil, fmt.Errorf("No operation defined for " + txName)
	}
	return nil, nil
}

func (s *ReferenceServiceBase) GetIgnoredFunctions() []string {
	return []string{"GetTxOperation"}
}
