import { RowDataPacket } from 'mysql2';

export interface IUser extends RowDataPacket {
  id: string | number;
  name: string;
  emailid: string;
  phone_number: number;
  gender: string;
  salary: number;
  emp_id: number;
  password: string;
  dep_id: number;
  role_id: number;
}
