const {Router} = require('express');
const router = Router();
const itemController = require('../controllers/itemController');

// Get all items
router.get('/', itemController.getAllItems);

// Get new item form
router.get('/new', itemController.getNewItemForm);

// POST request to create a new item
router.post('/', itemController.createItem);

// Get a specific item by ID
router.get('/:id', itemController.viewItem);



module.exports = router;