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
const RoleService_1 = __importDefault(require("../services/RoleService"));
class RoleController {
    constructor() {
        this.RoleService = new RoleService_1.default();
        this.addRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.RoleService.addRole(req.body);
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.getAllRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.RoleService.getAllRole();
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.getRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.RoleService.getRole(req.params.id);
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.RoleService.deleteRole(req.params.id);
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.updateRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.RoleService.updateRole(req.params.id, req.body);
                res.status(http_status_codes_1.default.OK).send(data);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = RoleController;
