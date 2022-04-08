"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeDetailsService_1 = __importDefault(require("../services/EmployeeDetailsService"));
let employeeService = new EmployeeDetailsService_1.default();
exports.default = employeeService;
