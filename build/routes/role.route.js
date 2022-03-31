"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_controller_1 = __importDefault(require("../controllers/role.controller"));
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
class RoleControllerRoute {
    //   private UserValidator = new userValidator();
    constructor() {
        this.RoleController = new role_controller_1.default();
        this.router = express_1.default.Router();
        this.routes = () => {
            /*
            route to add all RoleController
            */
            this.router.post('/', auth_middleware_1.userAuth, this.RoleController.addRole);
            this.router.get('/', auth_middleware_1.userAuth, this.RoleController.getAllRole);
            this.router.get('/:id', auth_middleware_1.userAuth, this.RoleController.getRole);
            this.router.delete('/:id', auth_middleware_1.userAuth, this.RoleController.deleteRole);
            this.router.put('/:id', auth_middleware_1.userAuth, this.RoleController.updateRole);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = RoleControllerRoute;
