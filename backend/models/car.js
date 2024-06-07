"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      Car.belongsTo(models.User, {
        foreignKey: "createdByID",
        allowNull: false,
      });
      Car.belongsTo(models.User, {
        foreignKey: "lastUpdatedByID",
        allowNull: false,
      });
    }
  }
  Car.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rentPerDay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.ENUM("Small", "Medium", "Large"),
        allowNull: false,
      },
      transmission: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      photo: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue:
          "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0&h=180",
      },
      createdByID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lastUpdatedByID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
