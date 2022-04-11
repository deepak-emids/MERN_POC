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
const DepartmentService_1 = __importDefault(require("../services/DepartmentService"));
const logger_1 = __importDefault(require("../config/logger"));
class DepartmentController {
    constructor() {
        this.DepartmentService = new DepartmentService_1.default();
        this.addDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.addDepartment(req.body);
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
        this.getAllDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.getAllDepartment();
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
        this.getDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.getDepartment(req.params.id);
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
        this.deleteDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.deleteDepartment(req.params.id);
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
        this.updateDepartment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.DepartmentService.updateDepartment(req.params.id, req.body);
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
    }
}
exports.default = DepartmentController;
