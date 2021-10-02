const express = require('express'); // express tiene una utilidad (Enrutador) que....
const router = express.Router(); // me permite definir distintas rutas
const Console = require ('../lib/Console');
const UserService = require('../services/User.service');
const Response = require('../lib/Response');

const console = new Console('USER-CONTROLLER');
const userService = UserService.getInstance;
const response = new Response();

// tenemos todos los métodos get , post etc.
router.post('/', (req, res) => {
    // La ruta que va a resolver el servidor con '/' es localhost:3000/users/
    // debido a que este controlador esta siendo usado en la  clase Routes.js
    // junto con esa ruta predefinida.
    const {email, password} = req.body; // traemos de nuestro usuario el email y el password
    if(!email){

        return response.error(res, 'Email is required', 400);
        /* Al implementar la clase Response encargada de responder a 
        peticiones del usuario este código es inecesario
        return res.status(400).send({
            message: 'Email is required'
        });
        */
    }
    if(!password){
        return response.error(res, 'Password is required', 400);
        /*
        return res.status(400).send({
            message: 'Password is required'
        });
        */
    }
    // teniendo el email y el pasword lo enviamos al servicio
    const isLoggedIn = userService.login(email, password);
    if(!isLoggedIn){
        return response.error(res, 'Invalid email or password', 400);
        /*
        return res.status(400).send({
            message: 'Invalid email or password'
        });
        */
    }
    console.success('User Authenticaded: ' +  email);
    return response.success(res, 'Successfully logged in', 200);
    /*
    return res.status(200).send({
        message: 'Successfully logged in'
    });
    */
});

// UN CONTROLADOR SIEMPRE DEBE EXPOTAR LAS RUTAS DE UN ENRUTADOR EXPRESS
// UNA VEZ AÑADIDAs LAS rutas de nuestra aplicación al enrutador
// podemos exportar el mismo enrutador 
module.exports= router; 


// this is a change
