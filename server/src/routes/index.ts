import { Router } from "express";
const router:Router = Router();
//controllers
import {login} from '../handlers/users/login';
import { signUp } from "../handlers/users/signUp";
//rutas
router.post('/login',login);
router.post('/signup', signUp);
module.exports = router;