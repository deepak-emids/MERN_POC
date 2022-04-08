"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeDetailsController_1 = __importDefault(require("../controllers/EmployeeDetailsController"));
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const UserValidator_1 = __importDefault(require("../validators/UserValidator"));
class EmployeeDetailsRoute {
    //   private UserValidator = new userValidator();
    constructor() {
        this.EmployeeDetailsController = new EmployeeDetailsController_1.default();
        this.validator = new UserValidator_1.default();
        this.router = express_1.default.Router();
        this.routes = () => {
            /*
            route to add all EmployeeDetails
            */
            this.router.post('/', auth_middleware_1.userAuth, this.validator.newEmployee, this.EmployeeDetailsController.addEmployeeDetails);
            this.router.get('/', auth_middleware_1.userAuth, this.EmployeeDetailsController.getAllEmployeeDetails);
            this.router.get('/:id', auth_middleware_1.userAuth, this.EmployeeDetailsController.getEmployeeDetails);
            this.router.delete('/:id', auth_middleware_1.userAuth, this.EmployeeDetailsController.deleteEmployeeDetails);
            this.router.put('/:id', auth_middleware_1.userAuth, this.validator.updateEmployee, this.EmployeeDetailsController.updateEmployeeDetails);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = EmployeeDetailsRoute;
