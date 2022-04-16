import httpMock from 'node-mocks-http';
import EmployeeDetailsService from '../../services/EmployeeService';

import EmployeeDetailsController from '../../controllers/EmployeeController';

describe('testing employee controller', () => {
  let employeeService = new EmployeeDetailsService();

  let employeeController = new EmployeeDetailsController(employeeService);

  let req: any, res: any, next: any;

  beforeEach(() => {
    req = httpMock.createRequest({
      params: {
        id: 5
      }
    });
    res = httpMock.createResponse({});
    next = () => {};
  });

  it.only('when given a controller methods it should return type of method to be function', async () => {
    employeeService.getAllEmployee = jest.fn();

    expect(typeof employeeService.getAllEmployee).toBe('function');
  });

  it.only('when given a controller method it should be defined', async () => {
    expect(employeeService.getAllEmployee).toBeDefined();
  });

  it.only('when a give controller method is called it should call corresponding service method', async () => {
    employeeService.getAllEmployee = jest.fn();
    await employeeController.getAllEmployee(req, res, next);

    expect(employeeService.getAllEmployee).toHaveBeenCalled();
  });

  it.only('when given a controller methods it should return type of method to be function', async () => {
    employeeService.getEmployee = jest.fn();

    expect(typeof employeeService.getEmployee).toBe('function');
  });

  it.only('when given a controller method it should be defined', async () => {
    expect(employeeService.getEmployee).toBeDefined();
  });

  it.only('when a give controller method is called it should call corresponding service method', async () => {
    employeeService.getEmployee = jest.fn();
    await employeeController.getEmployee(req, res, next);

    expect(employeeService.getEmployee).toHaveBeenCalled();
  });

  it.only('when a give controller method is called it should call corresponding service method', async () => {
    employeeService.getEmployee = jest.fn();
    await employeeController.getEmployee(req, res, next);

    expect(employeeService.getEmployee).toBeCalledWith(req.params.id);
  });
});
