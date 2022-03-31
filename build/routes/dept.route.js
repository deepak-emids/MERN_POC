"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const department_controller_1 = __importDefault(require("../controllers/department.controller"));
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
class DepartmentControllerRoute {
    //   private UserValidator = new userValidator();
    constructor() {
        this.DepartmentController = new department_controller_1.default();
        this.router = express_1.default.Router();
        this.routes = () => {
            /*
            route to add all DepartmentController
            */
            this.router.post('/', auth_middleware_1.userAuth, this.DepartmentController.addDepartment);
            this.router.get('/', auth_middleware_1.userAuth, this.DepartmentController.getAllDepartment);
            this.router.get('/:id', auth_middleware_1.userAuth, this.DepartmentController.getDepartment);
            this.router.delete('/:id', auth_middleware_1.userAuth, this.DepartmentController.deleteDepartment);
            this.router.put('/:id', auth_middleware_1.userAuth, this.DepartmentController.updateDepartment);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = DepartmentControllerRoute;
