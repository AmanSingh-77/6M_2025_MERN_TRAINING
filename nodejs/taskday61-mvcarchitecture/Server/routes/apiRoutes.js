const CategoryController = require("../api/Category/categoryController")
const ProductController = require('../api/Product/productController')

const router = require("express").Router()


// Category api's add and all
router.post('/categoryAdd',CategoryController.add)
router.post('/categoryAll',CategoryController.all)


//Product api's add and all
router.post('/productAdd', ProductController.add)
router.post('/productAll', ProductController.all)

module.exports=router