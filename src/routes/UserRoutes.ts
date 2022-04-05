import express, { IRouter } from 'express';
import userController from '../controllers/UserController';
import userValidator from '../validators/UserValidator';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all users
    this.router.post('/login', this.UserController.loginUser);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
