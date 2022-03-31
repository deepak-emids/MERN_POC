import { Test, TestingModule } from '@nestjs/testing';
import EmployeeController from './employee.controller';

//mock test
import EmployeeService from '../services/employee.service';

EmployeeService.prototype.getAllEmployeeDetails = jest
  .fn()
  .getMockImplementation();

let employeeService = new EmployeeService();
//----------------------------------------------

let employeeController = new EmployeeController();

const mockRequest = (): any => {
  return {};
};
const mockNext = (): any => {
  return {};
};
const mockResponse = (): any => {
  return {};
};

describe('AppController', () => {
  let appController: typeof employeeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [EmployeeService]
    }).compile();

    appController = app.get<typeof employeeController>(EmployeeController);
  });

  describe('root', () => {
    it('should call test fn', () => {
      appController.getAllEmployeeDetails();
      expect(employeeService.getAllEmployeeDetails).toHaveBeenCalled();
    });
  });
});
