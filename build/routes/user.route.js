"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_validator_1 = __importDefault(require("../validators/user.validator"));
class UserRoutes {
    constructor() {
        this.UserController = new user_controller_1.default();
        this.router = express_1.default.Router();
        this.UserValidator = new user_validator_1.default();
        this.routes = () => {
            //route to get all users
            this.router.post('/login', this.UserController.loginUser);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = UserRoutes;
