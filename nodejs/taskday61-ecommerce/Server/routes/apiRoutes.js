const CategoryController = require("../api/Category/categoryController")
const ProductController = require('../api/Product/productController')
const BrandController = require('../api/Brand/brandController')

const router = require("express").Router()

const multer = require("multer")



// Brand image multer code
const brandStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Server/public/brandImages/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
    }
  })
  const brandUpload = multer({ storage: brandStorage })


// Category api's 
router.post('/categoryAdd',CategoryController.add)
router.post('/categoryAll',CategoryController.all)
router.post('/categorySingle', CategoryController.single)
router.post('/categoryUpdate', CategoryController.update)
router.post('/categoryDelete', CategoryController.deleteCategory)
router.post('/categoryStatus', CategoryController.changeStatus)

//Product api's 
router.post('/productAdd', ProductController.add)
router.post('/productAll', ProductController.all)
router.post('/productSingle', ProductController.single)
router.post('/productUpdate', ProductController.update)
router.post('/productDelete', ProductController.deleteProduct)
router.post('/productStatus', ProductController.changeStatus)

//Brand api's 
router.post('/brandAdd', brandUpload.single("brandImage") , BrandController.add)
router.post('/brandAll', BrandController.all)
router.post('/brandSingle', BrandController.single)
router.post('/brandUpdate', BrandController.update)
router.post('/brandDelete', BrandController.deleteBrand)
router.post('/brandStatus', BrandController.changeStatus)

module.exports=router