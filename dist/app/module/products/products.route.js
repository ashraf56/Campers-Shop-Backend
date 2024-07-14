"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const products_validation_1 = require("./products.validation");
const products_controller_1 = require("./products.controller");
const router = (0, express_1.Router)();
router.post('/create-product', (0, validationRequest_1.default)(products_validation_1.ProductValidation.createProductValidation), products_controller_1.ProductCOntroller.createProductController);
router.get('/', products_controller_1.ProductCOntroller.getAllProductController);
router.delete('/:id', products_controller_1.ProductCOntroller.DeleteSingleProductController);
router.get('/:id', products_controller_1.ProductCOntroller.getSingleProductController);
exports.ProductRouter = router;
