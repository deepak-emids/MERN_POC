import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import RoleService from '../services/RoleService';

class RoleController {
  public RoleService = new RoleService();

  public addRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.RoleService.addRole(req.body);
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  public getAllRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.RoleService.getAllRole();
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  public getRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.RoleService.getRole(req.params.id);
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  public deleteRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.RoleService.deleteRole(req.params.id);
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  public updateRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.RoleService.updateRole(
        req.params.id,
        req.body
      );
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };
}

export default RoleController;
