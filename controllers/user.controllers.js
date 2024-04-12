const User = require('../models/user.model');
const mongoose = require ('mongoose');

module.exports.create = (req, res, next) => {
    const user = req.body;
    User.create(user)
        .then((user) =>res.json(user) )
        .catch((error) => {
            if(error instanceof mongoose.Error.ValidationError){
                res.status(400).json(error.errors)
            }
        })
    
}
module.exports.list = (req, res, next) => {
    User.find()
        .then((user => res.json({})))
        .catch((error) => next (error))
}
