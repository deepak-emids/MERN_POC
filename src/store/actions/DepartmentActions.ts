import { ActionTypes } from "../types/DeptActionTypes";
import service from "../../services/depertmentService/departmentService";

export const getDepartments = () => async (dispatch: any) => {
  const result = await service.getAllDepartment();
  dispatch({
    type: ActionTypes.GET_DEPARTMENTS,
    payload: result.data.data,
  });
};

export const addDepartment = (post: any) => async (dispatch: any) => {
  const result = await service.addDepartment(post);
  dispatch({
    type: ActionTypes.ADD_DEPARTMENT,
    payload: result.data.data,
  });

  if (result.status == 201) {
    console.log("dispatching");
    dispatch({ type: "SNACKBAR", payload: true });
  }
};

export const updateDepartment =
  (id: number, post: any) => async (dispatch: any) => {
    const result = await service.updateDepartment(id, post);

    dispatch({
      type: ActionTypes.UPDATE_DEPARTMENT,
      payload: result.data.data,
    });
  };

export const deleteDepartment = (id: any) => async (dispatch: any) => {
  const result = await service.deleteDepartment(id);

  dispatch({
    type: ActionTypes.DELETE_DEPARTMENT,
    payload: id,
  });
};
