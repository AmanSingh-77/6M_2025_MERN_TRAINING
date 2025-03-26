const CategoryController = require("../api/Category/categoryController")
const ProductController = require('../api/Product/productController')
const BrandController = require('../api/Brand/brandController')

const router = require("express").Router()


// Category api's 
router.get('/categoryAdd',CategoryController.add)
router.get('/categoryAll',CategoryController.all)
router.get('/categorySingle', CategoryController.single)
router.get('/categoryUpdate', CategoryController.update)
router.get('/categoryDelete', CategoryController.deleteCategory)
router.get('/categoryStatus', CategoryController.changeStatus)

//Product api's 
router.get('/productAdd', ProductController.add)
router.get('/productAll', ProductController.all)
router.get('/productSingle', ProductController.single)
router.get('/productUpdate', ProductController.update)
router.get('/productDelete', ProductController.deleteProduct)
router.get('/productStatus', ProductController.changeStatus)

//Brand api's 
router.get('/brandAdd', BrandController.add)
router.get('/brandAll', BrandController.all)
router.get('/brandSingle', BrandController.single)
router.get('/brandUpdate', BrandController.update)
router.get('/brandDelete', BrandController.deleteBrand)
router.get('/brandStatus', BrandController.changeStatus)

module.exports=router