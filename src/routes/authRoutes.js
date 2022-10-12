const express = require("express");
const AuthController = require("../app/controller/AuthController");

const authRoutes = express.Router();

authRoutes.post("/login", AuthController.login);

module.exports = authRoutes;
