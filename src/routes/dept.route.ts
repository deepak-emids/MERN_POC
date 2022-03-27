import DepartmentController from '../controllers/department.controller';
import express, { IRouter } from 'express';
import { userAuth } from '../middlewares/auth.middleware';

class DepartmentControllerRoute {
  private DepartmentController = new DepartmentController();

  private router = express.Router();
  //   private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    /*
    route to add all DepartmentController
    */
    this.router.post('/', userAuth, this.DepartmentController.addDepartment);

    this.router.get('/', userAuth, this.DepartmentController.getAllDepartment);

    this.router.get('/:id', userAuth, this.DepartmentController.getDepartment);

    this.router.delete(
      '/:id',
      userAuth,
      this.DepartmentController.deleteDepartment
    );

    this.router.put(
      '/:id',
      userAuth,
      this.DepartmentController.updateDepartment
    );
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default DepartmentControllerRoute;