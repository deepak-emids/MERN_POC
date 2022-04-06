import getEmployee from "./getEmployee";
import getDepartment from "./getDepartment";
import getRole from "./getRole";

import { combineReducers } from "redux";

const reducers = combineReducers({
  getEmployee,
  getDepartment,
  getRole,
});

export default reducers;
