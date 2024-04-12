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
module.exports.detail = (req, res, next) => {
    const postId = req.params.id
    
    Post.findById(postId)
        .then((post) => {
            if (post) {
                res.json(post)
            } else {
                res.status(400).json({message:"post not found"})

            }
            })
        .catch((error) => {
            res.status(404).json(error.errors)
        })
}
module.exports.update = (req, res, next) => {
    
    Post.findByIdAndUpdate(req.params.id, req.body,
        {runValidators: true,//*1
         new:true   //*2
        } 
    )
        .then((post) => {
            if (post){
                res.json(post);
            }else{
                res.status("400").json({message:"post not found"})

            }
        })
        .catch((error) => {
            if(error instanceof mongoose.Error.ValidationError){
                res.status(400).json(error.errors )
            } else{
                next(error);
            }
           
        })
}


//*1 findByIdAndUdate no valida por defecto entonces hacemos runVidators true para que si lo haga 
//*2 new: true para que nos devuelva el nuevo post ya modificado 