"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DepartmentController_1 = __importDefault(require("../controllers/DepartmentController"));
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const UserValidator_1 = __importDefault(require("../validators/UserValidator"));
class DepartmentControllerRoute {
    constructor() {
        this.DepartmentController = new DepartmentController_1.default();
        this.router = express_1.default.Router();
        this.validator = new UserValidator_1.default();
        this.routes = () => {
            /*
            route to add all DepartmentController
            */
            this.router.post('/', auth_middleware_1.userAuth, this.validator.departmentValidator, this.DepartmentController.addDepartment);
            this.router.get('/', auth_middleware_1.userAuth, this.DepartmentController.getAllDepartment);
            this.router.get('/:id', auth_middleware_1.userAuth, this.DepartmentController.getDepartment);
            this.router.delete('/:id', auth_middleware_1.userAuth, this.DepartmentController.deleteDepartment);
            this.router.put('/:id', auth_middleware_1.userAuth, this.validator.updateDepartment, this.DepartmentController.updateDepartment);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = DepartmentControllerRoute;
