import httpMock from 'node-mocks-http';
import RoleService from '../../services/RoleService';
import RoleController from '../../controllers/RoleController';

let req: any, res: any, next: any;

const newRole = { roleName: 'newRole' };

beforeEach(() => {
  req = httpMock.createRequest({
    params: {
      id: 9
    },
    body: newRole
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

  it('when given a controller method it should be defined', async () => {
    expect(roleController.addRole).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    roleService.addRole = jest.fn();
    await roleController.addRole(req, res, next);

    expect(roleService.addRole).toHaveBeenCalled();
  });

  it('when given a controller methods it should return type of method to be function', async () => {
    expect(typeof roleController.getAllRole).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(roleController.getAllRole).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    roleService.getAllRole = jest.fn();
    await roleController.getAllRole(req, res, next);

    expect(roleService.getAllRole).toHaveBeenCalled();
  });

  it('when given a controller method getrole it should return type of method to be function', async () => {
    expect(typeof roleController.getRole).toBe('function');
  });

  it('when given a controller method getrole it should be defined', async () => {
    expect(roleController.getRole).toBeDefined();
  });

  it('when a give controller  method getrole is called it should call corresponding service method', async () => {
    roleService.getRole = jest.fn();
    await roleController.getRole(req, res, next);

    expect(roleService.getRole).toHaveBeenCalled();
  });

  it('when a give controller getrole method is called it should call corresponding service method with parameters', async () => {
    roleService.getRole = jest.fn();
    await roleController.getRole(req, res, next);

    expect(roleService.getRole).toBeCalledWith(req.params.id);
  });

  it('when given a controller methods it should return type of method to be function', async () => {
    roleController.getRole = jest.fn();

    expect(typeof roleController.deleteRole).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(roleController.deleteRole).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    roleService.deleteRole = jest.fn();
    await roleController.deleteRole(req, res, next);

    expect(roleService.deleteRole).toHaveBeenCalled();
  });

  it('when a give controller method is called it should call corresponding service method with parameters', async () => {
    roleService.deleteRole = jest.fn();
    await roleController.deleteRole(req, res, next);

    expect(roleService.deleteRole).toBeCalledWith(req.params.id);
  });

  it('when given a controller method updateRole it should return type of method to be function', async () => {
    roleController.getRole = jest.fn();

    expect(typeof roleController.updateRole).toBe('function');
  });

  it('when given a controller method updateRole it should be defined', async () => {
    expect(roleController.updateRole).toBeDefined();
  });

  it('when a give controller method updateRole is called it should call corresponding service method', async () => {
    roleService.updateRole = jest.fn();
    await roleController.updateRole(req, res, next);

    expect(roleService.updateRole).toHaveBeenCalled();
  });

  it('when a give controller method updateRole is called it should call corresponding service method with parameters', async () => {
    roleService.updateRole = jest.fn();
    await roleController.updateRole(req, res, next);

    expect(roleService.updateRole).toBeCalledWith(req.params.id, newRole);
  });
});
