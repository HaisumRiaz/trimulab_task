const asyncHandler = require("express-async-handler");

// Description:     Get Employee
// Route:           GET /api/employee
const getEmployee = asyncHandler(async (req, res) => {
  res.status(200).send("GET REQUEST Executed");
});

// Description:     Add Employee
// Route:           POST /api/employee
const addEmployee = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).send("Bad Request");
  }
  res.status(200).send(`POST REQUEST Executed: ${req.body.text}`);
});

// Description:     Update Employee
// Route:           PUT /api/employee
const updateEmployee = asyncHandler(async (req, res) => {
  res.status(200).send(`PUT REQUEST Executed ID: ${req.params.id}`);
});

// Description:     Delete Employee
// Route:           Delete /api/employee
const deleteEmployee = asyncHandler(async (req, res) => {
  res.status(200).send(`DELETE REQUEST Executed ID: ${req.params.id}`);
});

// Export Functions
module.exports = { getEmployee, addEmployee, updateEmployee, deleteEmployee };
