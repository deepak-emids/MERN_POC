// import { Test, TestingModule } from '@nestjs/testing';
// import EmployeeDetailsController from '../controllers/EmployeeDetailsController';
// import EmployeeDetailsService from '../services/EmployeeDetailsService';

// import httpMock from 'node-mocks-http';
// let req: any, res: any, next: any;

// describe('testing employee controller', () => {
//   let employeeController: EmployeeDetailsController;
//   let employeeService: EmployeeDetailsService;

//   const mockService = {
//     getAll: jest.fn()
//   };

//   beforeAll(async () => {
//     req = httpMock.createRequest({});
//     res = httpMock.createResponse({});
//     next = null;

//     // const ApiServiceProvider = {
//     //   provide: EmployeeDetailsService,
//     //   useFactory: () => ({ getAllEmployees: jest.fn(() => ['hi']) })
//     // };

//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [EmployeeDetailsController],
//       providers: [EmployeeDetailsService]
//     })
//       .overrideProvider(EmployeeDetailsService)
//       .useValue(mockService)
//       .compile();

//     employeeController = app.get<EmployeeDetailsController>(
//       EmployeeDetailsController
//     );
//     employeeService = app.get<EmployeeDetailsService>(EmployeeDetailsService);
//   });

//   it.only('should call getAllEmployee from service', async () => {
//     await employeeController.getAllEmployeeDetails();
//     // console.log(res2);
//     expect(mockService.getAll).toHaveBeenCalled();
//   });
// });
