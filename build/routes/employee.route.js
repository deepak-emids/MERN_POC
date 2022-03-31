"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_controller_1 = __importDefault(require("../controllers/employee.controller"));
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
class EmployeeDetailsRoute {
    //   private UserValidator = new userValidator();
    constructor() {
        this.EmployeeDetailsController = new employee_controller_1.default();
        this.router = express_1.default.Router();
        this.routes = () => {
            /*
            route to add all EmployeeDetails
            */
            this.router.post('/', auth_middleware_1.userAuth, this.EmployeeDetailsController.addEmployeeDetails);
            this.router.get('/', auth_middleware_1.userAuth, this.EmployeeDetailsController.getAllEmployeeDetails);
            this.router.get('/:id', auth_middleware_1.userAuth, this.EmployeeDetailsController.getEmployeeDetails);
            this.router.delete('/:id', auth_middleware_1.userAuth, this.EmployeeDetailsController.deleteEmployeeDetails);
            this.router.put('/:id', auth_middleware_1.userAuth, this.EmployeeDetailsController.updateEmployeeDetails);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = EmployeeDetailsRoute;
