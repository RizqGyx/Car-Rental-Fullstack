const express = require("express");
const { Car } = require("../models");

const Authenticate = require("../middlewares/authenticate");
const Cars = require("../controllers/carController");
const upload = require("../middlewares/uploader");
const checkRole = require("../middlewares/checkRole");
const checkId = require("../middlewares/checkId");

const router = express.Router();

router.route("/").get(Cars.findCars).post(Cars.createCar);
router
  .route("/:id")
  .get(checkId(Car), Cars.findCarById)
  .patch(checkId(Car), upload.array("images"), Cars.updateCar)
  .delete(checkId(Car), Cars.deleteCar);

module.exports = router;
