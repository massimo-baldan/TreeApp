const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Tree = sequelize.define("Tree", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  specie: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  co2: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  lifeExp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  ambImp: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  socImp: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Tree;
