import 'reflect-metadata';
import { OkPacket, RowDataPacket } from 'mysql2';
import { IUser } from '../types/user.interface';
import { User } from '../entity/User';
import { getRepository } from 'typeorm';
import logger from '../config/logger';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createConnection } from 'typeorm';
import { EmployeeDetails } from '../entity/employee.model';
import { EmployeeWorkDetails } from '../entity/employeeWork.model';
import EmployeeData from '../types/empDataType';
import EmployeeWorkData from '../types/empWorkType';
import Response from '../types/Response';

let response = new Response();

class EmployeeDetailsService {
  /*
  add emp
  */
  public addEmployeeDetails = async (body: EmployeeData): Promise<Response> => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          // create ref
          const emp = new EmployeeDetails();

          //assign values
          emp.firstName = body.firstName;
          emp.lastName = body.lastName;
          emp.email = body.email;
          emp.gender = body.gender;
          emp.date_of_birth = body.date_of_birth;
          emp.address = body.address;
          emp.city = body.city;
          emp.country = body.country;
          emp.mobileNo = body.mobileNo;
          emp.aadharId = body.aadharId;

          //get table
          let repo = connection.getRepository(EmployeeDetails);

          //save table
          await repo.save(emp);

          //get saved data
          let find: EmployeeData[] = await repo.find();

          //close connection
          await connection.close();

          //response object
          response.data = find;
          response.message = 'EmployeeDetails Data Added';
          response.status = 201;

          //resolve saved data
          resolve(response);

          //anohter way
          // await connection.manager.save(emp);

          //get saved data
          // const users = await connection.manager.find(EmployeeDetails);
          // resolve(users)
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  /*
  add EmployeeWorkDetails
  */
  public addEmployeeWorkDetails = async (body: EmployeeWorkData): Promise<Response> => {
    let response = new Response();
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          // create ref
          const emp = new EmployeeWorkDetails();

          //assign values
          emp.email = body.email;
          emp.password = body.password;
          emp.education = body.education;
          emp.experiance = body.experiance;
          emp.department = body.department;
          emp.role = body.role;
          emp.designation = body.designation;
          emp.reporting_lead = body.reporting_lead;
          emp.package = body.package;
          emp.joining = body.joining;

          //get table
          let repo = connection.getRepository(EmployeeWorkDetails);

          //save table
          await repo.save(emp);

          //get saved data
          let find: EmployeeWorkData[] = await repo.find();

          //close connection
          await connection.close();

          //response objecct
          response.data = find;
          response.message = 'EmployeeDetails Data Added';
          response.status = 201;

          //resolve saved data
          resolve(response);

          //anohter way
          // await connection.manager.save(emp);

          //get saved data
          // const users = await connection.manager.find(EmployeeDetails);
          // resolve(users)
        })
        .catch((error) => reject(error));
    });
  };

  /*
  get EmployeeDetailss
  */
  public getEmployeeDetails = async (): Promise<Response> => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmployeeDetails);

          let foundEmp: EmployeeData[] = await repo.find();

          await connection.close();

          response.data = foundEmp;
          response.message = 'EmployeeDetails fetched successfully';
          response.status = 200;

          resolve(response);
        })
        .catch((error) => reject(error));
    });
  };

  /*
  get EmployeeDetails work details
  */
  public getEmployeeWorkDetails = async (): Promise<Response> => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmployeeWorkDetails);

          let foundEmp: EmployeeWorkData[] = await repo.find();

          if (foundEmp.length > 0) {
            await connection.close();
            response.data = foundEmp;
            response.message = 'EmployeeDetails fetched successfully';
            response.status = 200;
            resolve(response);
          } else {
            await connection.close();
            response.data = {};
            response.message = 'EmployeeDetailss Not Found';
            response.status = 404;
            resolve(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  /*
  update EmployeeDetails
  */
  public updateEmployeeDetails = async (id, body) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmployeeDetails);

          let foundEmp = await repo.find({ employeeId: id });

          if (foundEmp.length > 0) {
            let key = body.key;
            // `${foundEmp[0]}``${key}`  = body.value;

            await repo.save(foundEmp[0]);

            await connection.close();

            response.data = foundEmp;
            response.message = 'EmployeeDetails updated';
            response.status = 200;

            resolve(response);
          } else {
            await connection.close();

            response.data = foundEmp;
            response.message = 'EmployeeDetails Not Found';
            response.status = 404;

            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  /*
  update EmployeeDetails Work details
  */
  public updateEmployeeWorkDetails = async (id, body) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmployeeWorkDetails);

          let foundEmp = await repo.find({ employeeId: id });

          if (foundEmp.length > 0) {
            let key = body.key;
            // `${foundEmp[0]}``${key}`  = body.value;

            console.log(foundEmp[0]);

            await repo.save(foundEmp[0]);

            await connection.close();

            response.data = foundEmp;
            response.message = 'EmployeeDetails updated';
            response.status = 200;

            resolve(response);
          } else {
            await connection.close();

            response.data = foundEmp;
            response.message = 'EmployeeDetails Not Found';
            response.status = 404;

            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  /*
  delete EmployeeDetails work details
  */
  public deleteEmployeeDetails = async (id) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmployeeDetails);

          let foundEmp = await repo.find({ employeeId: id });

          if (foundEmp.length > 0) {
            await repo.remove(foundEmp[0]);

            await connection.close();

            response.data = {};
            response.message = 'EmployeeDetails updated';
            response.status = 200;

            resolve(response);
          } else {
            await connection.close();

            response.data = {};
            response.message = 'EmployeeDetails Not Found';
            response.status = 404;

            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  /*
  delete EmployeeDetails work details
  */
  public deleteEmployeeWorkDetails = async (id) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmployeeWorkDetails);

          let foundEmp = await repo.find({ employeeId: id });

          if (foundEmp.length > 0) {
            await repo.remove(foundEmp[0]);

            await connection.close();

            response.data = {};
            response.message = 'EmployeeDetails deleted';
            response.status = 200;

            resolve(response);
          } else {
            await connection.close();

            response.data = {};
            response.message = 'EmployeeDetails Not Found';
            response.status = 404;

            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };
}

export default EmployeeDetailsService;
