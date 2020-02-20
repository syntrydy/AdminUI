import {
    ADD_USER,
    EDIT_USER,
    DELETE_USER,
    SHOW_USERS,
    SEARCH_USERS
  } from "../actions/ActionType";
  import {
    addUser,
    editUser,
    deleteUser,
    showUsers,
    searchUsers
  } from "../actions/UiActions";
  
  const initialState = {
    users: [{ username: "One", firstname: "two" }]
  };
  
  const UserReducer = (state = initialState, action) => {
    console.log("=========================User reducers");  
    console.log("=========================action"+action);  
    switch (action.type) {
      case ADD_USER:
        console.log("Go to add user page");
        return addUser(state);
      case EDIT_USER:
        console.log("Go to edit user  page");
        return editUser(state);
      case DELETE_USER:
        console.log("Go to delete user page");
        return deleteUser(state);
      case SHOW_USERS:
        console.log("Go to show users page");
        return showUsers(state);
      case SEARCH_USERS:
        console.log("Go to users search page");
        return searchUsers(state);
      default:
        return state;
    }
  };
  
  export default UserReducer;
  