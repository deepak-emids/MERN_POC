import faker from 'faker';

let newEmployee = {
  firstName: faker.name.findName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  address: faker.address.streetAddress(),
  department_Id: faker.random.number(),
  role_Id: faker.random.number(),
  date_of_birth: faker.date.past(2),
  city: faker.address.city(),
  country: faker.address.country(),
  mobileNo: faker.phone.phoneNumber(),
  aadharId: faker.random.number(100),
  date_Of_Joining: faker.date.past(2)
};

console.log(newEmployee);
