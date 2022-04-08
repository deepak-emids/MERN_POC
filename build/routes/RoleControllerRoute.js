"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RoleController_1 = __importDefault(require("../controllers/RoleController"));
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const UserValidator_1 = __importDefault(require("../validators/UserValidator"));
class RoleControllerRoute {
    constructor() {
        this.RoleController = new RoleController_1.default();
        this.router = express_1.default.Router();
        this.validator = new UserValidator_1.default();
        this.routes = () => {
            /*
            route to add all RoleController
            */
            this.router.post('/', auth_middleware_1.userAuth, this.validator.roleValidator, this.RoleController.addRole);
            this.router.get('/', auth_middleware_1.userAuth, this.RoleController.getAllRole);
            this.router.get('/:id', auth_middleware_1.userAuth, this.RoleController.getRole);
            this.router.delete('/:id', auth_middleware_1.userAuth, this.RoleController.deleteRole);
            this.router.put('/:id', this.validator.updateRole, auth_middleware_1.userAuth, this.RoleController.updateRole);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = RoleControllerRoute;
