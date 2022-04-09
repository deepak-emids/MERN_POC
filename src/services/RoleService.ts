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

    let query: { roleName: string } = { roleName: body.roleName };

    let result = await repo.get(query);

    if (result) {
      response.data = {};
      response.message = 'Role Already Exists';
      response.status = 201;
    } else {
      const role = new Role();

      role.roleName = body.roleName;

      let newRole = await repo.add(role);

      response.data = newRole;
      response.message = 'Role Data Added';
      response.status = 201;
    }

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

    let newData = { ...body };

    let result = await repo.update(id, newData);

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
