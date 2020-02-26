import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import GroupReducer from "./GroupReducer";
import ApplicationReducer from "./ApplicationReducer";
import AttributeReducer from "./AttributeReducer";

const rootReducer = combineReducers({
  users: UserReducer,
  groups: GroupReducer,
  attributes: AttributeReducer,
  application: ApplicationReducer
});

export default rootReducer;
