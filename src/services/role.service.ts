import 'reflect-metadata';
import { Role } from '../entity/role';
import RoleData from '../models/role.model';
import Repository from '../repository/repository';
import Response from '../models/response.model';

let response = new Response();
let repository = new Repository();

class RoleService {
  /*
  add emp
  */
  public addRole = async (body: RoleData): Promise<Response> => {
    const role = new Role();

    //assign values
    role.roleName = body.roleName;

    let find = await repository.add(Role, role);

    //response object
    response.data = find;
    response.message = 'Role Data Added';
    response.status = 201;

    //return saved data
    return response;
  };

  /*
  get Roles
  */
  public getAllRole = async (): Promise<Response> => {
    let result = await repository.getAll(Role);

    if (result.length > 0) {
      response.data = result;
      response.message = 'Role deleted';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Role Not Found';
      response.status = 404;

      return response;
    }
  };

  /*
  get Roles
  */
  public getRole = async (id: number): Promise<Response> => {
    let query = { id: id };

    let result = await repository.get(Role, query);

    if (result.length > 0) {
      response.data = result;
      response.message = 'Role deleted';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Role Not Found';
      response.status = 404;

      return response;
    }
  };

  /*
  update Role
  */
  public updateRole = async (id: number, body: RoleData) => {
    let details: RoleData = await repository.get(Role, id);

    let newData = {
      roleName: body.roleName ? body.roleName : details.roleName
    };

    let result = await repository.update(Role, id, newData);

    if (result.length > 0) {
      response.data = result;
      response.message = 'Role updated';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Role Not Found';
      response.status = 404;

      return response;
    }
  };

  /*
  delete Role work details
  */
  public deleteRole = async (id: number) => {
    let result = await repository.delete(Role, id);

    if (result.length > 0) {
      response.data = result;
      response.message = 'Role deleted';
      response.status = 200;

      return response;
    } else {
      response.data = {};
      response.message = 'Role Not Found';
      response.status = 404;

      return response;
    }
  };
}

export default RoleService;
