// Access environment variables from .env file
require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/inventory`,
});
