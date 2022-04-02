import {
  createConnection,
  MetadataWithSuchNameAlreadyExistsError
} from 'typeorm';

import { loggers } from 'winston';

class Repository {
  /**
   * Controller to add
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public add = async (entity, object) => {
    console.log(entity, object);

    try {
      let result = await createConnection().then(async (connection) => {
        //get table
        let repo = connection.getRepository(entity);

        //save table
        await repo.save(object);

        //get saved data
        let find = await repo.find();

        //close connection
        await connection.close();

        //return result
        return find;
      });

      return result[result.length - 1];
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  /**
   * Controller to get
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAll = async (entity) => {
    try {
      let result = await createConnection().then(async (connection) => {
        //get table
        let repo = connection.getRepository(entity);

        //get saved data
        let find = await repo.find();

        //close connection
        await connection.close();

        //return result
        return find;
      });

      return result;
    } catch (error) {
      return error;
    }
  };

  /**
   * Controller to get
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public get = async (entity, query) => {
    try {
      return await createConnection().then(async (connection) => {
        //get table
        let repo = connection.getRepository(entity);

        //get saved data
        let find = await repo.find(query);

        //close connection
        await connection.close();

        //return result
        return find;
      });
    } catch (error) {
      return error;
    }
  };

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public delete = async (entity, query) => {
    try {
      let result = await createConnection().then(async (connection) => {
        //get table
        let repo = connection.getRepository(entity);

        //find
        let foundEmp = await repo.find(query);

        if (foundEmp.length > 0) {
          await repo.remove(foundEmp[0]);

          let Emp = await repo.find();

          await connection.close();

          return Emp;
        } else {
          await connection.close();

          return false;
        }
      });

      return result;
    } catch (error) {
      return error;
    }
  };

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public update = async (entity, id, object) => {
    try {
      let result = await createConnection().then(async (connection) => {
        //get table
        let repo = connection.getRepository(entity);

        //find
        let foundEmp = await repo.find({ id: id });

        if (foundEmp.length > 0) {
          //update table
          await repo.update({ id: id }, object);

          //get saved data
          let find = await repo.find({ id: id });

          await connection.close();

          return find;
        } else {
          await connection.close();

          return false;
        }
      });

      return result;
    } catch (error) {
      return error;
    }
  };
}

export default Repository;
