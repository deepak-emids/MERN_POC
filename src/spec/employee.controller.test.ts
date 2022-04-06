// import httpMock from 'node-mocks-http';

// import EmployeeDetailsController from '../controllers/EmployeeDetailsController';

// import EmployeeDetailsService from '../services/EmployeeDetailsService';

// jest.mock('../services/EmployeeDetailsService', () => {
//   return {
//     getAllEmployeeDetails: jest.fn()
//   };
// });

// let employeeService = new EmployeeDetailsService();

// let employee = new EmployeeDetailsController();

// let req, res, next;

// beforeEach(() => {
//   req = httpMock.createRequest();
//   res = httpMock.createResponse();
//   next = null;
// });

// it.only('should return array of all employee', async () => {
//   employeeService.getAllEmployeeDetails = jest
//     .fn()
//     .mockImplementation(() => '');

//   await employee.getAllEmployeeDetails(req, res, next);

//   expect(employeeService.getAllEmployeeDetails).toBeDefined();
// });
