"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserValidator_1 = __importDefault(require("../validators/UserValidator"));
class UserRoutes {
    constructor() {
        this.UserController = new UserController_1.default();
        this.router = express_1.default.Router();
        this.validator = new UserValidator_1.default();
        this.routes = () => {
            //route to get all users
            this.router.post('/login', this.validator.loginUser, this.UserController.loginUser);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = UserRoutes;
