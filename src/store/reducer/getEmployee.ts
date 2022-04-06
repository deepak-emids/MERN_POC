const initialState = {
  employee: [],
};

const getEmployee = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_EMPLOYEE":
      return { ...state, employee: action.payload };

    default:
      return state;
  }
};

export default getEmployee;
