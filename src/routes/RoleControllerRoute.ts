import RoleController from '../controllers/RoleController';
import express, { IRouter } from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import UserValidator from '../validators/UserValidator';

class RoleControllerRoute {
  private RoleController = new RoleController();

  private router = express.Router();
  private validator = new UserValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    /*
    route to add all RoleController
    */
    this.router.post(
      '/',
      userAuth,
      this.validator.roleValidator,
      this.RoleController.addRole
    );

    this.router.get('/', userAuth, this.RoleController.getAllRole);

    this.router.get('/:id', userAuth, this.RoleController.getRole);

    this.router.delete('/:id', userAuth, this.RoleController.deleteRole);

    this.router.put(
      '/:id',
      this.validator.updateRole,
      userAuth,
      this.RoleController.updateRole
    );
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default RoleControllerRoute;
