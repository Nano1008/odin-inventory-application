const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/categoryController");

// GET /categories
router.get("/", categoryController.getAllCategories);

// GET /categories/new
router.get("/new", categoryController.getNewCategoryForm);

// POST /categories
router.post("/", categoryController.createCategory);

module.exports = router;
