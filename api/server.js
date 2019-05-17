const helmet = require('helmet');
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


const configureRoutes = require('../config/routes.js');

const server = express();
server.use(morgan());
server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

server.get('/', (req, res) => {
    res.send('sanity check');
   });
   
   module.exports = {
    server,
   };


