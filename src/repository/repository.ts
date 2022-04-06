import { createConnection } from 'typeorm';

export default class Repository {
  public add = async (entity, object) => {
    try {
      let result = await createConnection().then(async (connection) => {
        let repo = connection.getRepository(entity);

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

  public async getAll(entity) {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(entity);

        let find = await repo.find();

        await connection.close();

        return find;
      });
    } catch (error) {
      return error;
    }
  }

  public get = async (entity, query) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(entity);

        let find = await repo.findOne(query);

        await connection.close();

        return find;
      });
    } catch (error) {
      return error;
    }
  };

  public delete = async (entity, id) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(entity);

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

  public update = async (entity, id, object) => {
    try {
      return await createConnection().then(async (connection) => {
        let repo = connection.getRepository(entity);

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
