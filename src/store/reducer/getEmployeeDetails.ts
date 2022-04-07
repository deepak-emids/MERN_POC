const initialState = {
  employee_details: {},
};

const getEmployeeDetails = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_EMPLOYEE_DETAILS":
      return { ...state, employee_details: action.payload };

    default:
      return state;
  }
};

export default getEmployeeDetails;
