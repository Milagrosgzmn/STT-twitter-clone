"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//controllers
const login_1 = require("../handlers/users/login");
//rutas
router.post('/login', login_1.login);
module.exports = router;
