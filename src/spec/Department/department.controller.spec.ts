import httpMock from 'node-mocks-http';
import DepartmentService from '../../services/DepartmentService';

import DepartmentController from '../../controllers/DepartmentController';

let req: any, res: any, next: any;

beforeEach(() => {
  req = httpMock.createRequest({
    params: {
      id: 5
    }
  });
  res = httpMock.createResponse({});
  next = () => {};
});

let departmentService = new DepartmentService();

let departmentController = new DepartmentController(departmentService);

describe('testing Department controller', () => {
  it('when given a controller methods it should return type of method to be function', async () => {
    expect(typeof departmentController.addDepartment).toBe('function');
  });
});
