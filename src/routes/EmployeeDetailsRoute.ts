import EmployeeDetailsController from '../controllers/EmployeeController';
import express, { IRouter } from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import UserValidator from '../validators/UserValidator';

class EmployeeDetailsRoute {
  private EmployeeDetailsController = new EmployeeDetailsController();

  private validator = new UserValidator();

  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {
    this.router.post(
      '/',
      userAuth,
      this.validator.newEmployee,
      this.EmployeeDetailsController.addEmployee
    );

    this.router.get(
      '/',
      userAuth,
      this.EmployeeDetailsController.getAllEmployee
    );

    this.router.get(
      '/:id',
      userAuth,
      this.EmployeeDetailsController.getEmployee
    );

    this.router.delete(
      '/:id',
      userAuth,
      this.EmployeeDetailsController.deleteEmployee
    );

    this.router.put(
      '/:id',
      userAuth,
      this.validator.updateEmployee,
      this.EmployeeDetailsController.updateEmployee
    );
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default EmployeeDetailsRoute;
