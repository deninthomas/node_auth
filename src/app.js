//mongodb

require("./config/db");

const ejs = require("ejs");

const express = require("express");
const bodyParser = express.json;
const cors = require("cors");
const path = require("path");
const routes = require("./routes");


// Create server app
const app = express();

// set ejs as view engine
app.set("view engine","ejs")

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use(bodyParser());
app.use(cors());
app.use("/", routes);


module.exports = app;
