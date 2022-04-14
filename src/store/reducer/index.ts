import Employee from "./Employee";
import Department from "./Department";
import Role from "./Role";

import { combineReducers } from "redux";

const reducers = combineReducers({
  Employee,
  Department,
  Role,
});

export default reducers;
