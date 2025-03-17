const mongoose = require("mongoose")

// Defining the schema for storing category data in database
let categorySchema = mongoose.Schema({
    categoryName: {type:String, default:""},
    categoryDesc:{type:String, default:""},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()}
})

// Exporting the schema as a model
module.exports= mongoose.model('categorySchema',categorySchema)