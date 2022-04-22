import Repository from '../../repository/DepartmentRepository';
let repo = new Repository();
import faker from 'faker';
let department_id = 9;
let total_rows = 10;

describe('Repository', () => {
  it('when given department details should create new departmente and return the created department', async () => {
    let newDepartment = {
      departmentName: faker.name.findName()
    };

    const createdDepartment = await repo.add(newDepartment);
    expect(createdDepartment).toMatchObject(newDepartment);
  });

  it('should return all departments', async () => {
    const res = await repo.getAll();
    expect(res.length).toBe(total_rows);
  });

  it('when given department_id should return department details ', async () => {
    let query = { id: department_id };
    const department = await repo.get(query);
    expect(department.id).toBe(department_id);
  });

  //   it('when given department_id ,should delete the given department', async () => {
  //     await repo.delete(department_id);
  //     const findDeleted = await repo.get(department_id);

  //     expect(findDeleted).toBeFalsy();
  //   });

  it('when given department_id and department details,should update the given department details', async () => {
    let newDepartment = {
      departmentName: faker.name.findName()
    };
    await repo.update(department_id, newDepartment);
    const findUpdated = await repo.get(department_id);

    expect(findUpdated).toMatchObject(newDepartment);
  });
});
