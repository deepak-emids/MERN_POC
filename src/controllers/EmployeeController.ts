import { Request, Response, NextFunction } from 'express';
import EmployeeService from '../services/EmployeeService';
import logger from '../config/logger';
import ResponseModel from '../models/Response';

class EmployeeController {
  private employeeService;
  constructor(employeeService?: EmployeeService) {
    this.employeeService = employeeService
      ? employeeService
      : new EmployeeService();
  }
  public addEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.employeeService.addEmployee(
        req.body
      );

      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public getAllEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.employeeService.getAllEmployee();
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public getEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.employeeService.getEmployee(
        req.params.id
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);

      next(error);
    }
  };

  public deleteEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.employeeService.deleteEmployee(
        req.params.id
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);

      next(error);
    }
  };

  public updateEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.employeeService.updateEmployee(
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

export default EmployeeController;
