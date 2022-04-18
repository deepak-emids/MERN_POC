// import Repository from '../../repository/EmployeeRepository';
// let repo = new Repository();
// import EmployeeData from '../../models/EmployeeData';
// import faker from 'faker';

// describe('Repository', () => {
//   it.only('when given employee details should create new employeee and return the created employee', async () => {
//     let date = new Date('2010-10-10');
//     let newUser: EmployeeData = {
//       id: 17,
//       firstName: faker.name.findName(),
//       lastName: faker.name.lastName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//       address: faker.address.streetAddress(),
//       department_Id: faker.datatype.number(),
//       role_Id: faker.datatype.number(),
//       mobileNo: faker.datatype.number(),
//       aadharId: faker.datatype.number(100),
//       date_Of_Joining: date,
//       isActive: true,
//       isDeleted: false,
//       created_at: date,
//       updated_at: date
//     };

//     console.log(newUser);

//     const createdUser = await repo.add(newUser);
//     console.log(createdUser);

//     expect(createdUser.firstName).toMatch(newUser.firstName);
//   });

//   it('should return all employees', async () => {
//     const res = await repo.getAll();
//     expect(res.length).toBe(9);
//   });

//   it('when given employeeid should return employee details ', async () => {
//     let employeeId = 5;
//     let query = { id: employeeId };
//     const employee = await repo.get(query);
//     expect(employee.id).toBe(employeeId);
//   });

//   it('when given falsy or employeeid is not present should return employee details ', async () => {
//     let employeeId = 4;
//     let query = { id: employeeId };
//     const employee = await repo.get(query);
//     expect(employee).toBeFalsy();
//   });

//   it('when given employeeid ,should delete the given employee', async () => {
//     const employeeId = 3;
//     await repo.delete(employeeId);
//     const findDeleted = await repo.get(employeeId);

//     expect(findDeleted).toBeFalsy();
//   });

//   it('when given employeeid not present db,should return falsy value', async () => {
//     const employeeId = 1;
//     await repo.delete(employeeId);
//     const findDeleted = await repo.get(employeeId);

//     expect(findDeleted).toBeFalsy();
//   });

//   it('when given employeeid and employee details,should update the given employee details', async () => {
//     const employeeId = 16;
//     let updatedDetails = {
//       firstName: faker.name.findName()
//     };
//     await repo.update(employeeId, updatedDetails);
//     const findUpdated = await repo.get(employeeId);

//     expect(findUpdated.firstName).toMatch(updatedDetails.firstName);
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
//       date_Of_Joining: '2004-12-10'
//     };
//     const update = await repo.update(employeeId, updatedDetails);

//     expect(update).toBeFalsy();
//   });
// });
