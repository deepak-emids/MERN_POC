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

    const dept = new Department();

    //assign values
    dept.departmentName = body.departmentName;

    let find = await repo.add(dept);

    //response object
    response.data = find;
    response.message = 'Department Added';
    response.status = 201;

    //return saved data
    return response;
  };

  /*
  get Departments
  */
  public getAllDepartment = async (): Promise<Response> => {
    let response = new Response();

    let result = await repo.getAll();

    if (result.length > 0) {
      response.data = result;
      response.message = 'Departments Fetched';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Department Not Found';
      response.status = 404;

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
      response.data = result;
      response.message = 'Department Fetched';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Department Not Found';
      response.status = 404;

      return response;
      // new Response({}, 'department not found', 404);
    }
  };

  /*
  update Department
  */
  public updateDepartment = async (id: number, body: DepartmentData) => {
    let response = new Response();

    let details: DepartmentData = await repo.get(id);

    let newData = {
      id: id,
      departmentName: body.departmentName
        ? body.departmentName
        : details.departmentName
    };

    let result = await repository.update(id, newData);

    if (result) {
      response.data = result;
      response.message = 'Department Updated';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Department Not Found';
      response.status = 404;

      return response;
    }
  };

  /*
  delete Department work details
  */
  public deleteDepartment = async (id: number) => {
    let response = new Response();

    let result = await repo.delete(id);

    if (result) {
      response.data = result;
      response.message = 'Department deleted';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Department Not Found';
      response.status = 404;

      return response;
    }
  };
}

export default DepartmentService;
