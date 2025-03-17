const mongoose = require("mongoose")

// Defining the schema for storing brand data in database
let brandSchema = mongoose.Schema({
    brandName: {type:String, default:""},
    brandDesc:{type:String, default:""},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()}
})

// Exporting the schema as a model
module.exports= mongoose.model('brandSchema',brandSchema)