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
const repository_1 = __importDefault(require("../repository/repository"));
const response_model_1 = __importDefault(require("../models/response.model"));
let response = new response_model_1.default();
let repository = new repository_1.default();
class DepartmentService {
    constructor() {
        /*
        add emp
        */
        this.addDepartment = (body) => __awaiter(this, void 0, void 0, function* () {
            const dept = new department_1.Department();
            //assign values
            dept.departmentName = body.departmentName;
            let find = yield repository.add(department_1.Department, dept);
            //response object
            response.data = find;
            response.message = 'Department Data Added';
            response.status = 201;
            //return saved data
            return response;
        });
        /*
        get Departments
        */
        this.getAllDepartment = () => __awaiter(this, void 0, void 0, function* () {
            let result = yield repository.getAll(department_1.Department);
            if (result.length > 0) {
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
        /*
        get Departments
        */
        this.getDepartment = (id) => __awaiter(this, void 0, void 0, function* () {
            let query = { id: id };
            let result = yield repository.get(department_1.Department, query);
            if (result.length > 0) {
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
        /*
        update Department
        */
        this.updateDepartment = (id, body) => __awaiter(this, void 0, void 0, function* () {
            let details = yield repository.get(department_1.Department, id);
            let newData = {
                id: id,
                departmentName: body.departmentName
                    ? body.departmentName
                    : details.departmentName
            };
            let result = yield repository.update(department_1.Department, id, newData);
            if (result.length > 0) {
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
        /*
        delete Department work details
        */
        this.deleteDepartment = (id) => __awaiter(this, void 0, void 0, function* () {
            let result = yield repository.delete(department_1.Department, id);
            if (result.length > 0) {
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
