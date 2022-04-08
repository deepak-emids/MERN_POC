"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
class UserValidator {
    constructor() {
        this.newEmployee = (req, res, next) => {
            const schema = joi_1.default.object({
                firstName: joi_1.default.string().alphanum().min(2).max(20).required(),
                lastName: joi_1.default.string().alphanum().min(2).max(20).required(),
                email: joi_1.default.string().email().required(),
                password: joi_1.default.string()
                    .alphanum()
                    .min(3)
                    .max(20)
                    .required()
                    .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
                address: joi_1.default.string().min(3).max(100).optional(),
                department_Id: joi_1.default.number().required(),
                role_Id: joi_1.default.number().required(),
                mobileNo: joi_1.default.number().optional(),
                aadharId: joi_1.default.number().integer().required(),
                date_Of_Joining: joi_1.default.date().required()
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            else {
                next();
            }
        };
        this.updateEmployee = (req, res, next) => {
            const schema = joi_1.default.object({
                firstName: joi_1.default.string().alphanum().min(2).max(20),
                lastName: joi_1.default.string().alphanum().min(2).max(20),
                email: joi_1.default.string().email(),
                password: joi_1.default.string()
                    .alphanum()
                    .min(3)
                    .max(20)
                    .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
                address: joi_1.default.string().min(3).max(100).optional(),
                department_Id: joi_1.default.number(),
                role_Id: joi_1.default.number(),
                mobileNo: joi_1.default.number().optional(),
                aadharId: joi_1.default.number().integer(),
                date_Of_Joining: joi_1.default.date()
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            else {
                next();
            }
        };
        this.loginUser = (req, res, next) => {
            const schema = joi_1.default.object({
                email: joi_1.default.string().email().required(),
                password: joi_1.default.string()
                    .alphanum()
                    .min(3)
                    .max(20)
                    .required()
                    .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            else {
                next();
            }
        };
        this.roleValidator = (req, res, next) => {
            const schema = joi_1.default.object({
                roleName: joi_1.default.string().alphanum().min(2).max(20).required()
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            else {
                next();
            }
        };
        this.departmentValidator = (req, res, next) => {
            const schema = joi_1.default.object({
                departmentName: joi_1.default.string().alphanum().min(2).max(20).required()
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            else {
                next();
            }
        };
        this.updateRole = (req, res, next) => {
            const schema = joi_1.default.object({
                roleName: joi_1.default.string().alphanum().min(2).max(20)
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            else {
                next();
            }
        };
        this.updateDepartment = (req, res, next) => {
            const schema = joi_1.default.object({
                departmentName: joi_1.default.string().alphanum().min(2).max(20)
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            else {
                next();
            }
        };
    }
}
exports.default = UserValidator;
