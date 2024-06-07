"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cars", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rentPerDay: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      capacity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      size: {
        allowNull: false,
        type: Sequelize.ENUM(["Small", "Medium", "Large"]),
      },
      transmission: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      photo: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdByID: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      lastUpdatedByID: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cars");
  },
};
