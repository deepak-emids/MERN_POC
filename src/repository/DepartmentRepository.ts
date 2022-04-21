import { createConnection } from 'typeorm';
import { Department } from '../entity/Department';
import DepartmentDetails from '../models/DepartmentDetails';

export default class DepartmentRepository {
  public add = async (object: DepartmentDetails) => {
    try {
      let result = await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Department);

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
        let repo = connection.getRepository(Department);

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
        let repo = connection.getRepository(Department);

        let find = await repo.findOne(query);

        await connection.close();

        return find;
      });
    } catch (error) {
      return error;
    }
  };

  public delete = async (department) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Department);

        await repo.remove(department);

        await connection.close();

        return true;
      });
    } catch (error) {
      return error;
    }
  };

  public update = async (id: number, object: DepartmentDetails) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Department);

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
