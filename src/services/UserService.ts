import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { EmployeeDetails } from '../entity/employee';
import Response from '../models/response.model';
import LoginRequest from '../models/LoginRequest';
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

    console.log(find[0]);
    if (find.length > 0) {
      let checkPassword = await bcrypt.compare(body.password, find[0].password);
      if (checkPassword) {
        const token: string = jwt.sign(
          {
            email: find[0].email,
            id: find[0].id,
            role_Id: find[0].role_Id
          },
          'secret'
        );

        response.data = {
          id: find[0].id,
          email: find[0].email,
          role_Id: find[0].role_Id,
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
