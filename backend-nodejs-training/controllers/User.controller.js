const express = require('express');
const router = express.Router();

const UserService = require('../services/User.service');
const Console = require('../lib/Console');
const Response = require('../lib/Response');


const console = new Console('USER-CONTROLLER');
const userService = UserService.getInstance();
const response = new Response();


// get all users
router.get('/', (req,res) => {
    const users = userService.getAll();
    response.success('GET ALL USERS');
    response.success(res,users);
    
});
// get user by uuid este uuid es usado por seguridad
router.get('/:uuid', (req,res)=>{
    const {uuid} = req.params;
    const user = user.Service.getOne(uuid);
    if(!user){
        console.error('USER NOT FOUND: ' + uuid);
        response.error(res, 'USER NOT FOUND', 404);
        return;
    }

    console.success('GET USER: ' + uuid);
    return response.success(res,user); // siempre ignora los return porque este no debería devolver nada
    return; 
});

//create user
router.post('/', (req,res)=>{
    const {name, lastName, email, phone, organization} = req.body;
    if(!name || ! lastName){
        console.error('MISSING PARAMETERS');
        response.error(res, 'MISSING PARAMETERS', 400);
        return;
    }

    const user = userService.create(name, email, phone, organization);
    console.success('CREATE USER: '+ user.uuid);
});

//update user
router.put('/:uuid', (req,res)=>{});

//delete user
router.delete('/:uuid', (req,res)=>{});


// get reservations by User
router.get('/:uuid/reservations', (req,res)=>{});

module.exports = router;
