export const fetchEmployeeDetails = (employee_details: {}) => {
  return {
    type: "GET_EMPLOYEE_DETAILS",
    payload: employee_details,
  };
};

export const fetchEmployee = (employee: []) => {
  
  return {
    type: "GET_EMPLOYEE",
    payload: employee,
  };
};

export const fetchDepartment = (department: []) => {
  return {
    type: "GET_DEPARTMENT",
    payload: department,
  };
};

export const fetchRole = (role: []) => {
  return {
    type: "GET_ROLE",
    payload: role,
  };
};
