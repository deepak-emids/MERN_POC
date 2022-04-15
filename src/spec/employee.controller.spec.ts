import httpMock from 'node-mocks-http';
import EmployeeDetailsService from '../services/EmployeeDetailsService';

import EmployeeDetailsController from '../controllers/EmployeeDetailsController';

describe('testing employee controller', () => {
  jest.mock('../services/EmployeeDetailsService', () => {
    return {
      getAllEmployeeDetails: jest.fn()
    };
  });
  let employeeService = new EmployeeDetailsService();

  let employeeController = new EmployeeDetailsController(employeeService);

  let req: any, res: any, next: any;

  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({});
    next = () => {};
  });

  it.only('should call getAllEmployee from service', async () => {
    employeeService.getAllEmployeeDetails = jest
      .fn()
      .mockImplementation(() => {});

    await employeeController.getAllEmployeeDetails(req, res, next);
    expect(employeeService.getAllEmployeeDetails).toHaveBeenCalled();
  });
});
