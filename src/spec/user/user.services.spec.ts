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
});
