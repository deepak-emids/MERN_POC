export interface header {
  headers: {
    token: string | null | boolean;
  };
}

export interface EmployeeData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  department_Id: number | string;
  role_Id: number | string;
  mobileNo: number | string;
  aadharId: number | string;
  date_Of_Joining: Date | string;
}
