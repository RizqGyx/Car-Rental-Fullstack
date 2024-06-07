"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {
    static associate(models) {
      Auth.belongsTo(models.User, {
        foreignKey: "userId",
        allowNull: false,
      });
    }
  }
  Auth.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Please enter a valid email",
          },
        },
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Auth",
    }
  );
  return Auth;
};
