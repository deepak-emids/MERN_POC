import httpMock from 'node-mocks-http';
import EmployeeDetailsService from '../../services/EmployeeService';

import EmployeeRepository from '../../repository/EmployeeRepository';

let req: any, res: any, next: any;
const id = 5;

beforeEach(() => {
  req = httpMock.createRequest({
    params: {
      id: 5
    }
  });
  res = httpMock.createResponse({});
  next = () => {};
});
let employeeRepository = new EmployeeRepository();

let employeeService = new EmployeeDetailsService(employeeRepository);

describe('unit tests for employee service module', () => {
  it('when given a controller method addEmployee it should return type of method to be function', async () => {
    expect(typeof employeeService.addEmployee).toBe('function');
  });
});
