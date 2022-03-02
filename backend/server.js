// Import Required Modules
const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");

// Database Authentication
const db = require("./config/database");
db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error" + err));

// Select Port Number
const port = 5000;

// Init Express
const app = express();

// Add Middleware for Error Handling, JSON Object and Request Body Data
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add Routes
app.use("/api/employee", require("./routes/employee"));

// Start Listening on Port
app.listen(port, () => console.log(`Server Started on Port ${port}`));
