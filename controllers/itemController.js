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

async function viewItem(req, res) {
  const { id } = req.params;
  const item = await db.getItemById(id);

  if (!item) {
    return res.status(404).send("Item not found");
  }

  res.render("items/view", { item });
}

module.exports = {
  getAllItems,
  getNewItemForm,
  createItem,
  viewItem,
};
