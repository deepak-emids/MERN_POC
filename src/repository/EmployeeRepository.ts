import { createConnection } from 'typeorm';
import { EmployeeDetails } from '../entity/employee';

export default class EmployeeRepository {
  public add = async (object) => {
    try {
      let result = await createConnection().then(async (connection) => {
        let repo = connection.getRepository(EmployeeDetails);

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
        let repo = connection.getRepository(EmployeeDetails);

        let find = await repo.find();

        await connection.close();

        return find;
      });
    } catch (error) {
      return error;
    }
  }

  public get = async (query) => {
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

  public delete = async (id) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(EmployeeDetails);

        let foundEmp = await repo.find({ id: id });

        if (foundEmp.length > 0) {
          await repo.remove(foundEmp[0]);

          let Emp = await repo.findOne({ id: id });

          await connection.close();

          if (Emp) return false;
          else return true;
        } else {
          await connection.close();

          return false;
        }
      });
    } catch (error) {
      return error;
    }
  };

  public update = async (id, object) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(EmployeeDetails);

        let foundEmp = await repo.find({ id: id });

        if (foundEmp.length > 0) {
          await repo.update({ id: id }, object);

          let find = await repo.findOne({ id: id });

          await connection.close();

          return find;
        } else {
          await connection.close();

          return false;
        }
      });
    } catch (error) {
      return error;
    }
  };
}
