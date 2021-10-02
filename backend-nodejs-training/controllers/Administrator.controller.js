const express = require('express');
const router = express.Router();


const Console = require('../lib/Console');
const Response = require('../lib/Response');

const console = new Console('ADMIN-CONTROLLER');
const response = new Response();

//Create , EL ADMIN puede añadir más ADMIN
router.post('/', (req, res) => {});
// READ All
router.get('/', (req, res) => {});
// READ ONE
router.get('/:id', (req, res) => {});
//UPDATE
router.put('/:id', (req,res) => {
    const id = req.params.id;
    const {name, latName, email} = req.body;
})
//DELETE
router.delete('/:id', (req,res) => {
    const id = req.params.id;
    const {name, latName, email} = req.body;
})

module.exports = router;
