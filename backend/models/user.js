"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Auth, {
        foreignKey: "userId",
      });
      User.hasMany(models.Car, {
        foreignKey: "createdByID",
      });
      User.hasMany(models.Car, {
        foreignKey: "lastUpdatedByID",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      profileImage: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0&h=180",
      },
      role: {
        type: DataTypes.ENUM(["Superadmin", "Admin", "Member"]),
        defaultValue: "Member",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
