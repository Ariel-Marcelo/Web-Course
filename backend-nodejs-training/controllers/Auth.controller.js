const express = require('express');
const router = express.Router();

const Console = require('../lib/Console');
const Response = require('../lib/Response');

const console = new Console('AUTH-CONTROLLER');
const response = new Response();

//USER
router.post('/user', () => {});
//ADMIN
router.post('/administrator',() => {})

module.exports = router;
