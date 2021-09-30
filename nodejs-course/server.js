const express = require('express');
const server = express();
const Console = require('./lib/Console');

const PORT = 3000;

const console = new Console('SERVER');

server.use(express.json()); // transformar en formato json

//utilidad nos hace las cosas sencillas

server.listen(PORT, () => {
    console.success(`Server is runing on Port ${PORT}`);
});

