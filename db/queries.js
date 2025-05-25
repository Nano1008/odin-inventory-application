const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}

async function createCategory(name) {
  await pool.query("INSERT INTO category (name) VALUES ($1)", [name]);
}

module.exports = {
  getAllCategories,
  createCategory,
};
