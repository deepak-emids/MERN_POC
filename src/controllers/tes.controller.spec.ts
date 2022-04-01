import Repository from '../repository/repository';
let repo = new Repository();
import { EmployeeDetails } from '../entity/employee';

describe('AppController', () => {
  it('should get all employees', async () => {
    const res = await repo.getAll(EmployeeDetails);

    console.log(res.length, 'response lenth');
    expect(res.length).toBe(21);
  });
});