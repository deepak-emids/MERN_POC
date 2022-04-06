const initialState = {
  department: [],
};

const getRole = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_DEPARTMENT":
      return { ...state, department: action.payload };

    default:
      return state;
  }
};

export default getRole;
