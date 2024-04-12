const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
{
    title: {
        type: String,
        require: 'Title is required',
        minLength: [5, 'Title needs at least 5 characters']
    },
    text: {
        type: String,
        require: 'Text is required',
        minLength: [5, 'Text needs at least 5 characters']
    },
    author: {
        type:String,
        require: 'Author is required'
    }


},
{
    timestamps:true
}




);

const Post = mongoose.model('Post', postSchema)
module.exports= Post