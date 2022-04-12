import { createConnection } from 'typeorm';
import { EmployeeDetails } from '../entity/Employee';

export default class EmployeeRepository {
  public get = async (query: {}) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(EmployeeDetails);

        let find = await repo.findOne(query);

        await connection.close();

        return find;
      });
    } catch (error) {
      return error;
    }
  };
}
