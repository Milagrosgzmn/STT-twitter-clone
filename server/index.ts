import server from './src/server';
const {conn} = require('./src/DB_connection');
const PORT = process.env.PORT || 3000;

conn.sync({force:false}).then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Servidor levantado con exito en el puerto : ${PORT}`);
    });
}).catch((error: any)=> console.error(error));
