import { Request, Response, NextFunction } from 'express';
import DepartmentService from '../services/DepartmentService';
import logger from '../config/logger';
import ResponseModel from '../models/Response.model';

class DepartmentController {
  private departmentService;
  constructor(departmentService?: DepartmentService) {
    this.departmentService = departmentService
      ? departmentService
      : new DepartmentService();
  }
  public addDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.departmentService.addDepartment(
        req.body
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public getAllDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel =
        await this.departmentService.getAllDepartment();

      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public getDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.departmentService.getDepartment(
        req.params.id
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public deleteDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.departmentService.deleteDepartment(
        req.params.id
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public updateDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.departmentService.updateDepartment(
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

export default DepartmentController;
