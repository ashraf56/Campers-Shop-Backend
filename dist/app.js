"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/mainRoute/routes"));
const globalErrorhandler_1 = __importDefault(require("./app/middleware/globalErrorhandler"));
const notfoundroute_1 = __importDefault(require("./app/middleware/notfoundroute"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res.send('Camper shop running..!');
});
app.use(globalErrorhandler_1.default);
app.use(notfoundroute_1.default);
exports.default = app;
