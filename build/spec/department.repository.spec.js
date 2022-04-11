// import Repository from '../repository/repository';
// let repo = new Repository();
// import { Department } from '../entity/department';
// import faker from 'faker';
// describe('Repository', () => {
//   it('when given department details should create new departmente and return the created department', async () => {
//     let newDepartment = {
//       departmentName: faker.name.findName()
//     };
//     const createdDepartment = await repo.add(Department, newDepartment);
//     expect(createdDepartment).toMatchObject(newDepartment);
//   });
//   it('when given incorrect department details should not create new departmente', async () => {
//     let newDepartment = {};
//     const createdDepartment = await repo.add(Department, newDepartment);
//     expect(createdDepartment).toMatchObject(newDepartment);
//   });
//   it('should return all departments', async () => {
//     const res = await repo.getAll(Department);
//     expect(res.length).toBe(9);
//   });
//   it('when given department_id should return department details ', async () => {
//     let department_id = 5;
//     let query = { id: department_id };
//     const department = await repo.get(Department, query);
//     expect(department.id).toBe(department_id);
//   });
//   it('when given falsy or department_id is not present should return department details ', async () => {
//     let department_id = 1;
//     let query = { id: department_id };
//     const department = await repo.get(Department, query);
//     expect(department).toBeFalsy();
//   });
//   it('when given department_id ,should delete the given department', async () => {
//     const department_id = 3;
//     await repo.delete(Department, department_id);
//     const findDeleted = await repo.get(Department, department_id);
//     expect(findDeleted).toBeFalsy();
//   });
//   it('when given department_id not present db,should return falsy value', async () => {
//     const department_id = 1;
//     await repo.delete(Department, department_id);
//     const findDeleted = await repo.get(Department, department_id);
//     expect(findDeleted).toBeFalsy();
//   });
//   it('when given department_id and department details,should update the given department details', async () => {
//     const department_id = 2;
//     let newDepartment = {
//       departmentName: faker.name.findName()
//     };
//     await repo.update(Department, department_id, newDepartment);
//     const findUpdated = await repo.get(Department, department_id);
//     expect(findUpdated).toMatchObject(newDepartment);
//   });
//   it('when given incorrect department_id,should not update the given department details', async () => {
//     const department_id = 1;
//     let newDepartment = {
//       departmentName: faker.name.findName()
//     };
//     const update = await repo.update(Department, department_id, newDepartment);
//     expect(update).toBeFalsy();
//   });
// });
