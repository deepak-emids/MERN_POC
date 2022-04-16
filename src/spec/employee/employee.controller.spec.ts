import httpMock from 'node-mocks-http';
import EmployeeService from '../../services/EmployeeService';
import ResponseModel from '../../models/Response.model';

import EmployeeController from '../../controllers/EmployeeController';

let req: any, res: any, next: any;

beforeEach(() => {
  req = httpMock.createRequest({
    params: { id: 5 }
  });
  res = httpMock.createResponse({});
  res.status = 400;
  next = () => {};
});

let employeeService = new EmployeeService();

let employeeController = new EmployeeController(employeeService);

describe('testing employee controller', () => {
  it.only('when called getAll method from controller should call getAllEmployee from service', async () => {
    employeeService.getEmployee = jest.fn();

    let data = await employeeController.getEmployee(req, res, next);
    console.log(data);
    expect(employeeService.getEmployee).toBeCalledWith(req.params.id);

    // let data = await employeeService.getEmployee(5);

    // expect(res.status).toEqual(200);
  });

  // it.only('when called getAll method from controller should call getAllEmployee from service', async () => {
  //   employeeService.getAllEmployee = jest.fn();
  //   // .mockImplementation(() => {});

  //   await employeeController.getAllEmployee(req, res, next);
  //   expect(employeeService.getAllEmployee).toHaveBeenCalled();
  // });
});
