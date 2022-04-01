import Repository from '../../src/repository/repository';
let repo = new Repository();
import { EmployeeDetails } from '../../src/entity/employee';

describe('AppController', () => {
  it('should create new Employee', async () => {
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

  it('should get all employees', async () => {
    const res = await repo.getAll(EmployeeDetails);

    console.log(res.length, 'response lenth');
    expect(res.length).toBe(9);
  });
});
