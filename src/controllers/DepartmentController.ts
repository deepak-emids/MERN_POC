import { Request, Response, NextFunction } from 'express';
import DepartmentService from '../services/DepartmentService';
import logger from '../config/logger';
import ResponseModel from '../models/Response.model';

class DepartmentController {
  // public DepartmentService = new DepartmentService();
  private DepartmentService;
  constructor() {
    this.DepartmentService = new DepartmentService();
  }

  public addDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.DepartmentService.addDepartment(
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
        await this.DepartmentService.getAllDepartment();

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
      const data: ResponseModel = await this.DepartmentService.getDepartment(
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
      const data: ResponseModel = await this.DepartmentService.deleteDepartment(
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
      const data: ResponseModel = await this.DepartmentService.updateDepartment(
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
