// import httpMock from 'node-mocks-http';
// import EmployeeService from '../../services/EmployeeService';

// import EmployeeController from '../../controllers/EmployeeController';

// let req: any, res: any, next: any;

// beforeEach(() => {
//   req = httpMock.createRequest({
//     params: {
//       id: 5
//     }
//   });
//   res = httpMock.createResponse({});
//   next = () => {};
// });

// let employeeService = new EmployeeService();

// let employeeController = new EmployeeController(employeeService);

// describe('testing employee controller', () => {
//   it('when given a controller methods it should return type of method to be function', async () => {
//     expect(typeof employeeController.addEmployee).toBe('function');
//   });

//   it('when given a controller method it should be defined', async () => {
//     expect(employeeController.addEmployee).toBeDefined();
//   });

//   it('when a give controller method is called it should call corresponding service method', async () => {
//     employeeService.addEmployee = jest.fn();
//     await employeeController.addEmployee(req, res, next);

//     expect(employeeService.addEmployee).toHaveBeenCalled();
//   });

//   it('when given a controller methods it should return type of method to be function', async () => {
//     expect(typeof employeeController.getAllEmployee).toBe('function');
//   });

//   it('when given a controller method it should be defined', async () => {
//     expect(employeeController.getAllEmployee).toBeDefined();
//   });

//   it('when a give controller method is called it should call corresponding service method', async () => {
//     employeeService.getAllEmployee = jest.fn();
//     await employeeController.getAllEmployee(req, res, next);

//     expect(employeeService.getAllEmployee).toHaveBeenCalled();
//   });

//   it('when given a controller method getEmployee it should return type of method to be function', async () => {
//     expect(typeof employeeController.getEmployee).toBe('function');
//   });

//   it('when given a controller method getEmployee it should be defined', async () => {
//     expect(employeeController.getEmployee).toBeDefined();
//   });

//   it('when a give controller  method getEmployee is called it should call corresponding service method', async () => {
//     employeeService.getEmployee = jest.fn();
//     await employeeController.getEmployee(req, res, next);

//     expect(employeeService.getEmployee).toHaveBeenCalled();
//   });

//   it('when a give controller getEmployee method is called it should call corresponding service method with parameters', async () => {
//     employeeService.getEmployee = jest.fn();
//     await employeeController.getEmployee(req, res, next);

//     expect(employeeService.getEmployee).toBeCalledWith(req.params.id);
//   });

//   it('when given a controller methods it should return type of method to be function', async () => {
//     employeeController.getEmployee = jest.fn();

//     expect(typeof employeeController.deleteEmployee).toBe('function');
//   });

//   it('when given a controller method it should be defined', async () => {
//     expect(employeeController.deleteEmployee).toBeDefined();
//   });

//   it('when a give controller method is called it should call corresponding service method', async () => {
//     employeeService.deleteEmployee = jest.fn();
//     await employeeController.deleteEmployee(req, res, next);

//     expect(employeeService.deleteEmployee).toHaveBeenCalled();
//   });

//   it('when a give controller method is called it should call corresponding service method with parameters', async () => {
//     employeeService.deleteEmployee = jest.fn();
//     await employeeController.deleteEmployee(req, res, next);

//     expect(employeeService.deleteEmployee).toBeCalledWith(req.params.id);
//   });
// });
