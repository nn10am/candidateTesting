const express = require('express');
const router = express.Router();

const CatController = require('../controllers/category.controller');

// get all categories
router.get('/cat', CatController.getAllCat);

module.exports = router;