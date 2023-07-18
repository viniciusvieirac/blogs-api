const express = require('express');
const post = require('../controller/post');
const { validateJWT } = require('../middleware/validateJWT');
const validatePost = require('../middleware/validatePost');

const router = express.Router();

router.post('/', validateJWT, validatePost, post.createPost);

module.exports = router;