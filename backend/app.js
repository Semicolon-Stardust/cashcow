const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Configuration
const app = express();
const corsOption = {
    credentials: true,
    origin: 'http://localhost:3000',
}
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOption));

// Route Imports
const user = require("./routes/userRoute");
const transaction = require("./routes/transactionRoute");
const family = require("./routes/familyRoute");

// Middleware Imports
const errorMiddleware = require("./middleware/error");


// Mount Routes
app.use("/api/v1", user);
app.use("/api/v1/transaction", transaction);
app.use("/api/v1/family", family);


// Middleware for Errors
app.use(errorMiddleware);


module.exports = app;
