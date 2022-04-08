import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { EmployeeDetails } from '../entity/employee';
import Response from '../models/Response.model';
import LoginRequest from '../models/LoginRequest';
import Repository from '../repository/Repository';
let repo = new Repository();

let response = new Response();
class UserService {
  /*
  login user
  */
  public loginUser = async (body: LoginRequest): Promise<Response> => {
    let query = { email: body.email };
    let find = await repo.get(EmployeeDetails, query);

    if (find) {
      let checkPassword = await bcrypt.compare(body.password, find.password);
      if (checkPassword) {
        const token: string = jwt.sign(
          {
            email: find.email,
            id: find.id,
            role_Id: find.role_Id
          },
          'secret'
        );

        response.data = {
          id: find.id,
          email: find.email,
          role_Id: find.role_Id,
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
