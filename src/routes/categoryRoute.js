const express = require('express');
const category = require('../controller/category')
const { validateJWTWithBearer, validateJWT } = require('../middleware/validateJWT');

const router = express.Router();

router.get('/', validateJWT, category.getAllCategories);
router.post('/', validateJWTWithBearer, category.createCategory);

module.exports = router;