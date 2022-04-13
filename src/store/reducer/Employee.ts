import { ActionTypes } from "../types/EmpActionTypes";
import service from "../../services/employeeService/employeeService";

const initialState = {
  employees: [],
  employee: {},
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.FETCH_EMPLOYEE:
      return {
        ...state,
        employees: payload,
      };
    case ActionTypes.POST_EMPLOYEE:
      console.log(payload);
      return {
        ...state,
        employees: [payload, ...state.employees],
      };
    case ActionTypes.SELECTED_EMPLOYEE:
      return {
        ...state,
        employee: payload,
      };
    case ActionTypes.UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((postItem: any) =>
          postItem.id == payload.id ? payload : postItem
        ),
      };
    case ActionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (postItem: any) => postItem.id != payload
        ),
      };
    default:
      return state;
  }
};
