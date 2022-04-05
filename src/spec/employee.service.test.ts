// jest.mock('../repository/repository', () => {
//   getAll: jest.fn().mockImplementation(() => []);
// });

// import Repository from '../repository/repository';
// let repo = new Repository();

import { EmployeeDetails } from '../entity/employee';
import EmployeeService from '../services/employee.service';
let employeeService = new EmployeeService();

import Repository from '../repository/repository';
let repo = new Repository();

repo.getAll = jest.fn().mockResolvedValue({ hi: 1 });

// import EmployeeData from '../models/employeeDetails.model';
// import { addEmployee } from '../__mock__/employee.service.mock';

describe('Service Test', () => {
  //create employee
  //   it.only('when given employee details should call add method from repository', async () => {
  //     // let newEmployee = {
  //     //   firstName: faker.name.findName(),
  //     //   lastName: faker.name.lastName(),
  //     //   email: faker.internet.email(),
  //     //   password: faker.internet.password(),
  //     //   address: faker.address.streetAddress(),
  //     //   department_Id: faker.random.number(),
  //     //   role_Id: faker.random.number(),
  //     //   date_of_birth: faker.date.past(2),
  //     //   city: faker.address.city(),
  //     //   country: faker.address.country(),
  //     //   mobileNo: faker.phone.phoneNumber(),
  //     //   aadharId: faker.random.number(100),
  //     //   date_Of_Joining: faker.date.past(2)
  //     // };

  //     let newUser = {
  //       firstName: 'last',
  //       lastName: 'last foo',
  //       email: 'ffoo@gmail.com',
  //       password: 'pass',
  //       address: 'a/p shivajinagar,mumbai,tal:mubai,dist:mumbai',
  //       department_Id: 5,
  //       role_Id: 2,
  //       mobileNo: 122154789,
  //       aadharId: 10,
  //       date_Of_Joining: '2000-4-5'
  //     };

  //     await employeeService.addEmployeeDetails(newUser);
  //     expect(repo.add).toHaveBeenCalled();
  //   });

  //get all employees
  it('when given employeeid should return all employees', async () => {
    await employeeService.getAllEmployeeDetails();

    expect(repo.getAll).toHaveBeenCalled();
  });

  //   //get single employee
  //   it('when given employeeid should return employee details ', async () => {
  //     const employeeId = 1;
  //     await employeeService.getEmployeeDetails(employeeId);

  //     expect(repo.get).toHaveBeenCalled;
  //   });

  //   //delete employee
  //   it('when given employeeid ,should delete the given employee', async () => {
  //     const employeeId = 1;
  //     await employeeService.deleteEmployeeDetails(employeeId);

  //     expect(repo.delete).toHaveBeenCalled;
  //   });

  //   //update employee
  //   it('when given employeeid and employee details,should update the given employee details', async () => {
  //     const employeeId = 1;
  //     let updatedDetails = {
  //       firstName: 'lastone',
  //       lastName: 'last foo',
  //       email: 'ffoo@gmail.com',
  //       password: 'pass',
  //       address: 'a/p shivajinagar,mumbai,tal:mubai,dist:mumbai',
  //       department_Id: 5,
  //       role_Id: 2,
  //       mobileNo: 122154789,
  //       aadharId: 9,
  //       date_Of_Joining: '2004-12-27'
  //     };
  //     await employeeService.updateEmployeeDetails(employeeId, updatedDetails);

  //     expect(repo.update).toHaveBeenCalled;
  //   });
});
