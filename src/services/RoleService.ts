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
      response = {
        data: {},
        message: 'Role Already Exists',
        status: 201
      };
    } else {
      const role = new Role();

      role.roleName = body.roleName;

      let newRole = await repo.add(role);

      response = {
        data: newRole,
        message: 'Role Data Added',
        status: 201
      };
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
      response = {
        data: result,
        message: 'Roles Fetched',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

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
      response = {
        data: result,
        message: 'Role Fetched',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

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
      response = {
        data: result,
        message: 'Role Updated',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

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
      response = {
        data: result,
        message: 'Role Deleted',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

      return response;
    }
  };
}

export default RoleService;
