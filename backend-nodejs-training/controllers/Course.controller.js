const express = require('express');
const router = express.Router();

const Console = require('../lib/Console');
const Response = require('../lib/Response');

const console = new Console('COURSE-CONTROLLER');
const response = new Response();

//get all courses
router.get('/user', (req,res) => {});
// get one course by slug
router.get('/:slug', (req,res) => {});
// add new course
router.post('/', (req,res) => {});
//delete course
router.delete('/:slug', (req,res) => {});
// update course
router.put('/:slug', (req,res) => {});
//get all reservations
// tenemos una url dinámica ya que slug es una variable
router.get('/:slug/reservations', (req, res)=>{});
// create new reservation que necesita la tabla curso y usuario, defino la acción reservate
// body: { uuid } el id del usuario para reservar un curso se resivira por el body
router.post('/:slug/reservate' , () => {});


module.exports = router;
