// no vamos a crear las reservaciones aqui, eso se hace en courses
// solo vamos a actualizar los pagos
const express = require('express');
const router = express.Router();


const Console = require('../lib/Console');
const Response = require('../lib/Response');

const console = new Console('RESERVATION-CONTROLLER');
const response = new Response();

//GET all Reservations
router.get('/', (req,res) => {});

// Update Reservation Payment
router.put('/:uuid', (req, res) => {});

module.exports = router;