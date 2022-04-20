import { userAuth } from '../../middlewares/auth.middleware';

import httpMock from 'node-mocks-http';

let req: any, res: any, next: any;

beforeEach(() => {
  req = httpMock.createRequest({
    params: {
      id: 9
    },
    headers: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpQGdtaWFsIiwiZW1wbG95ZWVJZCI6MiwiaWF0IjoxNjQ3Nzc0Nzk3fQ.eui4USym8Ml03oFgFQCHGxQxYSFUJJmQWIsUXye2eY0'
    }
  });
  res = httpMock.createResponse({});
  next = () => {};
});

it.only('should set the todo item to completed', async () => {
  let bearerToken = req.header('token');
  let next = jest.fn();
  await userAuth(req, res, next);
  expect(next).toHaveBeenCalled();
});
