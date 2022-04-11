"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Response_model_1 = __importDefault(require("../models/Response.model"));
const UserRepository_1 = __importDefault(require("../repository/UserRepository"));
let repo = new UserRepository_1.default();
let response = new Response_model_1.default();
class UserService {
    constructor() {
        /*
        login user
        */
        this.loginUser = (body) => __awaiter(this, void 0, void 0, function* () {
            let query = { email: body.email };
            let find = yield repo.get(query);
            if (find) {
                console.log(find);
                let checkPassword = yield bcrypt_1.default.compare(body.password, find.password);
                if (checkPassword) {
                    const token = jsonwebtoken_1.default.sign({
                        email: find.email,
                        id: find.id,
                        role_Id: find.role_Id
                    }, 'secret');
                    response.data = {
                        id: find.id,
                        email: find.email,
                        role_Id: find.role_Id,
                        token: token
                    };
                    response.message = 'Login success';
                    response.status = 200;
                    return response;
                }
                else {
                    response.data = {};
                    response.message = 'Incorrect Password';
                    response.status = 401;
                    return response;
                }
            }
            else {
                response.data = {};
                response.message = 'User Not Found';
                response.status = 404;
                return response;
            }
        });
    }
}
exports.default = UserService;
