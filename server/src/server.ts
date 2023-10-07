const express = require("express");
/* const router = require("./ routes"); */
/* const cors = require("cors"); */

const server = express();

server.use(express.json());
/* server.use(cors()); */

server.use((_req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

/* server.use(router); */

export default server;