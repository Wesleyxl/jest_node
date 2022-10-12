require("dotenv").config({ path: ".env" });

const path = require("path");
const cors = require("cors");
const express = require("express");

// database connection
require("./database");

// routes
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

// static folder
app.use("/public", express.static(path.join(__dirname, "public")));

module.exports = app;
