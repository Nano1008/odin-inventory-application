const {Router} = require('express');
const router = Router();
const itemController = require('../controllers/itemController');

// Get all items
router.get('/', itemController.getAllItems);



module.exports = router;