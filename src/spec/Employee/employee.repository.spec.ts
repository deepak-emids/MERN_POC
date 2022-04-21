// import Repository from '../../repository/EmployeeRepository';
// let repo = new Repository();
// import EmployeeData from '../../models/EmployeeData';
// import faker from 'faker';

// let employeeId = 1;

// describe('Repository', () => {
//   it('when given employee details should create new employeee and return the created employee', async () => {
//     let date = new Date('2010-10-10');
//     let newUser: EmployeeData = {
//       id: null,
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

//     const createdUser = await repo.add(newUser);
//     expect(createdUser.firstName).toMatch(newUser.firstName);
//   });

//   it('should return all employees', async () => {
//     const res = await repo.getAll();
//     expect(res.length).toBe(9);
//   });

//   it('when given employeeid should return employee details ', async () => {
//     let query = { id: employeeId };
//     const employee = await repo.get(query);
//     expect(employee.id).toBe(employeeId);
//   });

//   it('when given employeeid and employee details,should update the given employee details', async () => {
//     let updatedDetails = {
//       firstName: faker.name.findName()
//     };
//     await repo.update(employeeId, updatedDetails);
//     const findUpdated = await repo.get(employeeId);

//     expect(findUpdated.firstName).toMatch(updatedDetails.firstName);
//   });
// });
