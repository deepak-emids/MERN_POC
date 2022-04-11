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
let repo = new Repository_1.default();
const employee_1 = require("../entity/employee");
const faker_1 = __importDefault(require("faker"));
describe('Repository', () => {
    it('when given employee details should create new employeee and return the created employee', () => __awaiter(void 0, void 0, void 0, function* () {
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
        console.log(newUser, 'sent');
        const createdUser = yield repo.add(employee_1.EmployeeDetails, newUser);
        console.log(createdUser, 'creataed');
        expect(createdUser).toMatchObject(newUser);
    }));
    it('when given incorrect employee details should not create new employeee', () => __awaiter(void 0, void 0, void 0, function* () {
        let newUser = {
            firstName: faker_1.default.name.findName(),
            email: faker_1.default.internet.email(),
            password: faker_1.default.internet.password(),
            address: faker_1.default.address.streetAddress(),
            department_Id: faker_1.default.datatype.number(),
            role_Id: faker_1.default.datatype.number(),
            mobileNo: 123456789,
            aadharId: faker_1.default.datatype.number(100),
            date_Of_Joining: '2004-12-27'
        };
        const createdUser = yield repo.add(employee_1.EmployeeDetails, newUser);
        console.log(createdUser);
        expect(createdUser).toThrowError();
    }));
    it('should return all employees', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield repo.getAll(employee_1.EmployeeDetails);
        expect(res.length).toBe(9);
    }));
    it('when given employeeid should return employee details ', () => __awaiter(void 0, void 0, void 0, function* () {
        let employeeId = 5;
        let query = { id: employeeId };
        const employee = yield repo.get(employee_1.EmployeeDetails, query);
        expect(employee.id).toBe(employeeId);
    }));
    it('when given falsy or employeeid is not present should return employee details ', () => __awaiter(void 0, void 0, void 0, function* () {
        let employeeId = 4;
        let query = { id: employeeId };
        const employee = yield repo.get(employee_1.EmployeeDetails, query);
        expect(employee).toBeFalsy();
    }));
    it('when given employeeid ,should delete the given employee', () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeId = 3;
        yield repo.delete(employee_1.EmployeeDetails, employeeId);
        const findDeleted = yield repo.get(employee_1.EmployeeDetails, employeeId);
        expect(findDeleted).toBeFalsy();
    }));
    it('when given employeeid not present db,should return falsy value', () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeId = 1;
        yield repo.delete(employee_1.EmployeeDetails, employeeId);
        const findDeleted = yield repo.get(employee_1.EmployeeDetails, employeeId);
        expect(findDeleted).toBeFalsy();
    }));
    it('when given employeeid and employee details,should update the given employee details', () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeId = 5;
        let updatedDetails = {};
        yield repo.update(employee_1.EmployeeDetails, employeeId, updatedDetails);
        const findUpdated = yield repo.get(employee_1.EmployeeDetails, employeeId);
        expect(findUpdated).toMatchObject(updatedDetails);
    }));
    it('when given incorrect employeeid,should not update the given employee details', () => __awaiter(void 0, void 0, void 0, function* () {
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
            aadharId: faker_1.default.datatype.number(100),
            date_Of_Joining: '2004-12-27'
        };
        const update = yield repo.update(employee_1.EmployeeDetails, employeeId, updatedDetails);
        expect(update).toBeFalsy();
    }));
});
