import 'reflect-metadata';
import { Department } from '../entity/Department';
import DepartmentData from '../models/DepartmentDetails';
import DepartmentRepository from '../repository/DepartmentRepository';
import Response from '../models/Response';
import HttpStatus from 'http-status-codes';
import Message from '../utils/DepartmentMessage.json';

class DepartmentService {
  private departmentRepository;
  private responseDTO;
  constructor(departmentRepository?: DepartmentRepository) {
    this.departmentRepository = departmentRepository
      ? departmentRepository
      : new DepartmentRepository();
    this.responseDTO = new Response();
  }

  public addDepartment = async (body: DepartmentData): Promise<Response> => {
    let query: { departmentName: string } = {
      departmentName: body.departmentName
    };
    let result = await this.departmentRepository.get(query);

    if (result) {
      this.responseDTO = {
        data: {},
        message: Message.CONFLICT,
        status: HttpStatus.CONFLICT
      };
    } else {
      const dept = new Department();

      dept.departmentName = body.departmentName;

      let newDepartment = await this.departmentRepository.add(dept);

      this.responseDTO = {
        data: newDepartment,
        message: Message.CREATED,
        status: HttpStatus.CREATED
      };
    }

    return this.responseDTO;
  };

  public getAllDepartment = async (): Promise<Response> => {
    let result: [] = await this.departmentRepository.getAll();

    if (result.length > 0) {
      this.responseDTO = {
        data: result,
        message: Message.FETCHED,
        status: HttpStatus.OK
      };

      return this.responseDTO;
    } else {
      this.responseDTO = {
        data: {},
        message: Message.NOT_FOUND,
        status: HttpStatus.NOT_FOUND
      };

      return this.responseDTO;
    }
  };

  public getDepartment = async (id: number): Promise<Response> => {
    let query = { id: id };

    let result = await this.departmentRepository.get(query);

    if (result) {
      this.responseDTO = {
        data: result,
        message: Message.FETCHED,
        status: HttpStatus.OK
      };

      return this.responseDTO;
    } else {
      this.responseDTO = {
        data: {},
        message: Message.NOT_FOUND,
        status: HttpStatus.NOT_FOUND
      };

      return this.responseDTO;
    }
  };

  public updateDepartment = async (id: number, body: DepartmentData) => {
    let newData = { ...body };

    let query: { id: number } = {
      id: id
    };

    let result = await this.departmentRepository.get(query);

    if (result) {
      let update = await this.departmentRepository.update(id, newData);

      this.responseDTO = {
        data: update,
        message: Message.UPDATED,
        status: HttpStatus.OK
      };

      return this.responseDTO;
    } else {
      this.responseDTO = {
        data: {},
        message: Message.NOT_FOUND,
        status: HttpStatus.NOT_FOUND
      };

      return this.responseDTO;
    }
  };

  public deleteDepartment = async (id: number) => {
    let query: { id: number } = {
      id: id
    };

    let result = await this.departmentRepository.get(query);

    if (result) {
      await this.departmentRepository.delete(result);

      this.responseDTO = {
        data: {},
        message: Message.DELETED,
        status: HttpStatus.OK
      };

      return this.responseDTO;
    } else {
      this.responseDTO = {
        data: {},
        message: Message.NOT_FOUND,
        status: HttpStatus.NOT_FOUND
      };

      return this.responseDTO;
    }
  };
}

export default DepartmentService;
