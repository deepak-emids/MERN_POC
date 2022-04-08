"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const EmployeeDetailsRoute_1 = __importDefault(require("./EmployeeDetailsRoute"));
const DepartmentControllerRoute_1 = __importDefault(require("./DepartmentControllerRoute"));
const RoleControllerRoute_1 = __importDefault(require("./RoleControllerRoute"));
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
    router.get('/', (req, res) => {
        res.json('Welcome to CRM app');
    });
    router.use('/users', new UserRoutes_1.default().getRoutes());
    router.use('/employee', new EmployeeDetailsRoute_1.default().getRoutes());
    router.use('/department', new DepartmentControllerRoute_1.default().getRoutes());
    router.use('/role', new RoleControllerRoute_1.default().getRoutes());
    return router;
};
exports.default = routes;
