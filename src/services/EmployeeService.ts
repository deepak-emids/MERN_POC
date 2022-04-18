import 'reflect-metadata';
import bcrypt from 'bcrypt';
import { Employee } from '../entity/Employee';
import EmployeeData from '../models/EmployeeData';
import Response from '../models/ResponseDTO';
import EmployeeRepository from '../repository/EmployeeRepository';
import Message from '../utils/ResponseMessage.json';
import HttpStatus from 'http-status-codes';

class EmployeeService {
  private employeeRepository;
  constructor(employeeRepository?: EmployeeRepository) {
    this.employeeRepository = employeeRepository
      ? employeeRepository
      : new EmployeeRepository();
  }

  public async addEmployee(body: EmployeeData): Promise<Response> {
    let responseDTO: Response;

    let emp = new Employee();

    const query: { email: string } = { email: body.email };

    const result = await this.employeeRepository.get(query);

    if (result) {
      responseDTO = {
        data: result,
        message: Message.CONFLICT,
        status: HttpStatus.CONFLICT
      };

      return responseDTO;
    } else {
      const hash: string = await bcrypt.hash(body.password, 8);

      body.password = hash;

      emp = { ...body };

      let addedEmployee = await this.employeeRepository.add(emp);

      responseDTO = {
        data: addedEmployee,
        message: Message.CREATED,
        status: HttpStatus.CREATED
      };

      return responseDTO;
    }
  }

  public getAllEmployee = async (): Promise<Response> => {
    let responseDTO: Response;

    let result = await this.employeeRepository.getAll();

    if (result) {
      responseDTO = {
        data: result,
        message: Message.FETCHED,
        status: HttpStatus.OK
      };

      return responseDTO;
    } else {
      responseDTO = {
        data: {},
        message: Message.NOT_FOUND,
        status: HttpStatus.NOT_FOUND
      };

      return responseDTO;
    }
  };

  public getEmployee = async (id: number): Promise<Response> => {
    let responseDTO: Response;

    let query = { id: id };

    let result = await this.employeeRepository.get(query);
    if (result) {
      responseDTO = {
        data: result,
        message: Message.FETCHED,
        status: HttpStatus.OK
      };

      return responseDTO;
    } else {
      responseDTO = {
        data: {},
        message: Message.NOT_FOUND,
        status: HttpStatus.NOT_FOUND
      };

      return responseDTO;
    }
  };

  public updateEmployee = async (id: number, body: EmployeeData) => {
    let responseDTO: Response;

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
        responseDTO = {
          data: result,
          message: Message.UPDATED,
          status: HttpStatus.OK
        };

        return responseDTO;
      }
    } else {
      responseDTO = {
        data: {},
        message: Message.NOT_FOUND,
        status: HttpStatus.NOT_FOUND
      };

      return responseDTO;
    }
  };

  public deleteEmployee = async (id: number) => {
    let responseDTO: Response;

    let query = { id: id };

    let findEmployee = await this.employeeRepository.get(query);
    if (findEmployee) {
      let result = await this.employeeRepository.delete(id);

      if (result) {
        responseDTO = {
          data: {},
          message: Message.DELETED,
          status: HttpStatus.OK
        };

        return responseDTO;
      }
    } else {
      responseDTO = {
        data: {},
        message: Message.NOT_FOUND,
        status: HttpStatus.NOT_FOUND
      };

      return responseDTO;
    }
  };
}

export default EmployeeService;
