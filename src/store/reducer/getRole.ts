const initialState = {
  role: [],
};

const getRole = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_ROLE":
      return { ...state, role: action.payload };

    default:
      return state;
  }
};

export default getRole;
