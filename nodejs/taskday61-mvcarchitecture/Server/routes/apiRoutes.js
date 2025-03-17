const CategoryController = require("../api/Category/categoryController")
const ProductController = require('../api/Product/productController')
const BrandController = require('../api/Brand/brandController')

const router = require("express").Router()


// Category api's add and all
router.get('/categoryAdd',CategoryController.add)
router.get('/categoryAll',CategoryController.all)


//Product api's add and all
router.get('/productAdd', ProductController.add)
router.get('/productAll', ProductController.all)

//Brand api's add and all
router.get('/brandAdd', BrandController.add)
router.get('/brandAll', BrandController.all)

module.exports=router