const express = require('express');
const router = express.Router();
const Console = require ('../lib/Console');
const console = new Console('USER-CONTROLLER');


// tenemos todos los métodos get , post etc.
router.get('/', (req, res) => {
    // por definición de en la clase Routes.js
    //  '/' define el final de la ruta localhost:3000/users/
});


// UNA VEZ AÑADIDAs LAS rutas de nuestra aplicación
// podemos exportar la variable router
module.exports= router;


