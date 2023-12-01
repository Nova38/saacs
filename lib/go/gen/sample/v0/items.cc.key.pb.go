// Code generated by protoc-gen-go-hlf. DO NOT EDIT.
// versions:
// - protoc-gen-cckey v0.0.1
// source: sample/v0/items.proto

package v0

import (
	v1 "github.com/nova38/thesis/lib/go/gen/auth/v1"
)

func (m *SimpleItem) ItemType() string {
	return "sample.SimpleItem"
}
func (m *SimpleItem) KeyAttr() []string {
	attr := []string{}
	attr = append(attr, m.GetId())
	return attr
}
func (m *SimpleItem) SetKeyAttr(attr []string) {
	if len(attr) > 0 {
		m.Id = attr[0]
	} else {
		return
	}
	return
}

// Domain Item
func (m *SimpleItem) IsPrimary() bool {
	return true
}
func (m *SimpleItem) SetKey(key *v1.ItemKey) {
	m.SetKeyAttr(key.ItemIdParts)
	m.CollectionId = key.GetCollectionId()
	return
}
func (m *SimpleItem) ItemKey() *v1.ItemKey {
	key := &v1.ItemKey{
		CollectionId: m.GetCollectionId(),
		ItemType:     "sample.SimpleItem",
		ItemIdParts:  m.KeyAttr(),
	}
	return key
}
func (m *Group) ItemType() string {
	return "sample.Group"
}
func (m *Group) KeyAttr() []string {
	attr := []string{}
	attr = append(attr, m.GetGroupId())
	return attr
}
func (m *Group) SetKeyAttr(attr []string) {
	if len(attr) > 0 {
		m.GroupId = attr[0]
	} else {
		return
	}
	return
}

// Domain Item
func (m *Group) IsPrimary() bool {
	return true
}
func (m *Group) SetKey(key *v1.ItemKey) {
	m.SetKeyAttr(key.ItemIdParts)
	m.CollectionId = key.GetCollectionId()
	return
}
func (m *Group) ItemKey() *v1.ItemKey {
	key := &v1.ItemKey{
		CollectionId: m.GetCollectionId(),
		ItemType:     "sample.Group",
		ItemIdParts:  m.KeyAttr(),
	}
	return key
}
func (m *Book) ItemType() string {
	return "sample.Book"
}
func (m *Book) KeyAttr() []string {
	attr := []string{}
	attr = append(attr, m.GetIsbn())
	return attr
}
func (m *Book) SetKeyAttr(attr []string) {
	if len(attr) > 0 {
		m.Isbn = attr[0]
	} else {
		return
	}
	return
}

// Domain Item
func (m *Book) IsPrimary() bool {
	return true
}
func (m *Book) SetKey(key *v1.ItemKey) {
	m.SetKeyAttr(key.ItemIdParts)
	m.CollectionId = key.GetCollectionId()
	return
}
func (m *Book) ItemKey() *v1.ItemKey {
	key := &v1.ItemKey{
		CollectionId: m.GetCollectionId(),
		ItemType:     "sample.Book",
		ItemIdParts:  m.KeyAttr(),
	}
	return key
}