import 'reflect-metadata';
import { OkPacket, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces/user.interface';
import { User } from '../entity/User';
import { getRepository } from 'typeorm';
import logger from '../config/logger';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createConnection } from 'typeorm';
import { Employee } from '../entity/employee.model';
import { EmpWork } from '../entity/employeeWork.model';
import { IEMPData } from '../interfaces/employee.interface';
import { IEmp } from '../interfaces/employee.interface';

class EmployeeService {
  /*
  add emp
  */
  public addEmployee = async (body): Promise<IEMPData[]> => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          // create ref
          const emp = new Employee();

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
          let repo = connection.getRepository(Employee);

          //save table
          await repo.save(emp);

          //get saved data
          let find: IEMPData[] = await repo.find();

          await connection.close();

          //resolve saved data
          resolve(find);

          //anohter way
          // await connection.manager.save(emp);

          //get saved data
          // const users = await connection.manager.find(Employee);
          // resolve(users)
        })
        .catch((error) => reject(error));
    });
  };

  /*
  add empWork
  */
  public addEmpWork = async (body): Promise<IEMP[]> => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          // create ref
          const emp = new EmpWork();

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
          let repo = connection.getRepository(EmpWork);

          //save table
          await repo.save(emp);

          //get saved data
          let find: IEMP[] = await repo.find();

          await connection.close();

          //resolve saved data
          resolve(find);

          //anohter way
          // await connection.manager.save(emp);

          //get saved data
          // const users = await connection.manager.find(Employee);
          // resolve(users)
        })
        .catch((error) => reject(error));
    });
  };

  /*
  get emps
  */
  public getEmployee = async (): Promise<IEMPData[]> => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let photoRepository = connection.getRepository(Employee);

          let savedPhotos: IEMPData[] = await photoRepository.find();

          resolve(savedPhotos);
        })
        .catch((error) => reject(error));
    });
  };

  /*
  get empwork
  */
  public getEmpWork = async (): Promise<IEMPData[]> => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let photoRepository = connection.getRepository(EmpWork);

          let savedPhotos: IEMPData[] = await photoRepository.find();

          resolve(savedPhotos);
        })
        .catch((error) => reject(error));
    });
  };

  /*
  update emp
  */
  public updateEmployee = async (id, body) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(Employee);

          let foundEmp = await repo.find({ employeeId: id });

          if (foundEmp.length > 0) {
            let key = body.key;
            // `${foundEmp[0]}``${key}`  = body.value;

            console.log(foundEmp[0]);

            await repo.save(foundEmp[0]);

            let response = 'Employee updated';
            await connection.close();
            resolve(response);
          } else {
            await connection.close();
            let response = 'Employee Not Found';
            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  /*
  update empWork
  */
  public updateEmpWork = async (id, body) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmpWork);

          let foundEmp = await repo.find({ employeeId: id });

          if (foundEmp.length > 0) {
            let key = body.key;
            // `${foundEmp[0]}``${key}`  = body.value;

            console.log(foundEmp[0]);

            await repo.save(foundEmp[0]);

            let response = 'Employee updated';
            await connection.close();
            resolve(response);
          } else {
            await connection.close();
            let response = 'Employee Not Found';
            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  /*
  delete emp
  */
  public deleteEmployee = async (id) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(Employee);

          let foundEmp = await repo.find({ employeeId: id });

          if (foundEmp.length > 0) {
            await repo.remove(foundEmp[0]);
            let response = 'Employee Deleted';
            await connection.close();
            resolve(response);
          } else {
            await connection.close();
            let response = 'Employee Not Found';
            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  /*
  delete empWork
  */
  public deleteEmpWork = async (id) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(EmpWork);

          let foundEmp = await repo.find({ employeeId: id });

          if (foundEmp.length > 0) {
            await repo.remove(foundEmp[0]);
            let response = 'Employee Deleted';
            await connection.close();
            resolve(response);
          } else {
            await connection.close();
            let response = 'Employee Not Found';
            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };
}

export default EmployeeService;
