const express = require("express");
const app = express();
var http = require('http');
const cors = require("cors");
// const myaddon = require("./myaddon/myaddon.cpp");


app.use(cors());

const server = http.createServer(app);

require("./controller/login")(app)



app.get("/tet",function(req,res){
 res.send("okk run setup")
});



server.listen('3002', () =>{
    console.log("server run");
    })


