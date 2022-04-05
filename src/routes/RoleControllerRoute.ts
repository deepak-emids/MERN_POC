import RoleController from '../controllers/RoleController';
import express, { IRouter } from 'express';
import { userAuth } from '../middlewares/auth.middleware';

class RoleControllerRoute {
  private RoleController = new RoleController();

  private router = express.Router();
  //   private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    /*
    route to add all RoleController
    */
    this.router.post('/', userAuth, this.RoleController.addRole);

    this.router.get('/', userAuth, this.RoleController.getAllRole);

    this.router.get('/:id', userAuth, this.RoleController.getRole);

    this.router.delete('/:id', userAuth, this.RoleController.deleteRole);

    this.router.put('/:id', userAuth, this.RoleController.updateRole);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default RoleControllerRoute;
