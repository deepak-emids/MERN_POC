import { ActionTypes } from "../types/DeptActionTypes";
import service from "../../services/depertmentService/departmentService";

// get all posts
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
};

// update a post
export const updateDepartment =
  (id: number, post: any) => async (dispatch: any) => {
    const result = await service.updateDepartment(id, post);

    dispatch({
      type: ActionTypes.UPDATE_DEPARTMENT,
      payload: result.data.data,
    });
  };

// delete a post
export const deleteDepartment = (id: any) => async (dispatch: any) => {
  const result = await service.deleteDepartment(id);

  dispatch({
    type: ActionTypes.DELETE_DEPARTMENT,
    payload: id,
  });
};
