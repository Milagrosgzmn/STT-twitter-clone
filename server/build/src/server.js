"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
/* const router = require("./ routes"); */
/* const cors = require("cors"); */
const server = express();
server.use(express.json());
/* server.use(cors()); */
server.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
/* server.use(router); */
exports.default = server;
