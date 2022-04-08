// import Repository from '../repository/repository';
// let repo = new Repository();
// import { EmployeeDetails } from '../entity/employee';
// import faker from 'faker';
// describe('Repository', () => {
//   it('when given employee details should create new employeee and return the created employee', async () => {
//     let newUser = {
//       firstName: faker.name.findName(),
//       lastName: faker.name.lastName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//       address: faker.address.streetAddress(),
//       department_Id: faker.datatype.number(),
//       role_Id: faker.datatype.number(),
//       mobileNo: faker.datatype.number(),
//       // mobileNo: faker.phone.phoneNumber(),
//       aadharId: faker.datatype.number(100),
//       date_Of_Joining: '2004-12-27'
//     };
//     console.log(newUser, 'sent');
//     const createdUser = await repo.add(EmployeeDetails, newUser);
//     console.log(createdUser, 'creataed');
//     expect(createdUser).toMatchObject(newUser);
//   });
//   it('when given incorrect employee details should not create new employeee', async () => {
//     let newUser = {
//       firstName: faker.name.findName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//       address: faker.address.streetAddress(),
//       department_Id: faker.datatype.number(),
//       role_Id: faker.datatype.number(),
//       mobileNo: 123456789,
//       aadharId: faker.datatype.number(100),
//       date_Of_Joining: '2004-12-27'
//     };
//     const createdUser = await repo.add(EmployeeDetails, newUser);
//     console.log(createdUser);
//     expect(createdUser).toThrowError();
//   });
//   it('should return all employees', async () => {
//     const res = await repo.getAll(EmployeeDetails);
//     expect(res.length).toBe(9);
//   });
//   it('when given employeeid should return employee details ', async () => {
//     let employeeId = 5;
//     let query = { id: employeeId };
//     const employee = await repo.get(EmployeeDetails, query);
//     expect(employee.id).toBe(employeeId);
//   });
//   it('when given falsy or employeeid is not present should return employee details ', async () => {
//     let employeeId = 4;
//     let query = { id: employeeId };
//     const employee = await repo.get(EmployeeDetails, query);
//     expect(employee).toBeFalsy();
//   });
//   it('when given employeeid ,should delete the given employee', async () => {
//     const employeeId = 3;
//     await repo.delete(EmployeeDetails, employeeId);
//     const findDeleted = await repo.get(EmployeeDetails, employeeId);
//     expect(findDeleted).toBeFalsy();
//   });
//   it('when given employeeid not present db,should return falsy value', async () => {
//     const employeeId = 1;
//     await repo.delete(EmployeeDetails, employeeId);
//     const findDeleted = await repo.get(EmployeeDetails, employeeId);
//     expect(findDeleted).toBeFalsy();
//   });
//   it('when given employeeid and employee details,should update the given employee details', async () => {
//     const employeeId = 5;
//     let updatedDetails = {};
//     await repo.update(EmployeeDetails, employeeId, updatedDetails);
//     const findUpdated = await repo.get(EmployeeDetails, employeeId);
//     expect(findUpdated).toMatchObject(updatedDetails);
//   });
//   it('when given incorrect employeeid,should not update the given employee details', async () => {
//     const employeeId = 1;
//     let updatedDetails = {
//       firstName: faker.name.findName(),
//       lastName: faker.name.lastName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//       address: faker.address.streetAddress(),
//       department_Id: faker.datatype.number(),
//       role_Id: faker.datatype.number(),
//       mobileNo: faker.datatype.number(),
//       aadharId: faker.datatype.number(100),
//       date_Of_Joining: '2004-12-27'
//     };
//     const update = await repo.update(
//       EmployeeDetails,
//       employeeId,
//       updatedDetails
//     );
//     expect(update).toBeFalsy();
//   });
// });
