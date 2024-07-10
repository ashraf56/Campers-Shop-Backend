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
exports.ProductServices = void 0;
const throwErrorHandller_1 = __importDefault(require("../../utills/throwErrorHandller"));
const products_model_1 = __importDefault(require("./products.model"));
const createProductDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingProduct = yield products_model_1.default.findOne({ name: payload.name });
    if (existingProduct) {
        (0, throwErrorHandller_1.default)('Product already created');
    }
    const res = yield products_model_1.default.create(payload);
    return res;
});
const getAllProductfromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield products_model_1.default.find();
    return res;
});
exports.ProductServices = {
    createProductDB, getAllProductfromDB
};
