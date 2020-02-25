import * as type from "./ActionType";

export const addUserAction = user => ({
  type: type.ADD_USER,
  user
});
export const editUserAction = user => ({
  type: type.EDIT_USER,
  user
});
export const deleteUserAction = user => ({
  type: type.DELETE_USER,
  user
});
export const showUsersAction = () => ({
  type: type.SHOW_USERS
});
export const searchUsersAction = pattern => ({
  type: type.SEARCH_USERS,
  pattern
});
