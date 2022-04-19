import httpMock from 'node-mocks-http';
import UserRepository from '../../repository/UserRepository';
import UserService from '../../services/UserService';

let req: any, res: any, next: any;

const user = { email: 'newUser', password: 'pass123' };
const userEmail = { email: 'newUser' };

beforeEach(() => {
  req = httpMock.createRequest({
    body: user
  });
  res = httpMock.createResponse({});
  next = () => {};
});

let userRepository = new UserRepository();

let userService = new UserService(userRepository);

describe('testing User Service', () => {
  it('when given a Service methods it should return type of method to be function', async () => {
    expect(typeof userService.loginUser).toBe('function');
  });

  it('when given a Service method it should be defined', async () => {
    expect(userService.loginUser).toBeDefined();
  });

  it('when a give Service method is called it should call corresponding Repository method', async () => {
    userRepository.get = jest.fn();
    await userService.loginUser(req.body);

    expect(userRepository.get).toHaveBeenCalled();
  });
});
