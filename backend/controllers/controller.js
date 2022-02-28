// Description:     Get Employee
// Route:           GET /api/employee
const getEmployee = (req, res) => {
  res.status(200).send("GET REQUEST Executed");
};

// Description:     Add Employee
// Route:           POST /api/employee
const addEmployee = (req, res) => {
  res.status(200).send("POST REQUEST Executed");
};

// Description:     Update Employee
// Route:           PUT /api/employee
const updateEmployee = (req, res) => {
  res.status(200).send(`PUT REQUEST Executed ID: ${req.params.id}`);
};

// Description:     Delete Employee
// Route:           Delete /api/employee
const deleteEmployee = (req, res) => {
  res.status(200).send(`DELETE REQUEST Executed ID: ${req.params.id}`);
};

// Export Functions
module.exports = { getEmployee, addEmployee, updateEmployee, deleteEmployee };
