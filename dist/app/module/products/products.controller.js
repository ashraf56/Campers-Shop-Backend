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
exports.ProductCOntroller = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CatchWrapper_1 = require("../../utills/CatchWrapper");
const products_service_1 = require("./products.service");
const createProductController = (0, CatchWrapper_1.CatchWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield products_service_1.ProductServices.createProductDB(payload);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Product created successfully",
        data: result
    });
}));
const getAllProductController = (0, CatchWrapper_1.CatchWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_service_1.ProductServices.getAllProductfromDB();
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Products retrieve successfully",
        data: result
    });
}));
const DeleteSingleProductController = (0, CatchWrapper_1.CatchWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield products_service_1.ProductServices.DeleteProductfromDB(id);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Product deleted successfully",
        data: result
    });
}));
const getSingleProductController = (0, CatchWrapper_1.CatchWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield products_service_1.ProductServices.getSIngleProductfromDB(id);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Single Product retrieve successfully",
        data: result
    });
}));
exports.ProductCOntroller = {
    createProductController, getAllProductController, DeleteSingleProductController, getSingleProductController
};
