import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ApplicationReducer from "./ApplicationReducer";

const rootReducer = combineReducers({
  users: UserReducer,
  application: ApplicationReducer
});

export default rootReducer;
