const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: "Name is required"
        },
        email:{
            type: String,
            required:"Email is required",
        },
        password:{
            type: Number,
            required: "Password is required",
        },
        bio:{
            type: String
        },
        active:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
)

const User = mongoose.model("User",userSchema);
module.exports = User;