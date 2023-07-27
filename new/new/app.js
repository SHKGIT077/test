"use strict";
require('./App/Utils/mongo_connection')
const express = require("express");
const app = express();
const config = require("./App/Utils/index");

const http = require("http");
const https = require('https');
const socketIo = require("socket.io");
const cors = require('cors');
const bodyparser = require('body-parser')


require('dotenv').config();

const corsOpts = {
  origin: '*',
  methods: [
      'GET',
      'POST',
  ],

  allowedHeaders: [
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept", "authorization",
  ],
};
app.use(cors(corsOpts));


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


const server = http.createServer(app);


app.use(require("./App/Routes/user.routes"));





// Server start
server.listen(config.port, () =>
  console.log(`Server is running on http://0.0.0.0:${config.port}`)
);