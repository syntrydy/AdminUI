import * as type from "./ActionType";

export const addUser = user => ({
  type: type.ADD_USER,
  user
});
export const editUser = user => ({
  type: type.EDIT_USER,
  user
});
export const deleteUser = user => ({
  type: type.DELETE_USER,
  user
});
export const showUsers = user => ({
  type: type.SHOW_USERS,
  user
});
export const searchUsers = user => ({
  type: type.SEARCH_USERS,
  user
});
