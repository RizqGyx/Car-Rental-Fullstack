"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Auths", [
      {
        userId: 1,
        password:
          "$2a$12$wTrjJbhQYUhpXYCZ4It6TeIFGEwkmkhpcVbGw0YUUqFAxazF6UdTW",
        email: "JohnDoe@example.com",
        createdAt: "2023-06-28T09:25:00Z",
        updatedAt: "2023-06-28T09:25:00Z",
      },
      {
        userId: 2,
        password:
          "$2a$12$k7KboUy1F6btXpXOa2kUQu53r3xFxb9zdttoRLysNyY0P6H58Z7uy",
        email: "JaneSmith@example.com",
        createdAt: "2023-06-29T07:30:00Z",
        updatedAt: "2023-06-29T07:30:00Z",
      },
      {
        userId: 3,
        password:
          "$2a$12$9SJPRtjoEcoNhHOyPquoEO5uBlgkcCXzIKQC4DBH2DeNt53fkSOH6",
        email: "MichaelJohnson@example.com",
        createdAt: "2023-06-30T10:45:00Z",
        updatedAt: "2023-06-30T10:45:00Z",
      },
      {
        userId: 4,
        password:
          "$2a$12$8gc95Ztudf.kExgWqO3w9OZz685RM9FCmO84JP6GAK.Yv5nEvGqua",
        email: "EmilyBrown@example.com",
        createdAt: "2023-07-01T08:15:00Z",
        updatedAt: "2023-07-01T08:15:00Z",
      },
      {
        userId: 5,
        password:
          "$2a$12$c3jnDgOzci8SoDabaFYwBuJfNLjAh49ng5L3dcznzYI3UkwsrJ39S",
        email: "DavidWilson@example.com",
        createdAt: "2023-07-02T11:00:00Z",
        updatedAt: "2023-07-02T11:00:00Z",
      },
      {
        userId: 6,
        password:
          "$2a$12$FEY9X6lbNWuKRgGJvLdvhOtuU7SDPvkGaGKYdtzs9FvvKjgifgGfC",
        email: "OliviaTaylor@example.com",
        createdAt: "2023-07-03T09:30:00Z",
        updatedAt: "2023-07-03T09:30:00Z",
      },
      {
        userId: 7,
        password:
          "$2a$12$pT/KDfLOi/CiVRaghPqVnuiwfJoEd43r1wAKTbYm2s/rqPmR.EVbO",
        email: "JamesBrown@example.com",
        createdAt: "2023-07-04T10:45:00Z",
        updatedAt: "2023-07-04T10:45:00Z",
      },
      {
        userId: 8,
        password:
          "$2a$12$aCeX/o7.o/cIfVAvDu9bjumOGRzfv8phTGSbTyzZrKQLfQtWg4MLi",
        email: "EmmaMartinez@example.com",
        createdAt: "2023-07-05T11:15:00Z",
        updatedAt: "2023-07-05T11:15:00Z",
      },
      {
        userId: 9,
        password:
          "$2a$12$lV4Y6nPaV/jqJbawtEvTaO9gVeecFHvDlkDyqt6oxKhI3IM3OQ7ZC",
        email: "NoahAnderson@example.com",
        createdAt: "2023-07-06T08:30:00Z",
        updatedAt: "2023-07-06T08:30:00Z",
      },
      {
        userId: 10,
        password:
          "$2a$12$DbsxNnzo5WVthW.zgFrimesm8NAPWfxkzzTEdZT5PXFpxpAcaFEv2",
        email: "SophiaWilson@example.com",
        createdAt: "2023-07-07T09:00:00Z",
        updatedAt: "2023-07-07T09:00:00Z",
      },
      {
        userId: 11,
        password:
          "$2a$12$yHh3D64U5uBQgczxxevLkObKKW9ETBz65R3M86NlGcYsLD5yv9fRy",
        email: "mhdrizki@example.com",
        createdAt: "2023-07-07T09:00:00Z",
        updatedAt: "2023-07-07T09:00:00Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
