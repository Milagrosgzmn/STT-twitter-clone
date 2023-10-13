"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
const { conn } = require('./src/DB_connection');
const PORT = process.env.PORT || 3000;
conn.sync({ force: false }).then(() => {
    server_1.default.listen(PORT, () => {
        console.log(`Servidor levantado con exito en el puerto : ${PORT}`);
    });
}).catch((error) => console.error(error));
