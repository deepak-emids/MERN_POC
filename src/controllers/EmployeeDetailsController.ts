import { Request, Response, NextFunction } from 'express';
import EmployeeDetailsService from '../services/EmployeeDetailsService';
import logger from '../config/logger';

class EmployeeDetailsController {
  public EmployeeDetailsService = new EmployeeDetailsService();

  public addEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.EmployeeDetailsService.addEmployeeDetails(
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
      const data: any =
        await this.EmployeeDetailsService.getAllEmployeeDetails();
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
      const data: any = await this.EmployeeDetailsService.getEmployeeDetails(
        req.params.id
      );
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
      const data: any = await this.EmployeeDetailsService.deleteEmployeeDetails(
        req.params.id
      );
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
      const data: any = await this.EmployeeDetailsService.updateEmployeeDetails(
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
