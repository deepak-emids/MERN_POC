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
class Repository {
    constructor() {
        this.add = (entity, object) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(entity);
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
        this.get = (entity, query) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(entity);
                    let find = yield repo.findOne(query);
                    yield connection.close();
                    return find;
                }));
            }
            catch (error) {
                return error;
            }
        });
        this.delete = (entity, id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(entity);
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
                        yield connection.close();
                        return false;
                    }
                }));
            }
            catch (error) {
                return error;
            }
        });
        this.update = (entity, id, object) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(entity);
                    let foundEmp = yield repo.find({ id: id });
                    if (foundEmp.length > 0) {
                        yield repo.update({ id: id }, object);
                        let find = yield repo.findOne({ id: id });
                        yield connection.close();
                        return find;
                    }
                    else {
                        yield connection.close();
                        return false;
                    }
                }));
            }
            catch (error) {
                return error;
            }
        });
    }
    getAll(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    let repo = connection.getRepository(entity);
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
exports.default = Repository;
