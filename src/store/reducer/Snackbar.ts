import { ActionTypes } from "../types/RoleActionTypes";
import service from "../../services/roleService/roleService";

const initialState = {
  open: false,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "SNACKBAR":
      return {
        ...state,
        open: payload,
      };

    default:
      return state;
  }
};
