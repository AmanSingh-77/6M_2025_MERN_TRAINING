const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    productName : {type:String, default:""},
    productCategory : {type:String, default:""},
    productID : {type:Number , require:true, default:''},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()}
})

module.exports = mongoose.model('productSchema' , productSchema)