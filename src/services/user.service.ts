import { IUser } from '../types/user.interface';
import { OkPacket, RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import { createConnection } from 'typeorm';
import Response from '../types/Response';
import LoginRequest from '../types/loginReqType';
import { EmployeeWorkDetails } from '../entity/employeeWork.model';

let response = new Response();
class UserService {
  /*
  login user
  */
  public loginUser = async (body: LoginRequest): Promise<Response> => {
    let find = await new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmployeeWorkDetails);

          let foundEmp = await repo.find({ email: body.email });

          await connection.close();

          resolve(foundEmp);
        })
        .catch((error) => reject(error));
    });

    return new Promise((resolve, reject) => {
      if (find.length > 0) {
        if (find[0].password == body.password) {
          const token: string = jwt.sign(
            { email: find[0].email, employeeId: find[0].employeeId },
            'secret'
          );

          //response object
          response.data = {
            employeeId: find[0].employeeId,
            email: find[0].email,
            token: token
          };
          response.message = 'Login success';
          response.status = 200;

          //resolve saved data
          resolve(response);
        } else {
          response.data = {};
          response.message = 'Incorrect Password';
          response.status = 401;
          reject(response);
        }
      } else {
        response.data = {};
        response.message = 'User Not Found';
        response.status = 200;
        reject(response);
      }
    });
  };
}

export default UserService;
