const express = require("express");
const route = express.Router();
const path = __dirname + "/login.html" ; 
const fs = require('fs').promises;
const bodyParser = require("body-parser");
const fonct = require("../fonction/funct");

route
    .route("/register")
    .post(fonct.createPost)
    .get(fonct.register);

route 
    .route("/login")
    .post(fonct.connection)
    .get(fonct.login);

    
module.exports = route;
