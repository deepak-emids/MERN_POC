const initialState = {
  employeeDetails: {},
};

const getEmployeeDetails = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_EMPLOYEE_DETAILS":
      return { ...state, employeeDetails: action.payload };

    default:
      return state;
  }
};

export default getEmployeeDetails;
