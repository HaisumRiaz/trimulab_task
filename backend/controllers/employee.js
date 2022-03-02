const asyncHandler = require("express-async-handler");
const Employee = require("../models/employee");

// Get
const getEmployees = asyncHandler(async (req, res) => {
  Employee.findAll()
    .then((employees) => {
      res.status(200).json({
        success: true,
        data: employees,
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err: err });
    });
});

// Get
const getEmployee = asyncHandler(async (req, res) => {
  const id = req.params.id;
  Employee.findByPk(id)
    .then((employee) => {
      if (!employee) {
        res
          .status(404)
          .json({
            success: false,
            message: "Employee with the given ID Not Found.",
          });
      } else {
        res.status(200).json({ success: true, data: employee });
      }
    })
    .catch((err) => {
      res.status(400).json({ success: false, err: err });
    });
});

// Add
const addEmployee = asyncHandler(async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Bad Request");
  }
  if (
    req.body.name &&
    req.body.job &&
    req.body.department &&
    req.body.salary &&
    req.body.hire_date
  ) {
    if (req.body.salary < 0) {
      return res.status(400).send("Salary cannot be negative");
    }
    Employee.create({
      name: req.body.name,
      job: req.body.job,
      department: req.body.department,
      salary: req.body.salary,
      hire_date: req.body.hire_date,
    })
      .then((employee) => {
        res
          .status(200)
          .json({
            success: true,
            message: "Employee using the given data created.",
            data: employee,
          });
      })
      .catch((err) => {
        res.status(400).json({ success: false, err: err });
      });
  } else {
    res.status(400).send("Bad Request");
  }
});

// Update
const updateEmployee = asyncHandler(async (req, res) => {
  const id = req.params.id;

  if (!req.body) {
    return res.status(400).send("Bad Request");
  }

  if (req.body.salary < 0) {
    return res.status(400).send("Salary cannot be negative");
  }

  Employee.findByPk(id)
    .then((employee) => {
      if (!employee) {
        res
          .status(404)
          .json({
            success: false,
            message: "Employee with the given ID Not Found.",
          });
      } else {
        employee
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => {
            res
              .status(200)
              .json({
                success: true,
                message: "Employee with the given ID updated",
                data: employee,
              });
          })
          .catch((err) => {
            res.status(400).json({ success: false, err: err });
          });
      }
    })
    .catch((err) => {
      res.status(400).json({ success: false, err: err });
    });
});

// Delete
const deleteEmployee = asyncHandler(async (req, res) => {
  const id = req.params.id;
  Employee.findByPk(id)
    .then((employee) => {
      if (!employee) {
        res
          .status(404)
          .json({
            success: false,
            message: "Employee with the given ID Not Found.",
          });
      } else {
        employee
          .destroy()
          .then(() => {
            res
              .status(200)
              .json({
                success: true,
                message: "Employee with the given ID deleted",
              });
          })
          .catch((err) => {
            res.status(400).json({ success: false, err: err });
          });
      }
    })
    .catch((err) => {
      res.status(400).json({ success: false, err: err });
    });
});

// Export Functions
module.exports = {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
