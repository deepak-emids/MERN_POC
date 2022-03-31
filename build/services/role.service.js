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
require("reflect-metadata");
const role_1 = require("../entity/role");
const repository_1 = __importDefault(require("../repository/repository"));
const response_model_1 = __importDefault(require("../models/response.model"));
let response = new response_model_1.default();
let repository = new repository_1.default();
class RoleService {
    constructor() {
        /*
        add emp
        */
        this.addRole = (body) => __awaiter(this, void 0, void 0, function* () {
            const role = new role_1.Role();
            //assign values
            role.roleName = body.roleName;
            let find = yield repository.add(role_1.Role, role);
            //response object
            response.data = find;
            response.message = 'Role Data Added';
            response.status = 201;
            //return saved data
            return response;
        });
        /*
        get Roles
        */
        this.getAllRole = () => __awaiter(this, void 0, void 0, function* () {
            let result = yield repository.getAll(role_1.Role);
            if (result.length > 0) {
                response.data = result;
                response.message = 'Role deleted';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Role Not Found';
                response.status = 404;
                return response;
            }
        });
        /*
        get Roles
        */
        this.getRole = (id) => __awaiter(this, void 0, void 0, function* () {
            let query = { id: id };
            let result = yield repository.get(role_1.Role, query);
            if (result.length > 0) {
                response.data = result;
                response.message = 'Role deleted';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Role Not Found';
                response.status = 404;
                return response;
            }
        });
        /*
        update Role
        */
        this.updateRole = (id, body) => __awaiter(this, void 0, void 0, function* () {
            let details = yield repository.get(role_1.Role, id);
            let newData = {
                id: id,
                RoleName: body.roleName ? body.roleName : details.roleName
            };
            let result = yield repository.update(role_1.Role, id, newData);
            if (result.length > 0) {
                response.data = result;
                response.message = 'Role deleted';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Role Not Found';
                response.status = 404;
                return response;
            }
        });
        /*
        delete Role work details
        */
        this.deleteRole = (id) => __awaiter(this, void 0, void 0, function* () {
            let result = yield repository.delete(role_1.Role, id);
            if (result.length > 0) {
                response.data = result;
                response.message = 'Role deleted';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Role Not Found';
                response.status = 404;
                return response;
            }
        });
    }
}
exports.default = RoleService;
