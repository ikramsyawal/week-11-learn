const { ValidationError } = require("sequelize");

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).json({
      message: err.errors[0].message,
    });
  } else if (err.name === "dataNotFound") {
    res.status(404).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = errorHandler;
