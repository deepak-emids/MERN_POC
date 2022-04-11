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
const RoleRepository_1 = __importDefault(require("../repository/RoleRepository"));
const Response_model_1 = __importDefault(require("../models/Response.model"));
let repo = new RoleRepository_1.default();
class RoleService {
    constructor() {
        /*
        add emp
        */
        this.addRole = (body) => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let query = { roleName: body.roleName };
            let result = yield repo.get(query);
            if (result) {
                response.data = {};
                response.message = 'Role Already Exists';
                response.status = 201;
            }
            else {
                const role = new role_1.Role();
                role.roleName = body.roleName;
                let newRole = yield repo.add(role);
                response.data = newRole;
                response.message = 'Role Data Added';
                response.status = 201;
            }
            return response;
        });
        /*
        get Roles
        */
        this.getAllRole = () => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let result = yield repo.getAll();
            if (result.length > 0) {
                response.data = result;
                response.message = 'Roles Fetched';
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
            let response = new Response_model_1.default();
            let query = { id: id };
            let result = yield repo.get(query);
            if (result) {
                response.data = result;
                response.message = 'Role Fetched';
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
            let response = new Response_model_1.default();
            let details = yield repo.get(id);
            let newData = Object.assign({}, body);
            let result = yield repo.update(id, newData);
            if (result) {
                response.data = result;
                response.message = 'Role Updated';
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
            let response = new Response_model_1.default();
            let result = yield repo.delete(id);
            if (result) {
                response.data = result;
                response.message = 'Role Deleted';
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
