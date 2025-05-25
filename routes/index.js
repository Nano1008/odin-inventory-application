const { Router } = require("express");
const router = Router();
const itemController = require("../controllers/itemController");

router.get("/", itemController.getAllItems);

module.exports = router;
