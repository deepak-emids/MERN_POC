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
const department_1 = require("../entity/department");
const DepartmentRepository_1 = __importDefault(require("../repository/DepartmentRepository"));
const Response_model_1 = __importDefault(require("../models/Response.model"));
let repo = new DepartmentRepository_1.default();
class DepartmentService {
    constructor() {
        // private departmentService;
        // constructor() {
        //   this.departmentService = new DepartmentService();
        // }
        /*
        add emp
        */
        this.addDepartment = (body) => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let query = {
                departmentName: body.departmentName
            };
            let result = yield repo.get(query);
            if (result) {
                response.data = {};
                response.message = 'Department Already Exists';
                response.status = 409;
            }
            else {
                const dept = new department_1.Department();
                dept.departmentName = body.departmentName;
                let newDepartment = yield repo.add(dept);
                response.data = newDepartment;
                response.message = 'Department Added';
                response.status = 201;
            }
            return response;
        });
        /*
        get Departments
        */
        this.getAllDepartment = () => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let result = yield repo.getAll();
            if (result.length > 0) {
                response.data = result;
                response.message = 'Departments Fetched';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Department Not Found';
                response.status = 404;
                return response;
            }
        });
        /*
        get Departments
        */
        this.getDepartment = (id) => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let query = { id: id };
            let result = yield repo.get(query);
            if (result) {
                response.data = result;
                response.message = 'Department Fetched';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Department Not Found';
                response.status = 404;
                return response;
            }
        });
        /*
        update Department
        */
        this.updateDepartment = (id, body) => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let newData = Object.assign({}, body);
            let query = {
                id: id
            };
            let result = yield repo.get(query);
            if (result) {
                let result = yield repo.update(id, newData);
                response.data = result;
                response.message = 'Department Updated';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Department Not Found';
                response.status = 404;
                return response;
            }
        });
        /*
        delete Department work details
        */
        this.deleteDepartment = (id) => __awaiter(this, void 0, void 0, function* () {
            let response = new Response_model_1.default();
            let query = {
                id: id
            };
            let result = yield repo.get(query);
            if (result) {
                let result = yield repo.delete(id);
                response.data = result;
                response.message = 'Department deleted';
                response.status = 200;
                return response;
            }
            else {
                response.data = {};
                response.message = 'Department Not Found';
                response.status = 404;
                return response;
            }
        });
    }
}
exports.default = DepartmentService;
