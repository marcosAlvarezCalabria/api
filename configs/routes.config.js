const express = require('express');
const router = express.Router();
const posts = require('../controllers/post.controllers')
const users = require('../controllers/user.controllers');


router.post('/posts', posts.create);
router.get('/posts', posts.list);
router.get('/posts/:id', posts.detail);
router.patch('/posts/:id', posts.update);
router.delete('/posts/:id', posts.delete);

/*************users************************** */
router.post('/users', users.create);
router.get('/users', users.list)


module.exports = router;