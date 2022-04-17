import 'reflect-metadata';
import bcrypt from 'bcrypt';
import { Employee } from '../entity/Employee';
import EmployeeData from '../models/EmployeeData';
import Response from '../models/Response.model';
import EmployeeRepository from '../repository/EmployeeRepository';
import Message from '../utils/ResponseMessage.json';

class EmployeeService {
  private employeeRepository;
  constructor(employeeRepository?: EmployeeRepository) {
    this.employeeRepository = employeeRepository
      ? employeeRepository
      : new EmployeeRepository();
  }

  public async addEmployee(body: EmployeeData): Promise<Response> {
    let response = new Response();

    let emp = new Employee();

    const query: { email: string } = { email: body.email };

    const result = await this.employeeRepository.get(query);

    if (result) {
      response = {
        data: result,
        message: Message.CONFLICT,
        status: 200
      };

      return response;
    } else {
      const hash: string = await bcrypt.hash(body.password, 8);

      body.password = hash;

      emp = { ...body };

      let addedEmployee = await this.employeeRepository.add(emp);

      response = {
        data: addedEmployee,
        message: Message.CREATED,
        status: 201
      };

      return response;
    }
  }

  public getAllEmployee = async (): Promise<Response> => {
    let response = new Response();

    let result = await this.employeeRepository.getAll();

    if (result) {
      response = {
        data: result,
        message: Message.FETCHED,
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: Message.NOT_FOUND,
        status: 404
      };

      return response;
    }
  };

  public getEmployee = async (id: number): Promise<Response> => {
    let response = new Response();

    let query = { id: id };

    let result = await this.employeeRepository.get(query);
    if (result) {
      response = {
        data: result,
        message: Message.FETCHED,
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: Message.NOT_FOUND,
        status: 404
      };

      return response;
    }
  };

  public updateEmployee = async (id: number, body: EmployeeData) => {
    let response = new Response();

    if (body.hasOwnProperty('password')) {
      const hash: string = await bcrypt.hash(body.password, 8);

      body.password = hash;
    }

    let newData = { ...body };

    let query = { id: id };

    let findEmployee = await this.employeeRepository.get(query);
    if (findEmployee) {
      let result = await this.employeeRepository.update(id, newData);

      if (result) {
        response = {
          data: result,
          message: Message.UPDATED,
          status: 200
        };

        return response;
      }
    } else {
      response = {
        data: {},
        message: Message.NOT_FOUND,
        status: 404
      };

      return response;
    }
  };

  public deleteEmployee = async (id: number) => {
    let response = new Response();

    let query = { id: id };

    let findEmployee = await this.employeeRepository.get(query);
    if (findEmployee) {
      let result = await this.employeeRepository.delete(id);

      if (result) {
        response = {
          data: {},
          message: Message.DELETED,
          status: 200
        };

        return response;
      }
    } else {
      response = {
        data: {},
        message: Message.NOT_FOUND,
        status: 404
      };

      return response;
    }
  };
}

export default EmployeeService;
