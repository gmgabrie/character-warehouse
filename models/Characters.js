const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Characters extends Model {}

Characters.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Race: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Story: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    User_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "characters",
  }
);

module.exports = Characters;
