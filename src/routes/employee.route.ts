import EmployeeDetailsController from '../controllers/employee.controller';
import express, { IRouter } from 'express';
import { userAuth } from '../middlewares/auth.middleware';

class EmployeeDetailsRoute {
  private EmployeeDetailsController = new EmployeeDetailsController();

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
      this.EmployeeDetailsController.addEmployeeDetails
    );

    this.router.get(
      '/',
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
      this.EmployeeDetailsController.updateEmployeeDetails
    );
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default EmployeeDetailsRoute;
