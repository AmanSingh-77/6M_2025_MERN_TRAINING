const mongoose = require('mongoose')

// defining the products schema
let productSchema = mongoose.Schema({
    autoId:{type:Number, default:1},
    productCategory : {type:String,default:''},
    brand : {type:String,default:'Genric'},
    productName: {type:String,default:''},
    productPrice:{type:Number, default:0},
    productStock:{type:Boolean,default:true},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()},
})

module.exports = mongoose.model("productSchema", productSchema)