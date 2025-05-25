const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}

async function getCategoryById(id) {
  const { rows } = await pool.query("SELECT * FROM category WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function getItemsByCategoryId(categoryId) {
  const { rows } = await pool.query(
    "SELECT * FROM item WHERE category_id = $1",
    [categoryId]
  );
  return rows;
}

async function createCategory(name) {
  await pool.query("INSERT INTO category (name) VALUES ($1)", [name]);
}

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  getItemsByCategoryId,
};
