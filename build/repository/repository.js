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
        /**
         * Controller to add
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.add = (entity, object) => __awaiter(this, void 0, void 0, function* () {
            console.log(entity, object);
            try {
                let result = yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    //get table
                    let repo = connection.getRepository(entity);
                    //save table
                    yield repo.save(object);
                    //get saved data
                    let find = yield repo.find();
                    //close connection
                    yield connection.close();
                    //return result
                    return find;
                }));
                return result;
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
        /**
         * Controller to get
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.getAll = (entity) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    //get table
                    let repo = connection.getRepository(entity);
                    //get saved data
                    let find = yield repo.find();
                    //close connection
                    yield connection.close();
                    //return result
                    return find;
                }));
                return result;
            }
            catch (error) {
                return error;
            }
        });
        /**
         * Controller to get
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.get = (entity, query) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    //get table
                    let repo = connection.getRepository(entity);
                    //get saved data
                    let find = yield repo.find(query);
                    //close connection
                    yield connection.close();
                    //return result
                    return find[0];
                }));
                return result;
            }
            catch (error) {
                return error;
            }
        });
        /**
         * Controller to get all users available
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.delete = (entity, id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    //get table
                    let repo = connection.getRepository(entity);
                    //find
                    let foundEmp = yield repo.find({ id: id });
                    if (foundEmp.length > 0) {
                        yield repo.remove(foundEmp[0]);
                        let Emp = yield repo.find();
                        yield connection.close();
                        return Emp;
                    }
                    else {
                        yield connection.close();
                        return false;
                    }
                }));
                return result;
            }
            catch (error) {
                return error;
            }
        });
        /**
         * Controller to get all users available
         * @param  {object} Request - request object
         * @param {object} Response - response object
         * @param {Function} NextFunction
         */
        this.update = (entity, id, object) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
                    //get table
                    let repo = connection.getRepository(entity);
                    //find
                    let foundEmp = yield repo.find({ id: id });
                    if (foundEmp.length > 0) {
                        //update table
                        yield repo.update({ id: id }, object);
                        //get saved data
                        let find = yield repo.find({ id: id });
                        yield connection.close();
                        return find;
                    }
                    else {
                        yield connection.close();
                        return false;
                    }
                }));
                return result;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = Repository;
