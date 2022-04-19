import httpMock from 'node-mocks-http';
import UserService from '../../services/UserService';
import UserController from '../../controllers/UserController';

let req: any, res: any, next: any;

const user = { email: 'newUser', password: 'pass123' };

beforeEach(() => {
  req = httpMock.createRequest({
    body: user
  });
  res = httpMock.createResponse({});
  next = () => {};
});

let userService = new UserService();

let userController = new UserController(userService);

describe.only('testing User controller', () => {
  it('when given a controller methods it should return type of method to be function', async () => {
    expect(typeof userController.loginUser).toBe('function');
  });
});
