const db = require("../db/queries");

async function getAllItems(req, res) {
  const items = await db.getAllItems();
  res.render("items/index", { items });
}

async function getNewItemForm(req, res) {
  const categories = await db.getAllCategories();
  res.render("items/new", { categories });
}

async function createItem(req, res) {
  const { name, quantity, price, category_id } = req.body;
  await db.createItem(name, quantity, price, category_id);
  res.redirect("/items");
}

module.exports = {
  getAllItems,
  getNewItemForm,
  createItem,
};
