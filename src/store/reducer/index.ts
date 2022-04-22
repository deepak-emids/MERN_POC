import Employee from "./Employee";
import Department from "./Department";
import Role from "./Role";
import Snackbar from "./Snackbar";

import { combineReducers } from "redux";

const reducers = combineReducers({
  Employee,
  Department,
  Role,
  Snackbar,
});

export default reducers;
