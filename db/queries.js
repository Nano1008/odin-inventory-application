const pool = require("./pool");

// Category Queries
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
    "SELECT * FROM item WHERE category_id = $1 ORDER BY name",
    [categoryId]
  );
  return rows;
}

async function createCategory(name) {
  await pool.query("INSERT INTO category (name) VALUES ($1)", [name]);
}

async function updateCategory(id, name) {
  await pool.query("UPDATE category SET name = $1 WHERE id = $2", [name, id]);
}

async function deleteCategory(id) {
  await pool.query("DELETE FROM category WHERE id = $1", [id]);
}

// Item Queries
async function getAllItems() {
  const { rows } = await pool.query(
    "SELECT item.*, category.name AS category_name FROM item LEFT JOIN category ON item.category_id = category.id ORDER BY item.name"
  );
  return rows;
}

async function createItem(name, quantity, price, categoryId) {
  await pool.query(
    "INSERT INTO item (name, quantity, price, category_id) VALUES ($1, $2, $3, $4)",
    [name, quantity, price, categoryId]
  );
}

async function getItemById(id) {
  const { rows } = await pool.query(
    "SELECT item.*, category.name AS category_name FROM item JOIN category ON item.category_id = category.id WHERE item.id = $1",
    [id]
  );
  return rows[0];
}

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  getItemsByCategoryId,
  updateCategory,
  deleteCategory,
  getAllItems,
  createItem,
  getItemById,
};
