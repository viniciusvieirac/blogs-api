const express = require('express');
const user = require('../controller/user');

const router = express.Router();

router.post('/', user.createUser);

module.exports = router;