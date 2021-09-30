// todas las rutas recibidas por el servidor
// deben ser comunicadas a routes para ver si las tiene
// o no


// añadimos el user controller que exporta la variable con todas las rutas de la aplicación.
const UserController = require('../Controlers/User.controller'); 


const routes =  (server) => 
    {server.use('/users', UserController); 
};
module.exports  = routes;