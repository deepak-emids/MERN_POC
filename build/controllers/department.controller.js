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
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const department_service_1 = __importDefault(require("../services/department.service"));
class DepartmentController {
    constructor() {
        this.DepartmentService = new department_service_1.default();
        /**
         * Controller to get all users available
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.addDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.addDepartment(req.body);
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
        /**
         * Controller to get all users available
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.getAllDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.getAllDepartment();
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
        /**
         * Controller to get all users available
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.getDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.getDepartment(req.params.id);
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
        /**
         * Controller to get all users available
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.deleteDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.deleteDepartment(req.params.id);
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
        /**
         * Controller to get all users available
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.updateDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.updateDepartment(req.params.id, req.body);
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = DepartmentController;
