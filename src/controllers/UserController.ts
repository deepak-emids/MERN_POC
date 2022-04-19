import UserService from '../services/UserService';
import { Request, Response, NextFunction } from 'express';
import ResponseModel from '../models/Response';

class UserController {
  private userService;
  constructor(userService?: UserService) {
    this.userService = userService ? userService : new UserService();
  }

  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: ResponseModel = await this.userService.loginUser(req.body);
      res.status(data.status).send(data);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
