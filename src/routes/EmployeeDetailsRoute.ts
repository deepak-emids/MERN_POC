import EmployeeController from '../controllers/employeeController';
import express, { IRouter } from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import UserValidator from '../validators/UserValidator';

class EmployeeDetailsRoute {
  private employeeController;

  constructor(employeeController?: EmployeeController) {
    this.employeeController = employeeController
      ? employeeController
      : new EmployeeController();
    this.routes();
  }

  private validator = new UserValidator();

  private router = express.Router();

  private routes = () => {
    this.router.post(
      '/',
      userAuth,
      this.validator.newEmployee,
      this.employeeController.addEmployee
    );

    this.router.get('/', userAuth, this.employeeController.getAllEmployee);

    this.router.get('/:id', userAuth, this.employeeController.getEmployee);

    this.router.delete(
      '/:id',
      userAuth,
      this.employeeController.deleteEmployee
    );

    this.router.put(
      '/:id',
      userAuth,
      this.validator.updateEmployee,
      this.employeeController.updateEmployee
    );
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default EmployeeDetailsRoute;
