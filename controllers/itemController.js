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

async function getEditItemForm(req, res) {
  const { id } = req.params;
  const item = await db.getItemById(id);
  const categories = await db.getAllCategories();

  if (!item) {
    return res.status(404).send("Item not found");
  }

  res.render("items/edit", { item, categories });
}

async function updateItem(req, res) {
  const { id } = req.params;
  const { name, quantity, price, category_id } = req.body;

  await db.updateItem(id, name, quantity, price, category_id);
  res.redirect(`/items/${id}`);
}

async function deleteItem(req, res) {
  const { id } = req.params;
  await db.deleteItem(id);
  res.redirect("/items");
}

module.exports = {
  getAllItems,
  getNewItemForm,
  createItem,
  viewItem,
  getEditItemForm,
  updateItem,
  deleteItem,
};
