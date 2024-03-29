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
const bcrypt_1 = __importDefault(require("bcrypt"));
const employee_1 = require("../entity/employee");
const Response_model_1 = __importDefault(require("../models/Response.model"));
const EmployeeRepository_1 = __importDefault(require("../repository/EmployeeRepository"));
let repo = new EmployeeRepository_1.default();
class EmployeeDetailsService {
    constructor() {
        this.getAllEmployeeDetails = () => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let result = yield repo.getAll();
            if (result) {
                response.data = result;
                response.message = 'EmployeeDetails Fetched';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'EmployeeDetails Not Found';
                response.status = 404;
                return response;
            }
        });
        this.getEmployeeDetails = (id) => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let query = { id: id };
            let result = yield repo.get(query);
            if (result) {
                response.data = result;
                response.message = 'Employee Details Fetched';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'EmployeeDetails Not Found';
                response.status = 404;
                return response;
            }
        });
        this.updateEmployeeDetails = (id, body) => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let newData = Object.assign({}, body);
            let result = yield repo.update(id, newData);
            if (result) {
                response.data = result;
                response.message = 'EmployeeDetails updated';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Employee Not Found';
                response.status = 404;
                return response;
            }
        });
        this.deleteEmployeeDetails = (id) => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let result = yield repo.delete(id);
            if (result) {
                response.data = {};
                response.message = 'EmployeeDetails deleted';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Employee Not Found';
                response.status = 404;
                return response;
            }
        });
    }
    addEmployeeDetails(body) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let emp = new employee_1.EmployeeDetails();
            let query = { email: body.email };
            let result = yield repo.get(query);
            console.log(result);
            if (result) {
                response.data = result;
                response.message = 'Employee Already Exists';
                response.status = 200;
                return response;
            }
            else {
                const hash = yield bcrypt_1.default.hash(body.password, 8);
                body.password = hash;
                emp = Object.assign({}, body);
                let addedEmployee = yield repo.add(emp);
                response.data = addedEmployee;
                response.message = 'Employee Details  Added';
                response.status = 201;
                return response;
            }
        });
    }
}
exports.default = EmployeeDetailsService;
