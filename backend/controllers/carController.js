const { Car, User } = require("../models");
const { generateRandomId } = require("../utils/generateId");
const ApiError = require("../utils/apiError");
const imagekit = require("../libs/imagekit");
const { Op } = require("sequelize");

function sizeValidation(capacity) {
  if (capacity <= 2) {
    return "Small";
  }
  if (capacity <= 4) {
    return "Medium";
  }
  if (capacity <= 6) {
    return "Large";
  }
}

const findCars = async (req, res, next) => {
  try {
    const {
      name,
      rentperday,
      capacity,
      size,
      transmission,
      year,
      createdByID,
      lastUpdatedByID,
      page,
      limit,
    } = req.query;

    const pageNum = parseInt(page) || 1;
    const limitData = parseInt(limit) || 10;
    const offset = (pageNum - 1) * limitData;

    const whereClause = {};
    if (name) whereClause.name = { [Op.iLike]: `%${name}%` };
    if (rentperday) whereClause.rentperday = rentperday;
    if (capacity) whereClause.capacity = capacity;
    if (size) whereClause.size = { [Op.iLike]: `%${size}%` };
    if (transmission)
      whereClause.transmission = { [Op.iLike]: `%${transmission}%` };
    if (year) whereClause.year = year;
    if (createdByID) whereClause.createdByID = createdByID;
    if (lastUpdatedByID) whereClause.lastUpdatedByID = lastUpdatedByID;

    if (req.query.search) {
      whereClause[Op.or] = {
        name: { [Op.like]: `%${req.query.search}%` },
        rentperday: { [Op.like]: `%${req.query.search}%` },
        capacity: { [Op.like]: `%${req.query.search}%` },
        size: { [Op.like]: `%${req.query.search}%` },
        transmission: { [Op.like]: `%${req.query.search}%` },
        year: { [Op.like]: `%${req.query.search}%` },
        createdByID: { [Op.like]: `%${req.query.search}%` },
        lastUpdatedByID: { [Op.like]: `%${req.query.search}%` },
      };
    }

    const { count, rows: cars } = await Car.findAndCountAll({
      where: whereClause,
      offset,
      limit: limitData,
    });

    const totalPages = Math.ceil(count / limitData);

    res.status(200).json({
      status: "Success",
      totalData: count,
      cars,
      pagination: {
        totalPages,
        pageNum,
        limitData,
      },
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

const findCarById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    if (!car) {
      throw new ApiError("Car not found", 404);
    }
    res.status(200).json({
      status: "Success",
      data: {
        car,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, err.statusCode || 400));
  }
};

const updateCar = async (req, res, next) => {
  const {
    name,
    rentperday,
    capacity,
    transmission,
    year,
    createdByID,
    lastUpdatedByID,
  } = req.query;
  try {
    const userID = req.user.userId;
    console.log(userID);
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      return next(new ApiError(`Car with ID ${req.params.id} not found`, 404));
    }

    const size = sizeValidation(capacity);

    await User.update(
      {
        name,
        rentperday,
        capacity,
        size,
        transmission,
        year,
        createdByID,
        lastUpdatedByID: userID,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const updatedCar = await Car.findByPk(req.params.id);

    res.status(200).json({
      status: "Success",
      message: "Car updated successful",
      updatedCar,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const deleteCar = async (req, res, next) => {
  try {
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      next(new ApiError(`Car with ID ${req.params.id} not found`, 404));
    }

    await Car.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Successfully deleted car",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const createCar = async (req, res, next) => {
  try {
    // const userID = req.user.userId;
    const car = await Car.create({
      id: generateRandomId(),
      ...req.body,
      // createdByID: userID,
      // lastUpdatedByID: userID,
    });

    res.status(201).json({
      status: "Success",
      data: {
        car,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  findCars,
  findCarById,
  updateCar,
  deleteCar,
  createCar,
};
