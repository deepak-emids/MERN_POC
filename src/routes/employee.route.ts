import employeeController from '../controllers/employee.controller';
import express, { IRouter } from 'express';

class EmployeeRoute {
  private EmployeeController = new employeeController();

  private router = express.Router();
  //   private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    /*
    route to add all employee
    */
    this.router.post('/', this.EmployeeController.addEmployee);
    this.router.post('/work', this.EmployeeController.addEmpWork);
    this.router.get('/', this.EmployeeController.getEmployee);
    this.router.get('/work', this.EmployeeController.getEmpWork);
    this.router.delete('/:id', this.EmployeeController.deleteEmployee);
    this.router.delete('/work:id', this.EmployeeController.deleteEmpWork);
    this.router.put('/:id', this.EmployeeController.updateEmployee);
    this.router.put('/work:id', this.EmployeeController.updateEmpWork);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default EmployeeRoute;
