const express = require('express');
const router = express.Router();
const posts = require('../controllers/post.controllers')

router.get('/posts', posts.list);
router.post('/posts', posts.create);


module.exports = router;