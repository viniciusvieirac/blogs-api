const express = require('express');
const category = require('../controller/category')
const { validateJWTWithBearer } = require('../middleware/validateJWT');

const router = express.Router();

router.post('/', validateJWTWithBearer, category.createCategory);

module.exports = router;