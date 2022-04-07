import httpMock from 'node-mocks-http';

import EmployeeDetailsController from '../controllers/EmployeeDetailsController';

import EmployeeDetailsService from '../services/EmployeeDetailsService';

describe('testing employee controller', () => {
  jest.mock('../services/EmployeeDetailsService', () => {
    return {
      getAllEmployeeDetails: jest.fn()
    };
  });

  let employeeService = new EmployeeDetailsService();

  let employeeController = new EmployeeDetailsController();

  let req: any, res: any, next: any;

  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({});
    next = null;
  });

  it.only('should call getAllEmployee from service', async () => {
    employeeService.getAllEmployeeDetails = jest
      .fn()
      .mockImplementation(() => {});

    await employeeController.getAllEmployeeDetails(req, res, next);

    expect(employeeService.getAllEmployeeDetails).toHaveBeenCalled();
  });
});
