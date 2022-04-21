import { createConnection } from 'typeorm';
import { Employee } from '../entity/Employee';

export default class UserRepository {
  public get = async (query: {}) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Employee);

        let find = await repo.findOne(query);

        await connection.close();

        return find;
      });
    } catch (error) {
      return error;
    }
  };
}
