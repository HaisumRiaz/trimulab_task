const express = require("express");
const router = express.Router();
const { methodNotAllowed } = require("../functions/requests");

// Import Functions from Controlelrs
const {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee");

// Connect Route Request to its Function
router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.post("/", addEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

router.all('/', methodNotAllowed);
router.all('/:id', methodNotAllowed);

// Export Router
module.exports = router;
