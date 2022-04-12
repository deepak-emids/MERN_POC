import { createConnection } from 'typeorm';
import { Role } from '../entity/Role';
import RoleDetails from '../models/RoleDetails';

export default class RoleRepository {
  public add = async (object: RoleDetails) => {
    try {
      let result = await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Role);

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
        let repo = connection.getRepository(Role);

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
        let repo = connection.getRepository(Role);

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
        let repo = connection.getRepository(Role);

        let foundEmp = await repo.find({ id: id });

        if (foundEmp.length > 0) {
          await repo.remove(foundEmp[0]);

          let Emp = await repo.findOne({ id: id });

          await connection.close();

          if (Emp) return false;
          else return true;
        } else {
        }
      });
    } catch (error) {
      return error;
    }
  };

  public update = async (id: number, object: RoleDetails) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(Role);

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
