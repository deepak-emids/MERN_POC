import Repository from '../../src/repository/repository';
let repo = new Repository();
import { EmployeeDetails } from '../../src/entity/employee';

describe('AppController', () => {
  it('should get all employees', async () => {
    const res = await repo.getAll(EmployeeDetails);

    console.log(res.length, 'response lenth');
    expect(res.length).toBe(9);
  });
});
