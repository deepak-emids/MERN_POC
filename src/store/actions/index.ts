export const getEmployee = (employee: []) => {
  return {
    type: "GET_EMPLOYEE",
    payload: employee,
  };
};

export const getDepartment = (department: []) => {
  return {
    type: "GET_DEPARTMENT",
    payload: department,
  };
};

export const getRole = (role: []) => {
  return {
    type: "GET_ROLE",
    payload: role,
  };
};
