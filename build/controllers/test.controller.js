"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_service_1 = __importDefault(require("./testing.service"));
class Test {
    constructor() {
        this.testService = new testing_service_1.default();
        this.testMethod = () => {
            const responseData = this.testService.test();
            return responseData;
        };
    }
}
exports.default = Test;
