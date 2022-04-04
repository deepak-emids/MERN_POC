import 'reflect-metadata';
import { Department } from '../entity/department';
import DepartmentData from '../models/Department.model';
import Repository from '../repository/repository';
import Response from '../models/response.model';

let response = new Response();
let repository = new Repository();

class DepartmentService {
  /*
  add emp
  */
  public addDepartment = async (body: DepartmentData): Promise<Response> => {
    const dept = new Department();

    //assign values
    dept.departmentName = body.departmentName;

    let find = await repository.add(Department, dept);

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
    let result = await repository.getAll(Department);

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
    let query = { id: id };

    let result = await repository.get(Department, query);

    if (result.length > 0) {
      response.data = result;
      response.message = 'Department Fetched';
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
  update Department
  */
  public updateDepartment = async (id: number, body: DepartmentData) => {
    let details: DepartmentData = await repository.get(Department, id);

    let newData = {
      id: id,
      departmentName: body.departmentName
        ? body.departmentName
        : details.departmentName
    };

    let result = await repository.update(Department, id, newData);

    if (result.length > 0) {
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

  /*
  delete Department work details
  */
  public deleteDepartment = async (id) => {
    let result = await repository.delete(Department, id);

    if (result.length > 0) {
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
