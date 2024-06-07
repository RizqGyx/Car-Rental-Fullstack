const ApiError = require("../utils/apiError");

const validateInputLowerCase = (req, res, next) => {
  try {
    const { name, password, city, address, phone } = req.body;

    const inputs = { name, password, city, address, phone };

    for (let key in inputs) {
      if (inputs.hasOwnProperty(key) && typeof inputs[key] === "string") {
        if (inputs[key] !== inputs[key].toLowerCase()) {
          key = key.toLowerCase().charAt(0).toUpperCase() + key.slice(1);
          return next(new ApiError(`${key} should be in lowercase`, 400));
        }
      }
    }

    next();
  } catch (error) {
    return next(new ApiError("Internal Server Error", 500));
  }
};

module.exports = validateInputLowerCase;
