const CategoryController = require("../api/Category/categoryController")
const ProductController = require('../api/Product/productController')
const BrandController = require('../api/Brand/brandController')
const userController = require("../api/User/userController")
const customerController = require("../api/Customer/customerController")

const router = require("express").Router()
const multer = require("multer")


// Authorization
router.use(require("../middleware/adminTokenChecker"))


// Brand image multer code
const brandStorage = multer.memoryStorage()
const brandUpload = multer({ storage: brandStorage })


// Product image multer code
const productStorage = multer.memoryStorage()
const productUpload = multer({ storage: productStorage })



// Category api's 
router.post('/categoryAdd',CategoryController.add)
router.post('/categoryUpdate', CategoryController.update)
router.post('/categoryDelete', CategoryController.deleteCategory)
router.post('/categoryStatus', CategoryController.changeStatus)

//Product api's 
router.post('/productAdd', productUpload.single("productImage") , ProductController.add)
router.post('/productUpdate', ProductController.update)
router.post('/productDelete', ProductController.deleteProduct)
router.post('/productStatus', ProductController.changeStatus)

//Brand api's 
router.post('/brandAdd', brandUpload.single("brandImage") , BrandController.add)
router.post('/brandUpdate', BrandController.update)
router.post('/brandDelete', BrandController.deleteBrand)
router.post('/brandStatus', BrandController.changeStatus)

module.exports=router