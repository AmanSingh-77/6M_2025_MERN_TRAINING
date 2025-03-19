const mongoose = require('mongoose')

const categoryController = require('./categoryController')

const categorySchema = mongoose.Schema({
    categoryName : {type:String, default:""},
    categoryGender : {type:String, default:""},
    categoryID : {type:Number , require:true, default:''},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()}
})

module.exports = mongoose.model('categorySchema' , categorySchema)