import { Request, Response, NextFunction } from 'express';
import RoleService from '../services/RoleService';
import logger from '../config/logger';
import ResponseModel from '../models/ResponseDTO';

class RoleController {
  private roleService;
  constructor(roleService?: RoleService) {
    this.roleService = roleService ? roleService : new RoleService();
  }
  public addRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.roleService.addRole(req.body);
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public getAllRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.roleService.getAllRole();
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public getRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.roleService.getRole(req.params.id);
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public deleteRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.roleService.deleteRole(
        req.params.id
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public updateRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.roleService.updateRole(
        req.params.id,
        req.body
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };
}

export default RoleController;
