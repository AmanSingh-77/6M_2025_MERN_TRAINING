const mongoose = require("mongoose")

// Defining the schema for storing brand data in database
let brandSchema = mongoose.Schema({
    autoId:{type:Number, default:1},
    brandName: {type:String, default:""},
    brandDesc:{type:String, default:""},
    brandImage:{type:String, default:"no-pic.jpg"},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()}
})

// Exporting the schema as a model
module.exports= mongoose.model('brandSchema',brandSchema)