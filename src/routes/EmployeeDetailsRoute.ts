import EmployeeDetailsController from '../controllers/EmployeeDetailsController';
import express, { IRouter } from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import UserValidator from '../validators/UserValidator';

class EmployeeDetailsRoute {
  private EmployeeDetailsController = new EmployeeDetailsController();
  private validator = new UserValidator();

  private router = express.Router();
  //   private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    /*
    route to add all EmployeeDetails
    */
    this.router.post(
      '/',
      userAuth,
      this.validator.newEmployee,
      this.EmployeeDetailsController.addEmployeeDetails
    );

    this.router.get(
      '/',
      userAuth,
      this.EmployeeDetailsController.getAllEmployeeDetails
    );

    this.router.get(
      '/:id',
      userAuth,
      this.EmployeeDetailsController.getEmployeeDetails
    );

    this.router.delete(
      '/:id',
      userAuth,
      this.EmployeeDetailsController.deleteEmployeeDetails
    );

    this.router.put(
      '/:id',
      userAuth,
      this.validator.updateEmployee,
      this.EmployeeDetailsController.updateEmployeeDetails
    );
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default EmployeeDetailsRoute;
