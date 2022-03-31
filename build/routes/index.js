"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_route_1 = __importDefault(require("./user.route"));
const employee_route_1 = __importDefault(require("../routes/employee.route"));
const dept_route_1 = __importDefault(require("../routes/dept.route"));
const role_route_1 = __importDefault(require("../routes/role.route"));
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
    router.get('/', (req, res) => {
        res.json('Welcome to CRM app');
    });
    router.use('/users', new user_route_1.default().getRoutes());
    router.use('/employee', new employee_route_1.default().getRoutes());
    router.use('/department', new dept_route_1.default().getRoutes());
    router.use('/role', new role_route_1.default().getRoutes());
    return router;
};
exports.default = routes;
