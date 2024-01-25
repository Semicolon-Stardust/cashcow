const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong Mongoose Object ID Error
    if(err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Mongoose Duplicate key error
    if (err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered !`;
        err = new ErrorHandler(message, 400);
    }

    // Invalid JWT Error
    if (err.name == "JsonWebTokenError"){
        const message = "JSON web token is Invalid, try again !";
        err = new ErrorHandler(message, 400);
    }

    // JWT Expired Error
    if (err.name == "TokenExpiredError"){
        const message = "JSON web token is Expired, try again !";
        err = new ErrorHandler(message, 400);
    }



    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}