import 'reflect-metadata';
import logger from '../config/logger';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createConnection } from 'typeorm';
import { Department } from '../entity/department';
import DepartmentData from '../models/dept';
import Response from '../models/Response';

let response = new Response();

class DepartmentService {
  /*
  add emp
  */
  public addDepartment = async (body: DepartmentData): Promise<Response> => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          // create ref
          const emp = new Department();

          //assign values
          emp.name = body.name;
          emp.head = body.head;

          //get table
          let repo = connection.getRepository(Department);

          //save table
          await repo.save(emp);

          //get saved data
          let find: DepartmentData[] = await repo.find();

          //close connection
          await connection.close();

          //response object
          response.data = find;
          response.message = 'Department Data Added';
          response.status = 201;

          //resolve saved data
          resolve(response);

          //anohter way
          // await connection.manager.save(emp);

          //get saved data
          // const users = await connection.manager.find(Department);
          // resolve(users)
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  /*
  get Departments
  */
  public getDepartment = async (): Promise<Response> => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(Department);

          let foundEmp: DepartmentData[] = await repo.find();

          await connection.close();

          response.data = foundEmp;
          response.message = 'Department fetched successfully';
          response.status = 200;

          resolve(response);
        })
        .catch((error) => reject(error));
    });
  };

  /*
  update Department
  */
  public updateDepartment = async (id, body) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(Department);

          let found = await repo.find({ deptId: id });

          if (found.length > 0) {
            await repo.update(
              { deptId: id },
              {
                name: body.name ? body.name : found[0].name,
                head: body.head ? body.head : found[0].head
              }
            );

            let updatedDept = await repo.find({ deptId: id });
            await connection.close();

            response.data = updatedDept;
            response.message = 'Department updated';
            response.status = 200;

            resolve(response);
          } else {
            await connection.close();

            response.data = found;
            response.message = 'Department Not Found';
            response.status = 404;

            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  /*
  delete Department work details
  */
  public deleteDepartment = async (id) => {
    return new Promise((resolve, reject) => {
      createConnection()
        .then(async (connection) => {
          let repo = connection.getRepository(Department);

          let foundEmp = await repo.find({ deptId: id });

          if (foundEmp.length > 0) {
            await repo.remove(foundEmp[0]);

            await connection.close();

            response.data = {};
            response.message = 'Department updated';
            response.status = 200;

            resolve(response);
          } else {
            await connection.close();

            response.data = {};
            response.message = 'Department Not Found';
            response.status = 404;

            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };
}

export default DepartmentService;
