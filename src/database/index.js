const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

// models
const User = require("../app/model/User");

// init model
User.init(connection);

module.exports = connection;
