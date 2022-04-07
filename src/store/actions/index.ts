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
