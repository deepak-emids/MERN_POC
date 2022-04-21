import 'reflect-metadata';
import { Role } from '../entity/Role';
import RoleData from '../models/RoleDetails';
import RoleRepository from '../repository/RoleRepository';
import Response from '../models/Response';
import HttpStatus from 'http-status-codes';
import Message from '../utils/RoleMessage.json';

class RoleService {
  private roleRepository;
  private responseDTO;

  constructor(roleRepository?: RoleRepository) {
    this.roleRepository = roleRepository
      ? roleRepository
      : new RoleRepository();
    this.responseDTO = new Response();
  }

  public addRole = async (body: RoleData): Promise<Response> => {
    let query: { roleName: string } = { roleName: body.roleName };

    let result = await this.roleRepository.get(query);

    if (result) {
      this.responseDTO = {
        data: {},
        message: Message.CONFLICT,
        status: HttpStatus.CONFLICT
      };
    } else {
      const role = new Role();

      role.roleName = body.roleName;

      let newRole = await this.roleRepository.add(role);

      this.responseDTO = {
        data: newRole,
        message: Message.CREATED,
        status: HttpStatus.CREATED
      };
    }

    return this.responseDTO;
  };

  public getAllRole = async (): Promise<Response> => {
    let result = await this.roleRepository.getAll();

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

  public getRole = async (id: number): Promise<Response> => {
    let query = { id: id };

    let result = await this.roleRepository.get(query);

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

  public updateRole = async (id: number, body: RoleData): Promise<Response> => {
    let newData = { ...body };

    let query = { id: id };

    let findRole = await this.roleRepository.get(query);
    if (findRole) {
      let result = await this.roleRepository.update(id, newData);

      this.responseDTO = {
        data: result,
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

  public deleteRole = async (id: number): Promise<Response> => {
    let query = { id: id };

    let findRole = await this.roleRepository.get(query);
    if (findRole) {
      let result = await this.roleRepository.delete(findRole);

      this.responseDTO = {
        data: result,
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

export default RoleService;
