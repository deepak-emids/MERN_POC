import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import DepartmentService from '../services/DepartmentService';

class DepartmentController {
  public DepartmentService = new DepartmentService();

  public addDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.DepartmentService.addDepartment(req.body);
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  public getAllDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.DepartmentService.getAllDepartment();
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  public getDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.DepartmentService.getDepartment(
        req.params.id
      );
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  public deleteDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.DepartmentService.deleteDepartment(
        req.params.id
      );
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  public updateDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.DepartmentService.updateDepartment(
        req.params.id,
        req.body
      );
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };
}

export default DepartmentController;
