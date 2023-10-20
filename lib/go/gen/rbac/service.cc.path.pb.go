// Code generated by protoc-gen-go-hlf. DO NOT EDIT.
// versions:
// - protoc-gen-cckey v0.0.1
// source: rbac/service.proto

package rbac

func (m *GetUserRequest) DiffPath(other *GetUserRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *UserRegisterRequest) DiffPath(other *UserRegisterRequest) (updated []string, all bool) {

	all = true
	// user: is a message
	if m.User != nil || other.User != nil {
		updated_User, all_User := m.User.DiffPath(other.User)
		if len(updated_User) > 0 {
			if all_User {
				updated = append(updated, "user")
			} else {
				for _, u := range updated_User {
					updated = append(updated, "user."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *UpdateMembershipRequest) DiffPath(other *UpdateMembershipRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// collection_id: is a message
	if m.CollectionId != nil || other.CollectionId != nil {
		updated_CollectionId, all_CollectionId := m.CollectionId.DiffPath(other.CollectionId)
		if len(updated_CollectionId) > 0 {
			if all_CollectionId {
				updated = append(updated, "collection_id")
			} else {
				for _, u := range updated_CollectionId {
					updated = append(updated, "collection_id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// role: is a int32
	if m.Role != other.Role {
		updated = append(updated, "role")
	} else {
		all = false
	}

	return updated, all
}

func (m *GetCollectionRequest) DiffPath(other *GetCollectionRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *CollectionCreateRequest) DiffPath(other *CollectionCreateRequest) (updated []string, all bool) {

	all = true
	// collection: is a message
	if m.Collection != nil || other.Collection != nil {
		updated_Collection, all_Collection := m.Collection.DiffPath(other.Collection)
		if len(updated_Collection) > 0 {
			if all_Collection {
				updated = append(updated, "collection")
			} else {
				for _, u := range updated_Collection {
					updated = append(updated, "collection."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *CollectionUpdateRequest) DiffPath(other *CollectionUpdateRequest) (updated []string, all bool) {

	all = true
	// collection: is a message
	if m.Collection != nil || other.Collection != nil {
		updated_Collection, all_Collection := m.Collection.DiffPath(other.Collection)
		if len(updated_Collection) > 0 {
			if all_Collection {
				updated = append(updated, "collection")
			} else {
				for _, u := range updated_Collection {
					updated = append(updated, "collection."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// update_mask: is a message

	return updated, all
}
