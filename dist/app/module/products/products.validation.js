"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const createProductValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        price: zod_1.z.number(),
        rating: zod_1.z.string(),
        stockQuantity: zod_1.z.number().default(0),
        image: zod_1.z.string().optional(),
        category: zod_1.z.string()
    })
});
const updateProductValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        rating: zod_1.z.string().optional(),
        stockQuantity: zod_1.z.number().default(0).optional(),
        image: zod_1.z.string().optional(),
        category: zod_1.z.string().optional()
    })
});
exports.ProductValidation = {
    createProductValidation,
    updateProductValidation
};
