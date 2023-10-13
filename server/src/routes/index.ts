import { Router } from "express";
const router:Router = Router();

//controllers
import {login} from '../handlers/users/login';
//rutas
router.post('/login',login);

module.exports = router;