import userService from '../services/UserService';
import { Request, Response, NextFunction } from 'express';
import ResponseModel from '../models/ResponseDTO';

class UserController {
  public UserService = new userService();

  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.UserService.loginUser(req.body);
      res.status(data.status).send(data);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
