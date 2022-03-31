"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDetails = void 0;
const typeorm_1 = require("typeorm");
let EmployeeDetails = class EmployeeDetails {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], EmployeeDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 80 })
], EmployeeDetails.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 80 })
], EmployeeDetails.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 80 })
], EmployeeDetails.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 80 })
], EmployeeDetails.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 })
], EmployeeDetails.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' })
], EmployeeDetails.prototype, "department_Id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' })
], EmployeeDetails.prototype, "role_Id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' })
], EmployeeDetails.prototype, "mobileNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' })
], EmployeeDetails.prototype, "aadharId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' })
], EmployeeDetails.prototype, "date_Of_Joining", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true })
], EmployeeDetails.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false })
], EmployeeDetails.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)'
    })
], EmployeeDetails.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
], EmployeeDetails.prototype, "updated_at", void 0);
EmployeeDetails = __decorate([
    (0, typeorm_1.Entity)()
], EmployeeDetails);
exports.EmployeeDetails = EmployeeDetails;
