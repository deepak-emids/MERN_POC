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

  it('when given a controller method it should be defined', async () => {
    expect(userController.loginUser).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    userService.loginUser = jest.fn();
    await userController.loginUser(req, res, next);

    expect(userService.loginUser).toHaveBeenCalled();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    userService.loginUser = jest.fn();
    await userController.loginUser(req, res, next);

    expect(userService.loginUser).toHaveBeenCalledWith(req.body);
  });
});
