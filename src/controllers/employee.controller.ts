import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/user.interface';
import EmployeeDetailsService from '../services/employee.service';
// import Response from '../types/Response';

class EmployeeDetailsController {
  public EmployeeDetailsService = new EmployeeDetailsService();

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public addEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.EmployeeDetailsService.addEmployeeDetails(
        req.body
      );
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.EmployeeDetailsService.getEmployeeDetails();
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public deleteEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.EmployeeDetailsService.deleteEmployeeDetails(
        req.params.id
      );
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
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
      res.status(HttpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };
}

export default EmployeeDetailsController;