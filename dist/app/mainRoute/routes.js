"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_route_1 = require("../module/products/products.route");
const router = (0, express_1.Router)();
const allroute = [
    {
        path: '/products',
        route: products_route_1.ProductRouter
    },
];
allroute.forEach(r => router.use(r.path, r.route));
exports.default = router;
