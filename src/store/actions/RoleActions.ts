import { ActionTypes } from "../types/RoleActionTypes";
import service from "../../services/roleService/roleService";

// get all posts
export const getRoles = () => async (dispatch: any) => {
  const result = await service.getAllRole();
  dispatch({
    type: ActionTypes.GET_ROLES,
    payload: result.data.data,
  });
};

export const addRole = (post: any) => async (dispatch: any) => {
  const result = await service.addRole(post);

  dispatch({
    type: ActionTypes.ADD_ROLE,
    payload: result.data.data,
  });
};

// update a post
export const updateRole = (id: number, post: any) => async (dispatch: any) => {
  const result = await service.updateRole(id, post);

  dispatch({
    type: ActionTypes.UPDATE_ROLE,
    payload: result.data.data,
  });
};

// delete a post
export const deleteRole = (id: any) => async (dispatch: any) => {
  const result = await service.deleteRole(id);

  dispatch({
    type: ActionTypes.DELETE_ROLE,
    payload: id,
  });
};
