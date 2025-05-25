const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/categoryController");

// GET /categories
router.get("/", categoryController.getAllCategories);

// GET /categories/:id
router.get("/:id", categoryController.viewCategory);

// GET /categories/new
router.get("/new", categoryController.getNewCategoryForm);

// POST /categories
router.post("/", categoryController.createCategory);

router.get("/:id/edit", categoryController.getEditCategoryForm);

router.post("/:id/update", categoryController.updateCategory);

module.exports = router;
