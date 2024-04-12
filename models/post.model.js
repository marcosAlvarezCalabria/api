const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
{
    title: {
        type: String,
        required: 'Title is required',
        minLength: [5, 'Title needs at least 5 characters']
    },
    text: {
        type: String,
        required: 'Text is required',
        minLength: [5, 'Text needs at least 5 characters']
    },
    author: {
        type:String,
        required: 'Author is required'
    }


},
{
    timestamps:true
}




);

const Post = mongoose.model('Post', postSchema)
module.exports= Post