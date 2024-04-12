const { post } = require('../configs/routes.config');
const Post = require('../models/post.model');
const mongoose = require('mongoose');
 

module.exports.create = (req, res, next) => {
    const post = req.body;
    Post.create(post)
        .then((post) =>res.json(post) )
        .catch((error) => {
            if(error instanceof mongoose.Error.ValidationError){
                res.status(400).json(error.errors)
            }
        })
    
}
module.exports.list = (req, res, next) => {
    Post.find()
        .then((posts) => {
            res.json(posts)
        })
        .catch((next))
    
}