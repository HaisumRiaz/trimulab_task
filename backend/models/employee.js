const Sequelize = require("sequelize");
const db = require("../config/database");

const Employee = db.define(
  "Employees",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    job: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    department: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salary: {
      type: Sequelize.INTEGER,
      allowNull: false,
      isPositive(value) {
        if (value < 0) {
          throw new Error("Invalid Range: Salary cannot be Negative");
        }
      },
    },
    hire_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Employee;
