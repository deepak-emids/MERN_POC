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
const testing_1 = require("@nestjs/testing");
const test_controller_1 = __importDefault(require("./test.controller"));
//mock test fn
const testing_service_1 = __importDefault(require("./testing.service"));
testing_service_1.default.prototype.test = jest.fn().mockImplementationOnce(() => 'hello');
let testService = new testing_service_1.default();
//----------------------------------
let testController = new test_controller_1.default();
describe('AppController', () => {
    let appController;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const app = yield testing_1.Test.createTestingModule({
            controllers: [test_controller_1.default],
            providers: [testing_service_1.default]
        }).compile();
        appController = app.get(test_controller_1.default);
    }));
    describe('root', () => {
        it('should call test fn', () => {
            appController.testMethod();
            expect(testService.test).toHaveBeenCalled();
        });
    });
});
