const Sequelize = require("sequelize");
const db = require("../config/database");

const employee = db.define("employee", {
  id: {
    type: Sequelize.Serial,
  },
  name,
});
