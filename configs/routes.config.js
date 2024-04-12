const express = require('express');
const router = express.Router();
const posts = require('../controllers/post.controllers')


router.post('/posts', posts.create);
router.get('/posts', posts.list);
router.get('/posts/:id', posts.detail);
router.patch('/posts/:id', posts.update);


module.exports = router;