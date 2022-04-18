import httpMock from 'node-mocks-http';
import RoleService from '../../services/RoleService';
import RoleController from '../../controllers/RoleController';

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

let roleService = new RoleService();

let roleController = new RoleController(roleService);

describe('testing role controller', () => {
  it('when given a controller methods it should return type of method to be function', async () => {
    expect(typeof roleController.addRole).toBe('function');
  });
});
