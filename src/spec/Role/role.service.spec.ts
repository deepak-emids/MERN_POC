// import httpMock from 'node-mocks-http';
// import RoleRepository from '../../repository/RoleRepository';
// import RoleService from '../../services/RoleService';

// let req: any, res: any, next: any;

// const newRole = { roleName: 'testRole' };

// const id: number = 9;

// beforeEach(() => {
//   req = httpMock.createRequest({
//     params: {
//       id: 9
//     },
//     body: newRole
//   });
//   res = httpMock.createResponse({});
//   next = () => {};
// });

// let roleRepository = new RoleRepository();

// let roleService = new RoleService(roleRepository);

// describe('unit tests for employee service module', () => {
//   it('when given a service method addrole it should return type of method to be function', async () => {
//     expect(typeof roleService.addRole).toBe('function');
//   });

//   it('when given a service method addrole it should be defined', async () => {
//     expect(roleService.addRole).toBeDefined();
//   });

//   it('when a give service method addrole is called it should call corresponding service method', async () => {
//     roleRepository.add = jest.fn();
//     await roleService.addRole(newRole);

//     expect(roleRepository.add).toHaveBeenCalled();
//   });

//   it('when given a service method getAllrole it should return type of method to be function', async () => {
//     expect(typeof roleService.getAllRole).toBe('function');
//   });

//   it('when given a service method getAllrole it should be defined', async () => {
//     expect(roleService.getAllRole).toBeDefined();
//   });

//   it('when a give service method getAllroleis called it should call corresponding service method', async () => {
//     roleRepository.getAll = jest.fn();
//     await roleService.getAllRole();

//     expect(roleRepository.getAll).toHaveBeenCalled();
//   });

//   it('when given a service method getrole it should return type of method to be function', async () => {
//     expect(typeof roleService.getRole).toBe('function');
//   });

//   it('when given a service method getrole it should be defined', async () => {
//     expect(roleService.getRole).toBeDefined();
//   });

//   it('when a give service method getrole is called it should call corresponding service method', async () => {
//     roleRepository.get = jest.fn();
//     await roleService.getRole(id);

//     expect(roleRepository.get).toHaveBeenCalled();
//   });

//   it('when a give service method getrole is called it should call corresponding service method with parameters', async () => {
//     roleRepository.get = jest.fn();
//     await roleService.getRole(id);

//     expect(roleRepository.get).toBeCalledWith({ id: id });
//   });

//   it('when given a service method deleterole it should return type of method to be function', async () => {
//     roleService.deleteRole = jest.fn();

//     expect(typeof roleService.deleteRole).toBe('function');
//   });

//   it('when given a service method deleterole it should be defined', async () => {
//     expect(roleService.deleteRole).toBeDefined();
//   });

//   it('when given a service method deleterole is called it should call corresponding service method', async () => {
//     roleRepository.delete = jest.fn();
//     await roleService.deleteRole(id);

//     expect(roleRepository.delete).toHaveBeenCalled();
//   });

//   it('when given a service method deleterole is called it should call corresponding service method with parameters', async () => {
//     roleRepository.delete = jest.fn();
//     await roleService.deleteRole(id);

//     expect(roleRepository.delete).toBeCalledWith(req.params.id);
//   });

//   it('when given a service method updaterole it should return type of method to be function', async () => {
//     roleService.updateRole = jest.fn();

//     expect(typeof roleService.updateRole).toBe('function');
//   });

//   it('when given a service method updaterole it should be defined', async () => {
//     expect(roleService.updateRole).toBeDefined();
//   });

//   it('when given a service method updaterole is called it should call corresponding service method', async () => {
//     roleRepository.update = jest.fn();
//     await roleService.updateRole(id, newRole);

//     expect(roleRepository.update).toHaveBeenCalled();
//   });

//   it('when given a service method deleterole is called it should call corresponding service method with parameters', async () => {
//     roleRepository.update = jest.fn();
//     await roleService.updateRole(id, req.body);

//     expect(roleRepository.update).toBeCalledWith(req.params.id, newRole);
//   });
// });
