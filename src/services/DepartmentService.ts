import 'reflect-metadata';
import { Department } from '../entity/Department';
import DepartmentData from '../models/DepartmentDetails';
import DepartmentRepository from '../repository/DepartmentRepository';
import Response from '../models/Response.model';

class DepartmentService {
  private departmentRepository;
  constructor(departmentRepository?: DepartmentRepository) {
    this.departmentRepository = departmentRepository
      ? departmentRepository
      : new DepartmentRepository();
  }

  public addDepartment = async (body: DepartmentData): Promise<Response> => {
    let response = new Response();

    let query: { departmentName: string } = {
      departmentName: body.departmentName
    };
    let result = await this.departmentRepository.get(query);

    if (result) {
      response = {
        data: {},
        message: 'Department Already Exists',
        status: 409
      };
    } else {
      const dept = new Department();

      dept.departmentName = body.departmentName;

      let newDepartment = await this.departmentRepository.add(dept);

      response = {
        data: newDepartment,
        message: 'Department Added',
        status: 201
      };
    }

    return response;
  };

  public getAllDepartment = async (): Promise<Response> => {
    let response = new Response();

    let result: [] = await this.departmentRepository.getAll();

    if (result.length > 0) {
      response = {
        data: result,
        message: 'Departments Fetched',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Department Not Found',
        status: 404
      };

      return response;
    }
  };

  public getDepartment = async (id: number): Promise<Response> => {
    let response = new Response();

    let query = { id: id };

    let result = await this.departmentRepository.get(query);

    if (result) {
      response = {
        data: result,
        message: 'Department Fetched',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Department Not Found',
        status: 404
      };

      return response;
    }
  };

  public updateDepartment = async (id: number, body: DepartmentData) => {
    let response = new Response();

    let newData = { ...body };

    let query: { id: number } = {
      id: id
    };

    let result = await this.departmentRepository.get(query);

    if (result) {
      let update = await this.departmentRepository.update(id, newData);

      response = {
        data: update,
        message: 'Department Updated',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Department Not Found',
        status: 404
      };

      return response;
    }
  };

  public deleteDepartment = async (id: number) => {
    let response = new Response();

    let query: { id: number } = {
      id: id
    };

    let result = await this.departmentRepository.get(query);

    if (result) {
      let update = await this.departmentRepository.delete(id);

      response = {
        data: update,
        message: 'Department deleted',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Department Not Found',
        status: 404
      };

      return response;
    }
  };
}

export default DepartmentService;
