import { ActionTypes } from "../types/RoleActionTypes";
import service from "../../services/roleService/roleService";

const initialState = {
  roles: [],
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.GET_ROLES:
      return {
        ...state,
        roles: payload,
      };
    case ActionTypes.ADD_ROLE:
      console.log(payload);
      return {
        ...state,
        roles: [payload, ...state.roles],
      };

    case ActionTypes.UPDATE_ROLE:
      return {
        ...state,
        roles: state.roles.map((postItem: any) =>
          postItem.id == payload.id ? payload : postItem
        ),
      };
    case ActionTypes.DELETE_ROLE:
      return {
        ...state,
        roles: state.roles.filter((postItem: any) => postItem.id != payload),
      };
    default:
      return state;
  }
};
