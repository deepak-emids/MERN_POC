"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTest = void 0;
// Import this named export into your test file:
exports.mockTest = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    return { test: exports.mockTest };
});
exports.default = mock;
