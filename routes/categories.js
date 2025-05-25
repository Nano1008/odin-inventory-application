const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/categoryController");

// Get all categories
router.get("/", categoryController.getAllCategories);

// Get new category form
router.get("/new", categoryController.getNewCategoryForm);

// Get a specific category and its associated items by ID
router.get("/:id", categoryController.viewCategory);

// POST request to create a new category
router.post("/", categoryController.createCategory);

// Get edit category form
router.get("/:id/edit", categoryController.getEditCategoryForm);

// POST request to update a category
router.post("/:id/update", categoryController.updateCategory);

// POST request to delete a category
router.post("/:id/delete", categoryController.deleteCategory);

module.exports = router;
