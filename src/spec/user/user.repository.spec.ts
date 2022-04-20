import Repository from '../../repository/UserRepository';
let repo = new Repository();

let email = { email: 'admin222221@gmail.com' };

describe('Repository', () => {
  it('when given a Service methods it should return type of method to be function', async () => {
    expect(typeof repo.get).toBe('function');
  });

  it('when given a Service method it should be defined', async () => {
    expect(repo.get).toBeDefined();
  });

  it('when given a Service method it should be defined', async () => {
    let result = await repo.get(email);
    expect(result.email).toBe(email.email);
  });
});
