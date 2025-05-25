const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories/index", { categories });
}

// Get new category form
function getNewCategoryForm(req, res) {
  res.render("categories/new");
}

// Handle category creation
async function createCategory(req, res) {
  const { name } = req.body;
  await db.createCategory(name);
  res.redirect("/categories");
}

module.exports = {
  getAllCategories,
  getNewCategoryForm,
  createCategory,
};
