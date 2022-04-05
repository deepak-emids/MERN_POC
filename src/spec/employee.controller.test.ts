import httpMock from 'node-mocks-http';

import EmployeeDetailsController from '../controllers/EmployeeDetailsController';
let employee = new EmployeeDetailsController();

import EmployeeService from '../services/EmployeeDetailsService';
let employeeService = new EmployeeService();

jest.mock('../services/employee.service', () => {
  return {
    getAllEmployeeDetails: jest.fn()
  };
});

let req, res, next;

beforeEach(() => {
  req = httpMock.createRequest();
  res = httpMock.createResponse();
  next = null;
});

it.only('should return array of all employee', async () => {
  employeeService.getAllEmployeeDetails = jest
    .fn()
    .mockImplementation(() => '');

  await employee.getAllEmployeeDetails(req, res, next);

  expect(employeeService.getAllEmployeeDetails).toHaveBeenCalled();
});
