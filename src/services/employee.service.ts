import 'reflect-metadata';
import logger from '../config/logger';
import bcrypt from 'bcrypt';
import { EmployeeDetails } from '../entity/employee';
import EmployeeData from '../models/employeeDetails.model';
import Response from '../models/response.model';
import Repository from '../repository/repository';
let repo = new Repository();

let response = new Response();

class EmployeeDetailsService {
  /*
  add employee
  */
  public addEmployeeDetails = async (body: EmployeeData): Promise<Response> => {
    let emp = new EmployeeDetails();

    let query = { aadharId: body.aadharId };
    let result = await repo.get(EmployeeDetails, query);

    if (result) {
      //response object
      response.data = result;
      response.message = 'Employee Already Exists';
      response.status = 201;

      return response;
    } else {
      const hash: string = await bcrypt.hash(body.password, 8);

      body.password = hash;

      emp = { ...body };

      let find = await repo.add(EmployeeDetails, emp);

      //response object
      response.data = find[find.length - 1];
      response.message = 'EmployeeDetails Data Added';
      response.status = 201;

      //return saved data
      return response;
    }
  };

  /*
  get All Employees
  */
  public getAllEmployeeDetails = async (): Promise<Response> => {
    let result = await repo.getAll(EmployeeDetails);

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
  get EmployeeDetails
  */
  public getEmployeeDetails = async (id: number): Promise<Response> => {
    let query = { id: id };
    let result = await repo.get(EmployeeDetails, query);

    if (result) {
      response.data = result;
      response.message = 'EmployeeDetails deleted';
      response.status = 200;

      return response;
    } else {
      response.data = result;
      response.message = 'EmployeeDetails Not Found';
      response.status = 404;

      return response;
    }
  };

  /*
  update EmployeeDetails
  */
  public updateEmployeeDetails = async (id: number, body: EmployeeData) => {
    let newData = { ...body };

    let result = await repo.update(EmployeeDetails, id, newData);

    if (result.length > 0) {
      response.data = result;
      response.message = 'EmployeeDetails updated';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Employee Not Found';
      response.status = 404;

      return response;
    }
  };

  /*
  delete EmployeeDetails 
  */
  public deleteEmployeeDetails = async (id) => {
    let result = await repo.delete(EmployeeDetails, id);

    if (result.length > 0) {
      response.data = result;
      response.message = 'EmployeeDetails deleted';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Employee Not Found';
      response.status = 404;

      return response;
    }
  };
}

export default EmployeeDetailsService;
