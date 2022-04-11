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
const Repository_1 = __importDefault(require("../repository/Repository"));
const EmployeeDetailsService_1 = __importDefault(require("../services/EmployeeDetailsService"));
let employeeService = new EmployeeDetailsService_1.default();
const faker_1 = __importDefault(require("faker"));
jest.mock('../repository/repository', () => {
    return {
        getAll: jest.fn()
    };
});
let repo = new Repository_1.default();
describe('Service Test', () => {
    it('when given employee details should call add method from repository', () => __awaiter(void 0, void 0, void 0, function* () {
        let newUser = {
            firstName: faker_1.default.name.findName(),
            lastName: faker_1.default.name.lastName(),
            email: faker_1.default.internet.email(),
            password: faker_1.default.internet.password(),
            address: faker_1.default.address.streetAddress(),
            department_Id: faker_1.default.datatype.number(),
            role_Id: faker_1.default.datatype.number(),
            mobileNo: faker_1.default.datatype.number(),
            // mobileNo: faker.phone.phoneNumber(),
            aadharId: faker_1.default.datatype.number(100),
            date_Of_Joining: '2004-12-27'
        };
        yield employeeService.addEmployeeDetails(newUser);
        expect(repo.add).toHaveBeenCalled();
    }));
    it('should call getAll() method of repository', () => __awaiter(void 0, void 0, void 0, function* () {
        repo.getAll = jest.fn().mockImplementation(() => []);
        yield employeeService.getAllEmployeeDetails();
        expect(repo.getAll).toHaveBeenCalled();
    }));
    it('when given employeeid should return employee details ', () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeId = 1;
        yield employeeService.getEmployeeDetails(employeeId);
        expect(repo.get).toHaveBeenCalled;
    }));
    it('when given employeeid ,should delete the given employee', () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeId = 1;
        yield employeeService.deleteEmployeeDetails(employeeId);
        expect(repo.delete).toHaveBeenCalled;
    }));
    it('when given employeeid and employee details,should update the given employee details', () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeId = 1;
        let updatedDetails = {
            firstName: faker_1.default.name.findName(),
            lastName: faker_1.default.name.lastName(),
            email: faker_1.default.internet.email(),
            password: faker_1.default.internet.password(),
            address: faker_1.default.address.streetAddress(),
            department_Id: faker_1.default.datatype.number(),
            role_Id: faker_1.default.datatype.number(),
            mobileNo: faker_1.default.datatype.number(),
            // mobileNo: faker.phone.phoneNumber(),
            aadharId: faker_1.default.datatype.number(100),
            date_Of_Joining: '2004-12-27'
        };
        yield employeeService.updateEmployeeDetails(employeeId, updatedDetails);
        expect(repo.update).toHaveBeenCalled;
    }));
});
