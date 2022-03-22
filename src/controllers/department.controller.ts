import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/user.interface';
import DepartmentService from '../services/department.service';
// import Response from '../types/Response';

class DepartmentController {
  public DepartmentService = new DepartmentService();

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
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

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.DepartmentService.getDepartment();
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

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
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
