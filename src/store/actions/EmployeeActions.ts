import { ActionTypes } from "../types/EmpActionTypes";
import service from "../../services/employeeService/employeeService";

// get all posts
export const getEmployees = () => async (dispatch: any) => {
  const result = await service.getAllEmployee();
  console.log(result, "res");
  dispatch({
    type: ActionTypes.GET_EMPLOYEES,
    payload: result.data.data,
  });
};

// get a post
export const getEmployee = (id: number) => async (dispatch: any) => {
  const result = await service.getEmployee(id);

  dispatch({
    type: ActionTypes.GET_EMPLOYEE,
    payload: result.data.data,
  });
};

export const addEmployee = (post: any) => async (dispatch: any) => {
  const result = await service.addEmployee(post);

  dispatch({
    type: ActionTypes.ADD_EMPLOYEE,
    payload: result.data.data,
  });
};

// update a post
export const updateEmployee =
  (id: number, post: any) => async (dispatch: any) => {
    const result = await service.updateEmployee(id, post);

    dispatch({
      type: ActionTypes.UPDATE_EMPLOYEE,
      payload: result.data.data,
    });
  };

// delete a post
export const deleteEmployee = (id: any) => async (dispatch: any) => {
  const result = await service.deleteEmployee(id);

  dispatch({
    type: ActionTypes.DELETE_EMPLOYEE,
    payload: id,
  });
};
