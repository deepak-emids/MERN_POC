import { IUser } from '../interfaces/user.interface';
import { OkPacket, RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import { createConnection } from 'typeorm';
import { ILoginRes } from '../interfaces/login.interface';
import { IEMP } from '../interfaces/employee.interface';
import { ILoginData } from '../interfaces/login.interface';
import { EmpWork } from '../entity/employeeWork.model';
class UserService {
  /*
  login user
  */
  public loginUser = async (body): Promise<ILoginRes> => {

    let find: IEMP[] = await new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmpWork);

          let foundEmp = await repo.find({ email: body.email });
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

          let response: ILoginRes = {
            data: {
              employeeId: find[0].employeeId,
              // permissionId: find[0].permissionId,
              email: find[0].email,
              token: token
            },
            message: 'Login success',
            status: 200
          };

          resolve(response);
        } else {
          reject({
            data: {},
            message: 'Incorrect Password',
            status: 401
          });
        }
      } else {
        reject({
          data: {},
          message: 'User Not Found',
          status: 404
        });
      }
    });
  };
}

export default UserService;
