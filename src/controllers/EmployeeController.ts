import { Request, Response, NextFunction } from 'express';
import EmployeeDetailsService from '../services/EmployeeDetailsService';
import logger from '../config/logger';
import ResponseModel from '../models/Response.model';

class EmployeeDetailsController {
  private employeeDetailsService;
  constructor(employeeDetailsService?: EmployeeDetailsService) {
    this.employeeDetailsService = employeeDetailsService
      ? employeeDetailsService
      : new EmployeeDetailsService();
  }
  public addEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.employeeDetailsService.addEmployee(
        req.body
      );

      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public getAllEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel =
        await this.employeeDetailsService.getAllEmployeeDetails();
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  public getEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel =
        await this.employeeDetailsService.getEmployeeDetails(req.params.id);
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);

      next(error);
    }
  };

  public deleteEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel =
        await this.employeeDetailsService.deleteEmployeeDetails(req.params.id);
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);

      next(error);
    }
  };

  public updateEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel =
        await this.employeeDetailsService.updateEmployeeDetails(
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

export default EmployeeDetailsController;
