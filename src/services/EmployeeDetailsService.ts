import 'reflect-metadata';
import bcrypt from 'bcrypt';
import { EmployeeDetails } from '../entity/employee';
import EmployeeData from '../models/EmployeeData';
import Response from '../models/Response.model';
import EmployeeRepository from '../repository/EmployeeRepository';
let repo = new EmployeeRepository();

class EmployeeDetailsService {
  public async addEmployeeDetails(body: EmployeeData): Promise<Response> {
    let response = new Response();

    let emp = new EmployeeDetails();

    let query: { email: string } = { email: body.email };
    let result = await repo.get(query);

    if (result) {
      response.data = result;
      response.message = 'Employee Already Exists';
      response.status = 200;

      return response;
    } else {
      const hash: string = await bcrypt.hash(body.password, 8);

      body.password = hash;

      emp = { ...body };

      let addedEmployee = await repo.add(emp);

      response.data = addedEmployee;
      response.message = 'Employee Details  Added';
      response.status = 201;

      return response;
    }
  }

  public getAllEmployeeDetails = async (): Promise<Response> => {
    let response = new Response();

    let result = await repo.getAll();

    if (result) {
      response.data = result;
      response.message = 'EmployeeDetails Fetched';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'EmployeeDetails Not Found';
      response.status = 404;

      return response;
    }
  };

  public getEmployeeDetails = async (id: number): Promise<Response> => {
    let response = new Response();

    let query = { id: id };

    let result = await repo.get(query);
    if (result) {
      response.data = result;
      response.message = 'Employee Details Fetched';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'EmployeeDetails Not Found';
      response.status = 404;

      return response;
    }
  };

  public updateEmployeeDetails = async (id: number, body) => {
    let response = new Response();

    let newData = { ...body };

    let result = await repo.update(id, newData);

    if (result) {
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

  public deleteEmployeeDetails = async (id: number) => {
    let response = new Response();

    let result = await repo.delete(id);

    if (result) {
      response.data = {};
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
