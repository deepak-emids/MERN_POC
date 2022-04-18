// import httpMock from 'node-mocks-http';
// import EmployeeDetailsService from '../../services/EmployeeService';
// import EmployeeRepository from '../../repository/EmployeeRepository';

// let req: any, res: any, next: any;
// const id = 1;

// beforeEach(() => {
//   req = httpMock.createRequest({
//     params: {
//       id: 1
//     }
//   });
//   res = httpMock.createResponse({});
//   next = () => {};
// });
// let employeeRepository = new EmployeeRepository();

// let employeeService = new EmployeeDetailsService(employeeRepository);

// describe('unit tests for employee service module', () => {
//   it('when given a controller method addEmployee it should return type of method to be function', async () => {
//     expect(typeof employeeService.addEmployee).toBe('function');
//   });

//   it('when given a controller method addEmployee it should be defined', async () => {
//     expect(employeeService.addEmployee).toBeDefined();
//   });

//   it('when given a controller method getAllEmployee it should return type of method to be function', async () => {
//     expect(typeof employeeService.getAllEmployee).toBe('function');
//   });

//   it('when given a controller method getAllEmployee it should be defined', async () => {
//     expect(employeeService.getAllEmployee).toBeDefined();
//   });

//   it('when a give controller method getAllEmployee is called it should call corresponding service method', async () => {
//     employeeRepository.getAll = jest.fn();
//     await employeeService.getAllEmployee();

//     expect(employeeRepository.getAll).toHaveBeenCalled();
//   });

//   it('when given a controller method getEmployee it should return type of method to be function', async () => {
//     expect(typeof employeeService.getEmployee).toBe('function');
//   });

//   it('when given a controller method getEmployee it should be defined', async () => {
//     expect(employeeService.getEmployee).toBeDefined();
//   });

//   it('when a give controller method getEmployee is called it should call corresponding service method', async () => {
//     employeeRepository.get = jest.fn();
//     await employeeService.getEmployee(id);

//     expect(employeeRepository.get).toHaveBeenCalled();
//   });

//   it('when a give controller method getEmployee is called it should call corresponding service method with parameters', async () => {
//     employeeRepository.get = jest.fn();
//     await employeeService.getEmployee(id);

//     expect(employeeRepository.get).toBeCalledWith({ id: id });
//   });

//   it('when given a controller method deleteEmployee it should return type of method to be function', async () => {
//     employeeRepository.get = jest.fn();

//     expect(typeof employeeService.deleteEmployee).toBe('function');
//   });

//   it('when given a controller method deleteEmployee it should be defined', async () => {
//     expect(employeeService.deleteEmployee).toBeDefined();
//   });

//   it('when a give controller method deleteEmployee is called it should call corresponding service method', async () => {
//     employeeRepository.delete = jest.fn();
//     await employeeService.deleteEmployee(id);

//     expect(employeeRepository.delete).toHaveBeenCalled();
//   });

//   it('when a give controller method deleteEmployee is called it should call corresponding service method with parameters', async () => {
//     employeeRepository.delete = jest.fn();
//     await employeeService.deleteEmployee(id);

//     expect(employeeRepository.delete).toBeCalledWith({ id: 5 });
//   });
// });
