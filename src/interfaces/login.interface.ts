import { RowDataPacket } from 'mysql2';

export interface ILoginRes {
  data: {
    employeeId: Number;
    // permissionId: Number;
    email: String;
    token: String;
  };
  message: String;
  status: Number;
}

export interface ILoginData {
  email: String;
  password: String;
}

