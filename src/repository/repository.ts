import {
  createConnection,
  MetadataWithSuchNameAlreadyExistsError
} from 'typeorm';

import EmployeeData from '../models/employeeDetails.model';

import { loggers } from 'winston';

class Repository {
  /**
   * Controller to addEmployee
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public addEmployee = async (entity, object) => {
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

      return result;
    } catch (error) {
      return error;
    }
  };

  /**
   * Controller to get Employee
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllEmployee = async (entity) => {
    try {
      let result = await createConnection().then(async (connection) => {
        //get table
        let repo = connection.getRepository(entity);

        //get saved data
        let find = await repo.find({ id: id });

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
   * Controller to get Employee
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getEmployee = async (entity, id) => {
    try {
      let result = await createConnection().then(async (connection) => {
        //get table
        let repo = connection.getRepository(entity);

        //get saved data
        let find = await repo.find({ id: id });

        //close connection
        await connection.close();

        //return result
        return find[0];
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
  public deleteEmployee = async (entity, id) => {
    try {
      let result = await createConnection().then(async (connection) => {
        //get table
        let repo = connection.getRepository(entity);

        //find employee
        let foundEmp = await repo.find({ id: id });

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
  public updateEmployee = async (entity, id: number, object: EmployeeData) => {
    try {
      let result = await createConnection().then(async (connection) => {
        //get table
        let repo = connection.getRepository(entity);

        //update table
        await repo.update({ id: id }, object);

        //get saved data
        let find = await repo.find({ id: id });

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
}

export default Repository;
