const CategoryController = require("../api/Category/categoryController")
const ProductController = require('../api/Product/productController')
const BrandController = require('../api/Brand/brandController')
const userController = require("../api/User/userController")
const customerController = require("../api/Customer/customerController")

const router = require("express").Router()
const multer = require("multer")

// login
router.post("/login", userController.login)

// User registeration
router.post("/user/register", customerController.register)



// To provide access
router.use(require("../middleware/tokenChecker"))



// Change password
router.post("/changePassword", userController.changePassword)

// Category api's 
router.post('/categoryAll',CategoryController.all)
router.post('/categorySingle', CategoryController.single)


//Product api's 
router.post('/productAll', ProductController.all)
router.post('/productSingle', ProductController.single)


//Brand api's 
router.post('/brandAll', BrandController.all)
router.post('/brandSingle', BrandController.single)

module.exports=router