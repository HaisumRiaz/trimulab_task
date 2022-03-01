const asyncHandler = require("express-async-handler");

// Get
const getEmployee = asyncHandler(async (req, res) => {
  res.status(200).send("GET REQUEST Executed");
});

// Add
const addEmployee = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).send("Bad Request");
  }
  res.status(200).send(`POST REQUEST Executed: ${req.body.text}`);
});

// Update
const updateEmployee = asyncHandler(async (req, res) => {
  res.status(200).send(`PUT REQUEST Executed ID: ${req.params.id}`);
});

// Delete
const deleteEmployee = asyncHandler(async (req, res) => {
  res.status(200).send(`DELETE REQUEST Executed ID: ${req.params.id}`);
});

// Export Functions
module.exports = { getEmployee, addEmployee, updateEmployee, deleteEmployee };
