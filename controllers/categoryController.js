const db = require("../db/queries");

// Get all categories
async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories/index", { categories });
}

// View a specific category by ID
async function viewCategory(req, res) {
  const { id } = req.params;
  const category = await db.getCategoryById(id);

  if (!category) {
    return res.status(404).send("Category not found");
  }

  const items = await db.getItemsByCategoryId(id);
  res.render("categories/view", { category, items });
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

// Get edit category form
async function getEditCategoryForm(req, res) {
  const { id } = req.params;
  const category = await db.getCategoryById(id);

  if (!category) {
    return res.status(404).send("Category not found");
  }

  res.render("categories/edit", { category });
}

// Handle category update
async function updateCategory(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  await db.updateCategory(id, name);
  res.redirect(`/categories/${id}`);
}

// Handle category deletion
async function deleteCategory(req, res) {
  const { id } = req.params;

  // Prevent deletion if category has items
  const items = await db.getItemsByCategoryId(id);
  if (items.length > 0) {
    return res.status(400).send("Cannot delete category with associated items");
  }

  await db.deleteCategory(id);
  res.redirect("/categories");
}

module.exports = {
  getAllCategories,
  getNewCategoryForm,
  createCategory,
  viewCategory,
  getEditCategoryForm,
  updateCategory,
  deleteCategory,
};
