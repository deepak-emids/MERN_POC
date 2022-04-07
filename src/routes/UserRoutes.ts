import express, { IRouter } from 'express';
import userController from '../controllers/UserController';
import UserValidator from '../validators/UserValidator';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private validator = new UserValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all users
    this.router.post(
      '/login',
      this.validator.loginUser,
      this.UserController.loginUser
    );
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
