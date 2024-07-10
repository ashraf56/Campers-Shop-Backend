"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchWrapper = void 0;
const CatchWrapper = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(error => next(error));
    };
};
exports.CatchWrapper = CatchWrapper;
