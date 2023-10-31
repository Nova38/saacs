package state

import (
	"log/slog"

	"github.com/bufbuild/protovalidate-go"
	"google.golang.org/protobuf/proto"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

type LoggedTxCtxInterface interface {
	contractapi.TransactionContextInterface
	GetLogger() *slog.Logger
	SetLogger(logger *slog.Logger) error

	// HandleFnError Handles the error from a function
	// also handles panics
	HandleFnError(err *error, r any)
}

// PagedTxCtxInterface Paged Transaction Context Interface
type PagedTxCtxInterface interface {
	LoggedTxCtxInterface
	GetPageSize() int32
	SetPageSize(pageSize int32)
}

type ValidateAbleTxCtxInterface interface {
	GetValidator() (*protovalidate.Validator, error)
	Validate(msg proto.Message) error
}
