import Repository from '../../repository/RoleRepository';
let repo = new Repository();
import faker from 'faker';

let newRole = { roleName: 'newRole' };
let role_id = 7;
let total_rows = 7;

describe('Repository', () => {
  it('when given Role details should create new Rolee and return the created Role', async () => {
    const createdRole = await repo.add(newRole);
    expect(createdRole).toMatchObject(newRole);
  });

  it('should return all Roles', async () => {
    const res = await repo.getAll();
    expect(res.length).toBe(total_rows);
  });

  it('when given Role_id should return Role details ', async () => {
    let query = { id: role_id };
    const role = await repo.get(query);
    expect(role.id).toBe(role_id);
  });

  it('when given Role_id and Role details,should update the given Role details', async () => {
    await repo.update(role_id, newRole);
    const findUpdated = await repo.get(role_id);

    expect(findUpdated).toMatchObject(newRole);
  });
});
