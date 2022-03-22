import 'reflect-metadata';
import { OkPacket, RowDataPacket } from 'mysql2';
import { Entity, getRepository } from 'typeorm';
import logger from '../config/logger';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createConnection } from 'typeorm';
import { EmployeeDetails } from '../entity/employee';
import EmployeeData from '../models/employeeDetails.model';
import Repository from '../repository/repository';
import Response from '../models/Response';
import { number } from '@hapi/joi';

let response = new Response();
let repo = new Repository();

class EmployeeDetailsService {
  /*
  add emp
  */
  public addEmployeeDetails = async (body: EmployeeData): Promise<Response> => {
    const emp = new EmployeeDetails();

    const hash: string = await bcrypt.hash(body.password, 8);

    //assign values
    emp.firstName = body.firstName;
    emp.lastName = body.lastName;
    emp.email = body.email;
    emp.password = hash;
    emp.address = body.address;
    emp.department_Id = body.department_Id;
    emp.role_Id = body.role_Id;
    emp.mobileNo = body.mobileNo;
    emp.aadharId = body.aadharId;
    emp.date_Of_Joining = body.date_Of_Joining;

    let find = await repo.addEmployee(EmployeeDetails, emp);

    //response object
    response.data = find;
    response.message = 'EmployeeDetails Data Added';
    response.status = 201;

    //return saved data
    return response;
  };

  /*
  get EmployeeDetailss
  */
  public getEmployeeDetails = async (): Promise<Response> => {
    let result = await repo.getAllEmployee(EmployeeDetails);

    if (result.length > 0) {
      response.data = result;
      response.message = 'EmployeeDetails deleted';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'EmployeeDetails Not Found';
      response.status = 404;

      return response;
    }
  };

  /*
  update EmployeeDetails
  */
  public updateEmployeeDetails = async (id: number, body: EmployeeData) => {
    let details: EmployeeData = await repo.getEmployee(EmployeeDetails, id);

    let newData = {
      id: id,
      firstName: body.firstName ? body.firstName : details.firstName,
      lastName: body.lastName ? body.lastName : details.lastName,
      email: body.email ? body.email : details.email,
      password: body.password ? body.password : details.password,
      address: body.address ? body.address : details.address,
      department_Id: body.department_Id
        ? body.department_Id
        : details.department_Id,
      role_Id: body.role_Id ? body.role_Id : details.role_Id,
      mobileNo: body.mobileNo ? body.mobileNo : details.mobileNo,
      aadharId: body.aadharId ? body.aadharId : details.aadharId,
      date_Of_Joining: body.date_Of_Joining
        ? body.date_Of_Joining
        : details.date_Of_Joining
    };

    let result = await repo.updateEmployee(EmployeeDetails, id, newData);

    if (result.length > 0) {
      response.data = result;
      response.message = 'EmployeeDetails deleted';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'EmployeeDetails Not Found';
      response.status = 404;

      return response;
    }
  };

  /*
  delete EmployeeDetails work details
  */
  public deleteEmployeeDetails = async (id) => {
    let result = await repo.deleteEmployee(EmployeeDetails, id);

    if (result.length > 0) {
      response.data = result;
      response.message = 'EmployeeDetails deleted';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'EmployeeDetails Not Found';
      response.status = 404;

      return response;
    }
  };
}

export default EmployeeDetailsService;
