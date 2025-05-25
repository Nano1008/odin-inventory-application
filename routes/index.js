const { Router } = require("express");
const router = Router();
const indexController = require("../controllers/indexController");

// Home route
router.get("/", indexController.getHomePage);

module.exports = router;
