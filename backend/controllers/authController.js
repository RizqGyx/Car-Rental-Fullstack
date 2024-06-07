const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const imagekit = require("../libs/imagekit");
const { Auth, User, Car } = require("../models");
const ApiError = require("../utils/apiError");

const convertToLowerCase = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] === "string") {
      obj[prop] = obj[prop].toLowerCase();
    }
  }
  return obj;
};

const register = async (req, res, next) => {
  try {
    let { name, age, email, password, city, address, phone, role } = req.body;
    const convertedReqBody = convertToLowerCase({
      name,
      password,
      city,
      address,
      phone,
    });
    ({ name, password, city, address, phone } = convertedReqBody);

    if (role != undefined && role != null) {
      role = role.toLowerCase().charAt(0).toUpperCase() + role.slice(1);
    }

    const user = await Auth.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return next(new ApiError("User email already taken", 400));
    }

    const passwordLength = password <= 8;
    if (passwordLength) {
      next(new ApiError("Minimum password must be 8 character", 400));
    }

    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    if (role == "Admin") {
      if (req.user.role !== "SuperAdmin")
        return next(
          new ApiError(
            "Forbidden, you must have Super Admin role to make Admin account",
            403
          )
        );
    }

    const newUser = await User.create({
      name,
      age,
      address,
      city,
      phone,
      role,
    });

    await Auth.create({
      email,
      password: hashedPassword,
      userId: newUser.id,
    });

    res.status(201).json({
      status: "Success",
      message: "User created successfully",
      data: {
        email,
        newUser,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const registerMember = async (req, res, next) => {
  try {
    let { name, age, email, password, city, address, phone } = req.body;
    const convertedReqBody = convertToLowerCase({
      name,
      password,
      city,
      address,
      phone,
    });
    ({ name, password, city, address, phone } = convertedReqBody);

    const user = await Auth.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return next(new ApiError("User email already taken", 400));
    }

    const passwordLength = password <= 8;
    if (passwordLength) {
      next(new ApiError("Minimum password must be 8 character", 400));
    }

    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    const newUser = await User.create({
      name,
      age,
      address,
      city,
      phone,
    });

    await Auth.create({
      email,
      password: hashedPassword,
      userId: newUser.id,
    });

    res.status(201).json({
      status: "Success",
      message: "User created successfully",
      data: {
        email,
        newUser,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({
      where: {
        email,
      },
      include: ["User"],
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.userId,
          username: user.User.name,
          role: user.User.role,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRED,
        }
      );

      res.status(200).json({
        status: "Success",
        message: "Success login",
        data: token,
      });
    } else {
      next(new ApiError("wrong password or user doesn't exist", 400));
    }
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const authenticate = async (req, res) => {
  try {
    const userId = req.user.userId;
    const userRole = req.user.role;

    let cars = [];
    let totalCreateCarData = 0;

    if (userRole === "admin" || userRole === "superadmin") {
      cars = await Car.findAll({
        where: {
          createdByID: userId,
        },
      });
      totalCreateCarData = cars.length;
    }

    let responseData = {};
    if (userRole === "admin" || userRole === "superadmin") {
      responseData = {
        totalCreateCarData,
        cars,
        user: req.user,
      };
    } else {
      responseData = {
        user: req.user,
      };
    }

    res.status(200).json({
      status: "Success",
      data: responseData,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = {
  register,
  registerMember,
  login,
  authenticate,
};
