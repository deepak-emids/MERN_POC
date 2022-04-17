import httpMock from 'node-mocks-http';
import DepartmentRepository from '../../repository/DepartmentRepository';

import DepartmentService from '../../services/DepartmentService';

let req: any, res: any, next: any;
const newDepartment = { departmentName: 'testDepartment' };
const id: number = 5;

beforeEach(() => {
  req = httpMock.createRequest({
    params: {
      id: 5
    }
  });
  res = httpMock.createResponse({});
  next = () => {};
});

let departmentRepository = new DepartmentRepository();

let departmentService = new DepartmentService(departmentRepository);

describe('unit tests for employee service module', () => {
  it('when given a service method addDepartment it should return type of method to be function', async () => {
    expect(typeof departmentService.addDepartment).toBe('function');
  });
});
