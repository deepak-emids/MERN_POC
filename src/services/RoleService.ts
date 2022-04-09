import 'reflect-metadata';
import { Role } from '../entity/role';
import RoleData from '../models/RoleDetails';
import RoleRepository from '../repository/RoleRepository';
import Response from '../models/Response.model';

let repo = new RoleRepository();

class RoleService {
  /*
  add emp
  */
  public addRole = async (body: RoleData): Promise<Response> => {
    let response = new Response();

    const role = new Role();

    //assign values
    role.roleName = body.roleName;

    let find = await repo.add(role);

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
    let response = new Response();

    let result = await repo.getAll();

    if (result.length > 0) {
      response.data = result;
      response.message = 'Roles Fetched';
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
    let response = new Response();

    let query = { id: id };

    let result = await repo.get(query);

    if (result) {
      response.data = result;
      response.message = 'Role Fetched';
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
    let response = new Response();

    let details: RoleData = await repo.get(id);

    let newData = {
      roleName: body.roleName ? body.roleName : details.roleName
    };

    let result = await repo.update(Role, id, newData);

    if (result) {
      response.data = result;
      response.message = 'Role Updated';
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
    let response = new Response();

    let result = await repo.delete(id);

    if (result) {
      response.data = result;
      response.message = 'Role Deleted';
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
