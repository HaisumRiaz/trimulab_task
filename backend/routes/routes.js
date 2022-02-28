const express = require("express");
const router = express.Router();

// Import Functions from Controlelrs
const {
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/controller");

// Connect Route Request to its Function
router.route("/").get(getEmployee).post(addEmployee);
router.route("/:id").put(updateEmployee).delete(deleteEmployee);

// Export Router
module.exports = router;
