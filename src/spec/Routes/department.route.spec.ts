import httpMock from 'node-mocks-http';
import request from 'supertest';

import DepartmentController from '../../controllers/DepartmentController';

let req: any, res: any, next: any;

const newDepartment = { departmentName: 'newDepartment' };

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpQGdtaWFsIiwiZW1wbG95ZWVJZCI6MiwiaWF0IjoxNjQ3Nzc0Nzk3fQ.eui4USym8Ml03oFgFQCHGxQxYSFUJJmQWIsUXye2eY0';

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

let departmentController = new DepartmentController();

it.only('should set the todo item to completed', async (done) => {
  request('http://localhost:9000')
    .get('/employee')
    .set({ token: token })
    .end((err, res) => {
      console.log(res);
      expect(res.status).toEqual(200);
      //   done();
    });
  //   console.log(result.text);
  //   expect(result.text).toEqual(200);
});
