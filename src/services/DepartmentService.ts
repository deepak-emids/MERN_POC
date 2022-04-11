import 'reflect-metadata';
import { Department } from '../entity/department';
import DepartmentData from '../models/Department.model';
import DepartmentRepository from '../repository/DepartmentRepository';
import Response from '../models/Response.model';

let repo = new DepartmentRepository();

class DepartmentService {
  // private departmentService;
  // constructor() {
  //   this.departmentService = new DepartmentService();
  // }
  /*
  add emp
  */
  public addDepartment = async (body: DepartmentData): Promise<Response> => {
    let response = new Response();

    let query: { departmentName: string } = {
      departmentName: body.departmentName
    };
    let result = await repo.get(query);

    if (result) {
      response = {
        data: {},
        message: 'Department Already Exists',
        status: 409
      };
    } else {
      const dept = new Department();

      dept.departmentName = body.departmentName;

      let newDepartment = await repo.add(dept);

      response = {
        data: newDepartment,
        message: 'Department Added',
        status: 201
      };
    }

    return response;
  };

  /*
  get Departments
  */
  public getAllDepartment = async (): Promise<Response> => {
    let response = new Response();

    let result = await repo.getAll();

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

  /*
  get Departments
  */
  public getDepartment = async (id: number): Promise<Response> => {
    let response = new Response();

    let query = { id: id };

    let result = await repo.get(query);

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

  /*
  update Department
  */
  public updateDepartment = async (id: number, body: DepartmentData) => {
    let response = new Response();

    let newData = { ...body };

    let query: { id: number } = {
      id: id
    };

    let result = await repo.get(query);

    if (result) {
      let result = await repo.update(id, newData);

      response = {
        data: result,
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

  /*
  delete Department work details
  */
  public deleteDepartment = async (id: number) => {
    let response = new Response();

    let query: { id: number } = {
      id: id
    };

    let result = await repo.get(query);

    if (result) {
      let result = await repo.delete(id);

      response = {
        data: result,
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
