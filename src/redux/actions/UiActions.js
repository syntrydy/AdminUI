import * as type from "./ActionType";

export function addUser(state) {
  return {
    type: type.ADD_USER,
    payload: state.user
  };
}

export function editUser(state) {
  return {
    type: type.EDIT_USER,
    payload: state.user
  };
}
export function deleteUser(state) {
  return {
    type: type.DELETE_USER,
    payload: state.user
  };
}
export function showUsers(state) {
  return {
    type: type.SHOW_USERS
  };
}

export function searchUsers(pattern) {
  return {
    type: type.DELETE_USER,
    payload: pattern
  };
}
