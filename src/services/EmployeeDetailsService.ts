import 'reflect-metadata';
import bcrypt from 'bcrypt';
import { EmployeeDetails } from '../entity/Employee';
import EmployeeData from '../models/EmployeeData';
import Response from '../models/Response.model';
import EmployeeRepository from '../repository/EmployeeRepository';
let repo = new EmployeeRepository();

class EmployeeDetailsService {
  public async addEmployeeDetails(body: EmployeeData): Promise<Response> {
    let response = new Response();

    let emp = new EmployeeDetails();

    const query: { email: string } = { email: body.email };

    const result = await repo.get(query);

    if (result) {
      response = {
        data: result,
        message: 'Employee Already Exists',
        status: 200
      };

      return response;
    } else {
      const hash: string = await bcrypt.hash(body.password, 8);

      body.password = hash;

      emp = { ...body };

      let addedEmployee = await repo.add(emp);

      response = {
        data: addedEmployee,
        message: 'Employee Details  Added',
        status: 201
      };

      return response;
    }
  }

  public getAllEmployeeDetails = async (): Promise<Response> => {
    let response = new Response();

    let result = await repo.getAll();

    if (result) {
      response = {
        data: result,
        message: 'EmployeeDetails Fetched',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'EmployeeDetails Not Found',
        status: 404
      };

      return response;
    }
  };

  public getEmployeeDetails = async (id: number): Promise<Response> => {
    let response = new Response();

    let query = { id: id };

    let result = await repo.get(query);
    if (result) {
      response = {
        data: result,
        message: 'Employee Details Fetched',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'EmployeeDetails Not Found',
        status: 404
      };

      return response;
    }
  };

  public updateEmployeeDetails = async (id: number, body: EmployeeData) => {
    let response = new Response();

    let newData = { ...body };

    let query = { id: id };

    let findEmployee = await repo.get(query);
    if (findEmployee) {
      let result = await repo.update(id, newData);

      if (result) {
        response = {
          data: result,
          message: 'EmployeeDetails updated',
          status: 200
        };

        return response;
      }
    } else {
      response.data = {};
      response.message = 'Employee Not Found';
      response.status = 404;

      return response;
    }
  };

  public deleteEmployeeDetails = async (id: number) => {
    let response = new Response();

    let query = { id: id };

    let findEmployee = await repo.get(query);
    if (findEmployee) {
      let result = await repo.delete(id);

      if (result) {
        response = {
          data: {},
          message: 'EmployeeDetails deleted',
          status: 200
        };

        return response;
      }
    } else {
      response = {
        data: {},
        message: 'Employee Not Found',
        status: 404
      };

      return response;
    }
  };
}

export default EmployeeDetailsService;
