import httpMock from 'node-mocks-http';
import EmployeeDetailsService from '../../services/EmployeeService';

import EmployeeDetailsController from '../../controllers/EmployeeController';

describe('testing employee controller', () => {
  let employeeService = new EmployeeDetailsService();

  let employeeController = new EmployeeDetailsController(employeeService);

  let req: any, res: any, next: any;

  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({});
    next = () => {};
  });

  it.only('when given a controller methods it should return type of method to be function', async () => {
    employeeService.getAllEmployee = jest.fn();

    expect(typeof employeeService.getAllEmployee).toBe('function');
  });
});
