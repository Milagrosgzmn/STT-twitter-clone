"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//controllers
const login_1 = require("../handlers/users/login");
const signUp_1 = require("../handlers/users/signUp");
//rutas
router.post('/login', login_1.login);
router.post('/signup', signUp_1.signUp);
module.exports = router;
