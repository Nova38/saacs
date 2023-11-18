package state

import (
	"encoding/json"
	"log/slog"
	"strconv"

	"github.com/mennanov/fmutils"
	"github.com/nova38/thesis/lib/go/fabric/auth/common"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/fieldmaskpb"

	"github.com/samber/oops"
)

type Ledger[T Object] struct {
	ctx TxCtxInterface
}

// UTIL Functions

// Exists returns true if the object exists in the ledger
func (l *Ledger[T]) Exists(key string) bool {
	bytes, err := l.ctx.GetStub().GetState(key)
	if bytes == nil && err == nil {
		return false
	}

	return err == nil
}

// ════════════════════════════════════════════════════════
// Invoke Functions
// ════════════════════════════════════════════════════════

// Insert inserts the object into the ledger
// returns error if the object already exists
func (l *Ledger[T]) Create(obj T) (err error) {
	var (
		key   string
		bytes []byte
	)

	if key, err = MakeCompositeKey(obj); err != nil {
		return err
	}

	if l.Exists(key) {
		return oops.
			With("Key", key, "Namespace", obj.Namespace()).
			Wrap(common.AlreadyExists)
	}

	if bytes, err = json.Marshal(obj); err != nil {
		return err
	}

	return l.ctx.GetStub().PutState(key, bytes)
}

// Edit updates the object in the ledger
// returns error if the object does not exist
func (l *Ledger[T]) Update(update T, mask *fieldmaskpb.FieldMask) (err error) {
	var (
		key     string
		bytes   []byte
		current T
	)

	// Get the current object from the ledger
	if key, err = MakeCompositeKey(update); err != nil {
		return err
	}

	if current, err = l.GetFromKey(key); err != nil {
		return oops.Wrap(err)
	}

	// Apply the mask to the Updating object
	fmutils.Filter(update, mask.Paths)
	proto.Merge(current, update)

	// Put the object back into the ledger
	if bytes, err = json.Marshal(current); err != nil {
		return oops.Wrap(err)
	}

	update = current

	return l.ctx.GetStub().PutState(key, bytes)
}

// Delete deletes the object from the ledger
func (l *Ledger[T]) Delete(in T) (err error) {
	key, err := MakeCompositeKey(in)
	if err != nil {
		return err
	}

	if err = l.ctx.GetStub().DelState(key); err != nil {
		return oops.Wrap(err)
	}

	return nil
}

// ════════════════════════════════════════════════════════
// Query Functions
// ════════════════════════════════════════════════════════

func (l *Ledger[T]) GetFromKey(key string) (obj T, err error) {
	bytes, err := l.ctx.GetStub().GetState(key)
	if bytes == nil && err == nil {
		return obj, oops.
			With("Key", key, "Namespace", obj.Namespace()).
			Wrap(common.KeyNotFound)
	} else if err != nil {
		return obj, oops.Wrap(err)
	}

	if err = json.Unmarshal(bytes, obj); err != nil {
		return obj, oops.Wrap(err)
	}

	return obj, nil
}

// Get returns the object from the ledger
func (l *Ledger[T]) Get(in T) (err error) {
	var (
		key   string
		bytes []byte
	)

	namespace := in.Namespace()
	l.ctx.GetLogger().Debug("fn: GetState", "Namespace", namespace)

	if key, err = MakeCompositeKey(in); err != nil {
		return err
	}

	if bytes, err = l.ctx.GetStub().GetState(key); err == nil {
		return oops.
			With("Key", key, "Namespace", in.Namespace()).
			Wrap(common.AlreadyExists)
	}

	if err = json.Unmarshal(bytes, in); err != nil {
		return oops.Wrap(err)
	}
	return nil
}

// GetPartialKeyList returns a list of objects of type T
// T must implement StateObject interface
// numAttr is the number of attributes in the key to search for
func (l *Ledger[T]) GetPartialKeyList(
	obj T,
	numAttr int,
	bookmark string,
) (list []T, mk string, err error) {
	// obj = []*T{}
	l.ctx.GetLogger().Info("GetPartialKeyList")
	namespace := obj.Namespace()

	attr := obj.Key()
	if len(attr) == 0 || len(attr) < numAttr {
		return nil, "", common.ObjectInvalid
	}

	// Extract the attributes to search for
	attr = attr[:len(attr)-numAttr]

	l.ctx.GetLogger().
		Info("GetPartialKeyList",
			slog.Group(
				"Key", "Namespace", namespace,
				slog.Int("numAttr", numAttr),
				slog.Any("attr", attr),
				slog.Group(
					"Paged",
					"Bookmark", bookmark,
					"PageSize", strconv.Itoa(int(l.ctx.GetPageSize())),
				),
			),
		)

	results, meta, err := l.ctx.GetStub().
		GetStateByPartialCompositeKeyWithPagination(
			obj.GetCollectionId(),
			attr,
			l.ctx.GetPageSize(),
			bookmark,
		)
	if err != nil {
		return nil, "", err
	}
	defer results.Close()

	for results.HasNext() {
		queryResponse, err := results.Next()
		if err != nil {
			return nil, "", err
		}
		obj := new(T)

		if err := json.Unmarshal(queryResponse.Value, &obj); err != nil {
			return nil, "", err
		}

		list = append(list, *obj)
	}

	return list, meta.GetBookmark(), nil
}
