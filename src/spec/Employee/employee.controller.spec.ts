import httpMock from 'node-mocks-http';
import EmployeeDetailsService from '../../services/EmployeeService';

import EmployeeDetailsController from '../../controllers/EmployeeController';

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

let employeeService = new EmployeeDetailsService();

let employeeController = new EmployeeDetailsController(employeeService);

describe('testing employee controller', () => {
  it.only('when given a controller methods it should return type of method to be function', async () => {
    employeeService.addEmployee = jest.fn();

    expect(typeof employeeController.addEmployee).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(employeeController.addEmployee).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    employeeService.addEmployee = jest.fn();
    await employeeController.addEmployee(req, res, next);

    expect(employeeService.addEmployee).toHaveBeenCalled();
  });

  it('when given a controller methods it should return type of method to be function', async () => {
    employeeController.getAllEmployee = jest.fn();

    expect(typeof employeeController.getAllEmployee).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(employeeController.getAllEmployee).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    employeeService.getAllEmployee = jest.fn();
    await employeeController.getAllEmployee(req, res, next);

    expect(employeeService.getAllEmployee).toHaveBeenCalled();
  });

  it('when given a controller methods it should return type of method to be function', async () => {
    employeeController.getEmployee = jest.fn();

    expect(typeof employeeController.getEmployee).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(employeeController.getEmployee).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    employeeService.getEmployee = jest.fn();
    await employeeController.getEmployee(req, res, next);

    expect(employeeService.getEmployee).toHaveBeenCalled();
  });

  it('when a give controller method is called it should call corresponding service method with parameters', async () => {
    employeeService.getEmployee = jest.fn();
    await employeeController.getEmployee(req, res, next);

    expect(employeeService.getEmployee).toBeCalledWith(req.params.id);
  });

  it('when given a controller methods it should return type of method to be function', async () => {
    employeeController.getEmployee = jest.fn();

    expect(typeof employeeController.getEmployee).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(employeeController.deleteEmployee).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    employeeService.deleteEmployee = jest.fn();
    await employeeController.deleteEmployee(req, res, next);

    expect(employeeService.deleteEmployee).toHaveBeenCalled();
  });

  it('when a give controller method is called it should call corresponding service method with parameters', async () => {
    employeeService.deleteEmployee = jest.fn();
    await employeeController.deleteEmployee(req, res, next);

    expect(employeeService.deleteEmployee).toBeCalledWith(req.params.id);
  });
});
