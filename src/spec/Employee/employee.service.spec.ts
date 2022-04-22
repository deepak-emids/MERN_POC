import httpMock from 'node-mocks-http';
import EmployeeDetailsService from '../../services/EmployeeService';
import EmployeeRepository from '../../repository/EmployeeRepository';
import faker from 'faker';
import EmployeeData from '../../models/EmployeeData';

let req: any, res: any, next: any;

const date = new Date('2010-10-10');

const newUser: EmployeeData = {
  id: faker.datatype.number(),
  firstName: faker.name.findName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  address: faker.address.streetAddress(),
  department_Id: faker.datatype.number(),
  role_Id: faker.datatype.number(),
  mobileNo: faker.datatype.number(),
  aadharId: faker.datatype.number(100),
  date_Of_Joining: date,
  isActive: true,
  isDeleted: false,
  created_at: date,
  updated_at: date
};

const id = 1;

beforeEach(() => {
  req = httpMock.createRequest({
    params: {
      id: 1
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

  it('when given a controller method addEmployee it should be defined', async () => {
    expect(employeeService.addEmployee).toBeDefined();
  });

  it('when given a controller method getAllEmployee it should return type of method to be function', async () => {
    expect(typeof employeeService.getAllEmployee).toBe('function');
  });

  it('when given a controller method getAllEmployee it should be defined', async () => {
    expect(employeeService.getAllEmployee).toBeDefined();
  });

  it('when a give controller method getAllEmployee is called it should call corresponding service method', async () => {
    employeeRepository.getAll = jest.fn();
    await employeeService.getAllEmployee();

    expect(employeeRepository.getAll).toHaveBeenCalled();
  });

  it('when given a controller method getEmployee it should return type of method to be function', async () => {
    expect(typeof employeeService.getEmployee).toBe('function');
  });

  it('when given a controller method getEmployee it should be defined', async () => {
    expect(employeeService.getEmployee).toBeDefined();
  });

  it('when a give controller method getEmployee is called it should call corresponding service method', async () => {
    employeeRepository.get = jest.fn();
    await employeeService.getEmployee(id);

    expect(employeeRepository.get).toHaveBeenCalled();
  });

  it('when a give controller method getEmployee is called it should call corresponding service method with parameters', async () => {
    employeeRepository.get = jest.fn();
    await employeeService.getEmployee(id);

    expect(employeeRepository.get).toBeCalledWith({ id: id });
  });

  it('when given a controller method deleteEmployee it should return type of method to be function', async () => {
    employeeRepository.get = jest.fn();

    expect(typeof employeeService.deleteEmployee).toBe('function');
  });

  it('when given a controller method deleteEmployee it should be defined', async () => {
    expect(employeeService.deleteEmployee).toBeDefined();
  });

  it('when a give controller method deleteEmployee is called it should call corresponding service method', async () => {
    employeeRepository.get = jest.fn(async () => true);

    employeeRepository.delete = jest.fn();

    await employeeService.deleteEmployee(id);

    expect(employeeRepository.delete).toHaveBeenCalled();
  });

  it('when a give controller method deleteEmployee is called it should call corresponding service method with parameters', async () => {
    employeeRepository.get = jest.fn(async () => true);

    employeeRepository.delete = jest.fn();

    await employeeService.deleteEmployee(id);

    expect(employeeRepository.delete).toBeCalledWith(id);
  });

  it('when given a Service method updateEmployee it should return type of method to be function', async () => {
    employeeRepository.update = jest.fn();

    expect(typeof employeeService.updateEmployee).toBe('function');
  });

  it('when given a Service method updateEmployee it should be defined', async () => {
    expect(employeeService.updateEmployee).toBeDefined();
  });

  it('when a give Service method updateEmployee is called it should call corresponding service method', async () => {
    employeeRepository.get = jest.fn(async () => true);

    employeeRepository.update = jest.fn();

    await employeeService.updateEmployee(req.params.id, newUser);

    expect(employeeRepository.update).toHaveBeenCalled();
  });

  it('when a give Service method updateEmployee is called it should call corresponding service method with parameters', async () => {
    employeeRepository.get = jest.fn(async () => true);

    employeeRepository.update = jest.fn();

    await employeeService.updateEmployee(req.params.id, newUser);

    expect(employeeRepository.update).toHaveBeenCalledWith(
      req.params.id,
      newUser
    );
  });
});
