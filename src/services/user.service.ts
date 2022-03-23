import { IUser } from '../models/user.model';
import { OkPacket, RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { EmployeeDetails } from '../entity/employee';
import Response from '../models/response.model';
import LoginRequest from '../models/loginReq.model';
import Repository from '../repository/repository';
let repo = new Repository();

let response = new Response();
class UserService {
  /*
  login user
  */
  public loginUser = async (body: LoginRequest): Promise<Response> => {
    let query = { email: body.email };
    let find = await repo.get(EmployeeDetails, query);

    console.log(find.password);

    if (find) {
      let checkPassword = await bcrypt.compare(body.password, find.password);
      if (checkPassword) {
        const token: string = jwt.sign(
          { email: find.email, employeeId: find.employeeId },
          'secret'
        );

        response.data = {
          employeeId: find.id,
          email: find.email,
          token: token
        };
        response.message = 'Login success';
        response.status = 200;

        return response;
      } else {
        response.data = {};
        response.message = 'Incorrect Password';
        response.status = 401;
        return response;
      }
    } else {
      response.data = {};
      response.message = 'User Not Found';
      response.status = 404;

      return response;
    }
  };
}

export default UserService;
