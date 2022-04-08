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
const EmployeeDetailsService_1 = __importDefault(require("../services/EmployeeDetailsService"));
const logger_1 = __importDefault(require("../config/logger"));
class EmployeeDetailsController {
    constructor() {
        this.EmployeeDetailsService = new EmployeeDetailsService_1.default();
        this.addEmployeeDetails = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.EmployeeDetailsService.addEmployeeDetails(req.body);
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
        this.getAllEmployeeDetails = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.EmployeeDetailsService.getAllEmployeeDetails();
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
        this.getEmployeeDetails = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.EmployeeDetailsService.getEmployeeDetails(req.params.id);
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
        this.deleteEmployeeDetails = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.EmployeeDetailsService.deleteEmployeeDetails(req.params.id);
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
        this.updateEmployeeDetails = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.EmployeeDetailsService.updateEmployeeDetails(req.params.id, req.body);
                res.status(data.status).send(data);
            }
            catch (error) {
                logger_1.default.logger.error(error);
                next(error);
            }
        });
    }
}
exports.default = EmployeeDetailsController;
