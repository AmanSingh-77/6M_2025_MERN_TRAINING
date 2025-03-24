const router = require('express').Router()

const categoryController = require('../api/Category/categoryController')
const productController = require('../api/Product/productController')


// Categor routes
router.get("/categoryAdd" , categoryController.add)
router.get("/categoryView" , categoryController.view)

// product routes
router.get("/productAdd" , productController.add)
router.get("/productView" , productController.view)


module.exports = router
