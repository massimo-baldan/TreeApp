const path = require("path");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "treeapp.db"), // File di database SQLite
  logging: false, // Opzionale, disabilita il logging delle query
});

module.exports = sequelize;
