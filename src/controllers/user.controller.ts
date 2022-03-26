/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import userService from '../services/user.service';

import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/user.model';
import { ILoginUser } from '../models/loginReq.model';
// class UserController
  public UserService = new userService();

  /**
   * Controller to login user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const responseData: ILoginUser = await this.UserService.loginUser(
        req.body
      );
      res.status(200).json({
        code: responseData.code,
        data: responseData.data,
        message: responseData.message
      });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
