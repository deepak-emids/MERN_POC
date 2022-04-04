import Repository from '../repository/repository';
let repo = new Repository();
import { EmployeeDetails } from '../entity/employee';
// import faker from 'faker';

describe('Repository', () => {
  //create employee
  it('when given employee details should create new employeee and return the created employee', async () => {
    // let newEmployee = {
    //   firstName: faker.name.findName(),
    //   lastName: faker.name.lastName(),
    //   email: faker.internet.email(),
    //   password: faker.internet.password(),
    //   address: faker.address.streetAddress(),
    //   department_Id: faker.random.number(),
    //   role_Id: faker.random.number(),
    //   date_of_birth: faker.date.past(2),
    //   city: faker.address.city(),
    //   country: faker.address.country(),
    //   mobileNo: faker.phone.phoneNumber(),
    //   aadharId: faker.random.number(100),
    //   date_Of_Joining: faker.date.past(2)
    // };

    let newUser = {
      firstName: 'last',
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

    const createdUser = await repo.add(EmployeeDetails, newUser);

    expect(createdUser).toMatchObject(newUser);
  });

  //get all employees
  it('should return all employees', async () => {
    const res = await repo.getAll(EmployeeDetails);
    expect(res.length).toBe(9);
  });

  //get single employee(positive)
  it('when given employeeid should return employee details ', async () => {
    let employeeId = 5;
    let query = { id: employeeId };
    const employee = await repo.get(EmployeeDetails, query);
    expect(employee.id).toBe(employeeId);
  });

  //get single employee(negative)
  it('when given falsy or employeeid is not present should return employee details ', async () => {
    let employeeId = 4;
    let query = { id: employeeId };
    const employee = await repo.get(EmployeeDetails, query);
    expect(employee).toBeFalsy();
  });

  //delete employee
  it('when given employeeid ,should delete the given employee', async () => {
    const employeeId = 3;
    await repo.delete(EmployeeDetails, employeeId);
    const findDeleted = await repo.get(EmployeeDetails, employeeId);

    expect(findDeleted).toBeFalsy();
  });

  //delete employee
  it('when given employeeid not present db,should return falsy value', async () => {
    const employeeId = 1;
    await repo.delete(EmployeeDetails, employeeId);
    const findDeleted = await repo.get(EmployeeDetails, employeeId);

    expect(findDeleted).toBeFalsy();
  });

  //update employee
  it('when given employeeid and employee details,should update the given employee details', async () => {
    const employeeId = 5;
    let updatedDetails = {
      firstName: 'lastone',
      lastName: 'last foo',
      email: 'ffoo@gmail.com',
      password: 'pass',
      address: 'a/p shivajinagar,mumbai,tal:mubai,dist:mumbai',
      department_Id: 5,
      role_Id: 2,
      mobileNo: 122154789,
      aadharId: 10,
      date_Of_Joining: '2004-12-27'
    };
    const update = await repo.update(
      EmployeeDetails,
      employeeId,
      updatedDetails
    );
    const findUpdated = await repo.get(EmployeeDetails, employeeId);

    expect(findUpdated).toMatchObject(updatedDetails);
  });

  //update employee
  it.only('when given incorrect employeeid,should not update the given employee details', async () => {
    const employeeId = 1;
    let updatedDetails = {
      lastName: 'last foo',
      email: 'ffoo@gmail.com',
      password: 'pass',
      address: 'a/p shivajinagar,mumbai,tal:mubai,dist:mumbai',
      department_Id: 5,
      role_Id: 2,
      date_Of_Joining: '2004-12-27'
    };
    const update = await repo.update(
      EmployeeDetails,
      employeeId,
      updatedDetails
    );

    expect(update).toBeFalsy();
  });
});
