import 'reflect-metadata';
import { Department } from '../entity/Department';
import DepartmentData from '../models/DepartmentDetails';
import DepartmentRepository from '../repository/DepartmentRepository';
import Response from '../models/Response';
import HttpStatus from 'http-status-codes';
import Message from '../utils/DepartmentMessage.json';

class DepartmentService {
  private departmentRepository;
  constructor(departmentRepository?: DepartmentRepository) {
    this.departmentRepository = departmentRepository
      ? departmentRepository
      : new DepartmentRepository();
  }

  public addDepartment = async (body: DepartmentData): Promise<Response> => {
    let responseDTO: Response;

    let query: { departmentName: string } = {
      departmentName: body.departmentName
    };
    let result = await this.departmentRepository.get(query);

    if (result) {
      responseDTO = {
        data: {},
        message: Message.CONFLICT,
        status: HttpStatus.CONFLICT
      };
    } else {
      const dept = new Department();

      dept.departmentName = body.departmentName;

      let newDepartment = await this.departmentRepository.add(dept);

      responseDTO = {
        data: newDepartment,
        message: Message.CREATED,
        status: HttpStatus.CREATED
      };
    }

    return responseDTO;
  };

  public getAllDepartment = async (): Promise<Response> => {
    let responseDTO: Response;

    let result: [] = await this.departmentRepository.getAll();

    if (result.length > 0) {
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

  public getDepartment = async (id: number): Promise<Response> => {
    let responseDTO: Response;

    let query = { id: id };

    let result = await this.departmentRepository.get(query);

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

  public updateDepartment = async (id: number, body: DepartmentData) => {
    let responseDTO: Response;

    let newData = { ...body };

    let query: { id: number } = {
      id: id
    };

    let result = await this.departmentRepository.get(query);

    if (result) {
      let update = await this.departmentRepository.update(id, newData);

      responseDTO = {
        data: update,
        message: Message.UPDATED,
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

  public deleteDepartment = async (id: number) => {
    let responseDTO: Response;

    let query: { id: number } = {
      id: id
    };

    let result = await this.departmentRepository.get(query);

    if (result) {
      let update = await this.departmentRepository.delete(result);

      if (update) {
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

export default DepartmentService;
