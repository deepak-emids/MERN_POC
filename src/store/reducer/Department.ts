import { ActionTypes } from "../types/DeptActionTypes";

const initialState = {
  departments: [],
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.GET_DEPARTMENTS:
      return {
        ...state,
        departments: payload,
      };
    case ActionTypes.ADD_DEPARTMENT:
      console.log(payload);
      return {
        ...state,
        departments: [payload, ...state.departments],
      };

    case ActionTypes.UPDATE_DEPARTMENT:
      return {
        ...state,
        departments: state.departments.map((postItem: any) =>
          postItem.id == payload.id ? payload : postItem
        ),
      };
    case ActionTypes.DELETE_DEPARTMENT:
      return {
        ...state,
        departments: state.departments.filter(
          (postItem: any) => postItem.id != payload
        ),
      };
    default:
      return state;
  }
};
