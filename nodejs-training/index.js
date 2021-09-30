const express = require('express');
const courses = require('./courses.json');
const fs = require('fs');
const path = require('path');
const { getSystemErrorMap } = require('util');
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants');

const server = express();

server.use(express.json());

function response (res, message, error, statusCode) { // statusCode es el tipo de error que existe 4XX 5XX etc
    res.status(statusCode || 200).send({// si no se le pasa el status code entonces se envia 200 por defecto.
        error: error,
        message: message
    });
}

server.get('/courses', (req, res) => {
    response(res, courses, '');
});

server.post('/courses', (req, res) => {
    const course = req.body;

    if (
        !course.name ||
        !course.price ||
        !course.description ||
        !course.instructor ||
        !course.date
    ) {
        response(res, '', 'Missing data', 400);
        return;
    }
    courses.push({id: courses.length + 1, ...course});

    //Write changes in file
    fs.writeFileSync(path.join(__dirname, 'courses.json'), JSON.stringify(courses)); // pasa tod a JSON 

    response(res, 'Crouse created', '');
});


server.get('/courses/:id', (req, res) => {
    try {
        const id = req.params.id;
        let foundCourse = null;
        courses.forEach((course) => {
            if (Number(id) === course.id) {
                foundCourse = course;
            }
        });
        if (foundCourse === null) {
            response(res, '', 'Course not found', 404);
            return;
        }
        response(res, foundCourse, '');
    } catch (error) {
        response(res, '', error, 500);
    }
});

server.delete('/courses/:id', (req,res) =>{
    const id = req.params.id;
    //console.log(id)
    let foundCourse = null;
    courses.forEach((course) =>{
        if(course.id === Number(id)){
            foundCourse = course;
        }
    });
    if(foundCourse === null){
        response(res, '','Course not found',404);
        return;
    }
    const courseIndex = courses.findIndex( (p) => p.id == id);
    courses.splice(courseIndex,1)
    fs.writeFileSync(path.join(__dirname, 'courses.json'), JSON.stringify(courses));
    response(res, 'Course Eliminated','')
    
   
});



server.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});

/// reto escribir el delete
/// leer q es un patron de diseño MVC , servidores web, APIS.

// Api rest y Graph QL , ql se basa en rest y usa una única url a diferencia de rest
// utiliza un único endpoint para definir esquemas y resolvers.
// el código graph ql le sirve sin importar que lenguaje usemos.