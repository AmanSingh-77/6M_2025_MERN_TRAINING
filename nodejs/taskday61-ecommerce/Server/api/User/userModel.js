const mongoose = require('mongoose')

// defining the user data schema to store common data
let userSchema = mongoose.Schema({
    autoId:{type:Number, default:1},
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    userType:{type:Number,default:2},
    // 1 -> admin , 2 -> user
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()},
})

module.exports = mongoose.model("userModel", userSchema)