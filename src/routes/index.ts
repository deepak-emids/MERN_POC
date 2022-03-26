import express, { IRouter } from 'express';
const router = express.Router();

// import userRoute from './user.route';
import EmployeeRoute from '../routes/employee.route';
import deptRoute from '../routes/dept.route';
import roleRoute from '../routes/role.route';

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
  router.use('/department', new deptRoute().getRoutes());
  router.use('/role', new roleRoute().getRoutes());

  return router;
};

export default routes;
