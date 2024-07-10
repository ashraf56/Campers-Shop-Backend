"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const allroute = [
    {
        path: '/products',
        route: 'Userroute'
    },
    {
        path: '/carts',
        route: 'CarRoute'
    },
    {
        path: '/orders',
        route: 'BookingRoute'
    }
];
allroute.forEach(r => router.use(r.path));
exports.default = router;
