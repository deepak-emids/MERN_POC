import getEmployee from "./getEmployee";
import getDepartment from "./getDepartment";
import getRole from "./getRole";
import getEmployeeDetails from "./getEmployeeDetails";

import { combineReducers } from "redux";

const reducers = combineReducers({
  getEmployee,
  getDepartment,
  getRole,
  getEmployeeDetails,
});

export default reducers;
