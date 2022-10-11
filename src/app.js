const cors = require("cors");
const express = require("express");

// database connection
require("./database");

// routes
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", routes);

module.exports = app;
