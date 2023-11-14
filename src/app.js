//mongodb

require("./config/db");


const express = require("express");
const bodyParser = express.json;
const cors = require("cors");
const routes = require("./routes");


// Create server app
const app = express();


app.use(bodyParser());
app.use(cors());
app.use("/api/v1", routes);


module.exports = app;
