// import Repository from '../repository/repository';
// let repo = new Repository();
// import { Role } from '../entity/role';
// import faker from 'faker';
// describe('Repository', () => {
//   it('when given Role details should create new Rolee and return the created Role', async () => {
//     let newRole = {
//       roleName: faker.name.findName()
//     };
//     const createdRole = await repo.add(Role, newRole);
//     expect(createdRole).toMatchObject(newRole);
//   });
//   it('when given incorrect Role details should throw error', async () => {
//     let newRole = {};
//     const createdRole = await repo.add(Role, newRole);
//     expect(createdRole).toThrowError();
//   });
//   it('should return all Roles', async () => {
//     const res = await repo.getAll(Role);
//     expect(res.length).toBe(9);
//   });
//   it('when given Role_id should return Role details ', async () => {
//     let Role_id = 5;
//     let query = { id: Role_id };
//     const role = await repo.get(Role, query);
//     expect(role.id).toBe(Role_id);
//   });
//   it('when given falsy or Role_id is not present should return Role details ', async () => {
//     let Role_id = 1;
//     let query = { id: Role_id };
//     const role = await repo.get(Role, query);
//     expect(role).toBeFalsy();
//   });
//   it('when given Role_id ,should delete the given Role', async () => {
//     const role_id = 5;
//     await repo.delete(Role, role_id);
//     const findDeleted = await repo.get(Role, role_id);
//     expect(findDeleted).toBeFalsy();
//   });
//   it('when given Role_id not present db,should return falsy value', async () => {
//     const Role_id = 1;
//     await repo.delete(Role, Role_id);
//     const findDeleted = await repo.get(Role, Role_id);
//     expect(findDeleted).toBeFalsy();
//   });
//   it('when given Role_id and Role details,should update the given Role details', async () => {
//     const role_id = 6;
//     let newRole = {
//       roleName: faker.name.findName()
//     };
//     await repo.update(Role, role_id, newRole);
//     const findUpdated = await repo.get(Role, role_id);
//     expect(findUpdated).toMatchObject(newRole);
//   });
//   it('when given incorrect Role_id,should not update the given Role details', async () => {
//     const Role_id = 1;
//     let newRole = {
//       roleName: faker.name.findName()
//     };
//     const update = await repo.update(Role, Role_id, newRole);
//     expect(update).toBeFalsy();
//   });
// });
