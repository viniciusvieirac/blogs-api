const express = require('express');
const user = require('../controller/user');
const { validateUser, validateEmail } = require('../middleware/userMiddleware');
const { validateJWT } = require('../middleware/validateJWT');

const router = express.Router();

router.get('/', validateJWT, user.getAllUsers);
router.get('/:id', validateJWT, user.getUserById);
router.post('/', validateUser, validateEmail, user.createUser);

module.exports = router;