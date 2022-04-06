import Repository from '../repository/repository';
// import repo from './repo';

// jest.mock('../repository/repository');

import { EmployeeDetails } from '../entity/employee';
import EmployeeService from '../services/EmployeeDetailsService';
let employeeService = new EmployeeService();
import faker from 'faker';

// jest.mock('../repository/repository', () => {
//   return {
//     getAll: jest.fn()
//   };
// });

let repo = new Repository();

describe('Service Test', () => {
  // it('when given employee details should call add method from repository', async () => {
  //   let newUser = {
  //     firstName: faker.name.findName(),
  //     lastName: faker.name.lastName(),
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //     address: faker.address.streetAddress(),
  //     department_Id: faker.datatype.number(),
  //     role_Id: faker.datatype.number(),
  //     mobileNo: faker.datatype.number(),
  //     // mobileNo: faker.phone.phoneNumber(),
  //     aadharId: faker.datatype.number(100),
  //     date_Of_Joining: '2004-12-27'
  //   };
  //   await employeeService.addEmployeeDetails(newUser);
  //   expect(repo.add).toHaveBeenCalled();
  // });

  it.only('should call getAll() method of repository', async () => {
    repo.getAll = jest.fn().mockImplementation(() => []);
    await employeeService.getAllEmployeeDetails();
    // expect(repo.getAll).toHaveBeenCalled();
    // expect(await repo.getAll).toBeDefined();
    expect(repo.getAll).toHaveBeenCalled();
  });

  // it('when given employeeid should return employee details ', async () => {
  //   const employeeId = 1;
  //   await employeeService.getEmployeeDetails(employeeId);
  //   expect(repo.get).toHaveBeenCalled;
  // });
  // it('when given employeeid ,should delete the given employee', async () => {
  //   const employeeId = 1;
  //   await employeeService.deleteEmployeeDetails(employeeId);
  //   expect(repo.delete).toHaveBeenCalled;
  // });
  // it('when given employeeid and employee details,should update the given employee details', async () => {
  //   const employeeId = 1;
  //   let updatedDetails = {
  //     firstName: 'lastone',
  //     lastName: 'last foo',
  //     email: 'ffoo@gmail.com',
  //     password: 'pass',
  //     address: 'a/p shivajinagar,mumbai,tal:mubai,dist:mumbai',
  //     department_Id: 5,
  //     role_Id: 2,
  //     mobileNo: 122154789,
  //     aadharId: 9,
  //     date_Of_Joining: '2004-12-27'
  //   };
  //   await employeeService.updateEmployeeDetails(employeeId, updatedDetails);
  //   expect(repo.update).toHaveBeenCalled;
  // });
});
