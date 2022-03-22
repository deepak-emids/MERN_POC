import express, { IRouter } from 'express';
const router = express.Router();

// import userRoute from './user.route';
import EmployeeRoute from '../routes/employee.route';
import deptRoute from '../routes/dept.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome to CRM app');
  });
  // router.use('/users', new userRoute().getRoutes());
  router.use('/employee', new EmployeeRoute().getRoutes());
  router.use('/dept', new deptRoute().getRoutes());
  // router.use('/project', new EmployeeRoute().getRoutes());

  return router;
};

export default routes;