// Import Required Modules
const express = require("express");
const dotenv = require("dotenv").config;
const { errorHandler } = require("./middleware/errorHandler");

// Select Port Number
const port = process.env.PORT || 5000;

// Init Express
const app = express();

// Add Middleware for Error Handling, JSON Object and Request Body Data
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add Routes
app.use("/api/employee", require("./routes/routes"));

// Start Listening on Port
app.listen(port, () => console.log(`Server Started on Port ${port}`));
