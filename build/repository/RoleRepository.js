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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const role_1 = require("../entity/role");
class RoleRepository {
    constructor() {
        this.add = (object) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(role_1.Role);
                    yield repo.save(object);
                    let find = yield repo.find();
                    yield connection.close();
                    return find;
                }));
                return result[result.length - 1];
            }
            catch (error) {
                return error;
            }
        });
        this.get = (query) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(role_1.Role);
                    let find = yield repo.findOne(query);
                    yield connection.close();
                    return find;
                }));
            }
            catch (error) {
                return error;
            }
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(role_1.Role);
                    let foundEmp = yield repo.find({ id: id });
                    if (foundEmp.length > 0) {
                        yield repo.remove(foundEmp[0]);
                        let Emp = yield repo.findOne({ id: id });
                        yield connection.close();
                        if (Emp)
                            return false;
                        else
                            return true;
                    }
                    else {
                    }
                }));
            }
            catch (error) {
                return error;
            }
        });
        this.update = (id, object) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(role_1.Role);
                    yield repo.update({ id: id }, object);
                    let find = yield repo.findOne({ id: id });
                    yield connection.close();
                    return find;
                }));
            }
            catch (error) {
                return error;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(role_1.Role);
                    let find = yield repo.find();
                    yield connection.close();
                    return find;
                }));
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = RoleRepository;
