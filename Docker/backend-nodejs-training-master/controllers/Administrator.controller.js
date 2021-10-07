const express = require('express');
const router = express.Router();

const Console = require('../lib/Console');
const Response = require('../lib/Response');
const AdminService = require('../services/Administrator.service');

const console = new Console('ADMIN-CONTROLLER');
const response = new Response();

//CREATE
router.post('/', async (req, res) => {
    const { name, lastName, email, password } = req.body;
    if (!name || !lastName || !email || !password) {
        console.error('MISSING PARAMETERS');
        response.error(res, 'MISSING PARAMETERS', 400);
        return;
    }
    const adminService = await AdminService.getInstance();
    const user = await adminService.create(name, lastName, email, password);
    console.success('CREATE USER: ' + user.uuid);
    response.success(res, user);
});

//READ
// getAll
router.get('/', (req, res) => {});
// getById
router.get('/:id', (req, res) => {});


//UPDATE
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {name, latName, email} = req.body;
});

//DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id;
});

module.exports = router;
