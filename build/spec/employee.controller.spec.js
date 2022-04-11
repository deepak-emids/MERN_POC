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
const node_mocks_http_1 = __importDefault(require("node-mocks-http"));
const EmployeeDetailsController_1 = __importDefault(require("../controllers/EmployeeDetailsController"));
const EmployeeDetailsService_1 = __importDefault(require("../services/EmployeeDetailsService"));
describe('testing employee controller', () => {
    jest.mock('../services/EmployeeDetailsService', () => {
        return {
            getAllEmployeeDetails: jest.fn()
        };
    });
    let employeeService = new EmployeeDetailsService_1.default();
    let employeeController = new EmployeeDetailsController_1.default();
    let req, res, next;
    beforeEach(() => {
        req = node_mocks_http_1.default.createRequest({});
        res = node_mocks_http_1.default.createResponse({});
        next = null;
    });
    it.only('should call getAllEmployee from service', () => __awaiter(void 0, void 0, void 0, function* () {
        employeeService.getAllEmployeeDetails = jest
            .fn()
            .mockImplementation(() => { });
        yield employeeController.getAllEmployeeDetails(req, res, next);
        expect(employeeService.getAllEmployeeDetails).toHaveBeenCalled();
    }));
});
