import Repository from '../repository/repository';
let repo = new Repository();

import { EmployeeDetails } from '../entity/employee';
import EmployeeService from '../services/EmployeeDetailsService';
let employeeService = new EmployeeService();

import EmployeeData from '../models/EmployeeData';

describe('Service Test', () => {
  it.('when given employee details should call add method from repository', async () => {
    let newUser = {
      firstName: 'last',
      lastName: 'last foo',
      email: 'ffoo@gmail.com',
      password: 'pass',
      address: 'a/p shivajinagar,mumbai,tal:mubai,dist:mumbai',
      department_Id: 5,
      role_Id: 2,
      mobileNo: 122154789,
      aadharId: 10,
      date_Of_Joining: '2000-4-5'
    };

    await employeeService.addEmployeeDetails(newUser);
    expect(repo.add).toHaveBeenCalled();
  });

  it('when given employeeid should return all employees', async () => {
    await employeeService.getAllEmployeeDetails();

    expect(repo.getAll).toHaveBeenCalled();
  });

  it('when given employeeid should return employee details ', async () => {
    const employeeId = 1;
    await employeeService.getEmployeeDetails(employeeId);

    expect(repo.get).toHaveBeenCalled;
  });

  it('when given employeeid ,should delete the given employee', async () => {
    const employeeId = 1;
    await employeeService.deleteEmployeeDetails(employeeId);

    expect(repo.delete).toHaveBeenCalled;
  });

  it('when given employeeid and employee details,should update the given employee details', async () => {
    const employeeId = 1;
    let updatedDetails = {
      firstName: 'lastone',
      lastName: 'last foo',
      email: 'ffoo@gmail.com',
      password: 'pass',
      address: 'a/p shivajinagar,mumbai,tal:mubai,dist:mumbai',
      department_Id: 5,
      role_Id: 2,
      mobileNo: 122154789,
      aadharId: 9,
      date_Of_Joining: '2004-12-27'
    };
    await employeeService.updateEmployeeDetails(employeeId, updatedDetails);

    expect(repo.update).toHaveBeenCalled;
  });
});
