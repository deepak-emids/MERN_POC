import httpMock from 'node-mocks-http';

import EmployeeDetailsController from '../controllers/employee.controller';
let employee = new EmployeeDetailsController();

import EmployeeService from '../services/employee.service';
let employeeService = new EmployeeService();

employeeService.getAllEmployeeDetails = jest.fn().mockResolvedValue([]);

let req, res, next;

beforeEach(() => {
  req = httpMock.createRequest();
  res = httpMock.createResponse();
  next = null;
});

//get all employee
it.only('should return array of all employee', async () => {
  await employee.getAllEmployeeDetails(req, res, next);

  expect(employeeService.getAllEmployeeDetails).toHaveBeenCalled();
});
