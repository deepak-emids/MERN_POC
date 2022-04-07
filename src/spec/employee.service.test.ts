// import Repository from '../repository/repository';

// import EmployeeService from '../services/EmployeeDetailsService';
// let employeeService = new EmployeeService();
// import faker from 'faker';

// jest.mock('../repository/repository', () => {
//   return {
//     getAll: jest.fn()
//   };
// });

// let repo = new Repository();

// describe('Service Test', () => {
//   it('when given employee details should call add method from repository', async () => {
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
//     await employeeService.addEmployeeDetails(newUser);
//     expect(repo.add).toHaveBeenCalled();
//   });

//   it('should call getAll() method of repository', async () => {
//     repo.getAll = jest.fn().mockImplementation(() => []);
//     await employeeService.getAllEmployeeDetails();
//     expect(repo.getAll).toHaveBeenCalled();
//   });

//   it('when given employeeid should return employee details ', async () => {
//     const employeeId = 1;
//     await employeeService.getEmployeeDetails(employeeId);
//     expect(repo.get).toHaveBeenCalled;
//   });
//   it('when given employeeid ,should delete the given employee', async () => {
//     const employeeId = 1;
//     await employeeService.deleteEmployeeDetails(employeeId);
//     expect(repo.delete).toHaveBeenCalled;
//   });
//   it('when given employeeid and employee details,should update the given employee details', async () => {
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
//       // mobileNo: faker.phone.phoneNumber(),
//       aadharId: faker.datatype.number(100),
//       date_Of_Joining: '2004-12-27'
//     };
//     await employeeService.updateEmployeeDetails(employeeId, updatedDetails);
//     expect(repo.update).toHaveBeenCalled;
//   });
// });
