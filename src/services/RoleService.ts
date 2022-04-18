import 'reflect-metadata';
import { Role } from '../entity/Role';
import RoleData from '../models/RoleDetails';
import RoleRepository from '../repository/RoleRepository';
import Response from '../models/ResponseDTO';

class RoleService {
  private roleRepository;

  constructor(roleRepository?: RoleRepository) {
    this.roleRepository = roleRepository
      ? roleRepository
      : new RoleRepository();
  }

  public addRole = async (body: RoleData): Promise<Response> => {
    let responseDTO: Response;

    let query: { roleName: string } = { roleName: body.roleName };

    let result = await this.roleRepository.get(query);

    if (result) {
      responseDTO = {
        data: {},
        message: 'Role Already Exists',
        status: 201
      };
    } else {
      const role = new Role();

      role.roleName = body.roleName;

      let newRole = await this.roleRepository.add(role);

      responseDTO = {
        data: newRole,
        message: 'Role Data Added',
        status: 201
      };
    }

    return responseDTO;
  };

  public getAllRole = async (): Promise<Response> => {
    let responseDTO: Response;

    let result = await this.roleRepository.getAll();

    if (result.length > 0) {
      responseDTO = {
        data: result,
        message: 'Roles Fetched',
        status: 200
      };

      return responseDTO;
    } else {
      responseDTO = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

      return responseDTO;
    }
  };

  public getRole = async (id: number): Promise<Response> => {
    let responseDTO: Response;

    let query = { id: id };

    let result = await this.roleRepository.get(query);

    if (result) {
      responseDTO = {
        data: result,
        message: 'Role Fetched',
        status: 200
      };

      return responseDTO;
    } else {
      responseDTO = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

      return responseDTO;
    }
  };

  public updateRole = async (id: number, body: RoleData): Promise<Response> => {
    let responseDTO: Response;

    let newData = { ...body };

    let query = { id: id };

    let findRole = await this.roleRepository.get(query);
    if (findRole) {
      let result = await this.roleRepository.update(id, newData);

      if (result) {
        responseDTO = {
          data: result,
          message: 'Role Updated',
          status: 200
        };

        return responseDTO;
      }
    } else {
      responseDTO = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

      return responseDTO;
    }
  };

  public deleteRole = async (id: number): Promise<Response> => {
    let responseDTO: Response;
    let query = { id: id };

    let findRole = await this.roleRepository.get(query);
    if (findRole) {
      let result = await this.roleRepository.delete(id);

      if (result) {
        responseDTO = {
          data: result,
          message: 'Role Deleted',
          status: 200
        };

        return responseDTO;
      }
    } else {
      responseDTO = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

      return responseDTO;
    }
  };
}

export default RoleService;
