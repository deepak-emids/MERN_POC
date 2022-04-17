import { createConnection } from 'typeorm';
import { Employee } from '../entity/Employee';
import EmployeeData from '../models/EmployeeData';

export default class EmployeeRepository {
  public add = async (object: EmployeeData) => {
    try {
      let result = await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Employee);

        await repo.save(object);

        let find = await repo.find();

        await connection.close();

        return find;
      });

      return result[result.length - 1];
    } catch (error) {
      return error;
    }
  };

  public async getAll() {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Employee);

        let find = await repo.find();

        await connection.close();

        return find;
      });
    } catch (error) {
      return error;
    }
  }

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

  public delete = async (id: number) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Employee);

        let foundEmp = await repo.find({ id: id });

        if (foundEmp.length > 0) {
          await repo.remove(foundEmp[0]);

          await connection.close();

          return true;
        } else {
          await connection.close();

          return false;
        }
      });
    } catch (error) {
      return error;
    }
  };

  public update = async (id: number, object) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Employee);

        await repo.update({ id: id }, object);

        let find = await repo.findOne({ id: id });

        await connection.close();

        return find;
      });
    } catch (error) {
      return error;
    }
  };
}
