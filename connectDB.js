const Sequelize = require("sequelize");

const database = "test_db";
const username = "kiranraj22";
const password = "kiranraj9845";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

const connect = async () => {
    return sequelize.authenticate();
  }
  
  module.exports = {
    connect,
    sequelize
  }