const brandModel = require("../Brand/brandModel")
const categoryModel = require("../Category/categoryModel")
const productModel = require("../Product/productModel")
const customerModel = require("../Customer/customerModel")

dashboard = async (req,res)=>{
    try{
        let brandTotal = await brandModel.countDocuments().exec()
        let categoryTotal = await categoryModel.countDocuments().exec()
        let productTotal = await productModel.countDocuments().exec()
        let customerTotal = await customerModel.countDocuments().exec()

        res.json({
            status:200,
            success:true,
            message:"Data Fetched Successfully !!",
            brandTotal,
            categoryTotal,
            productTotal,              
            customerTotal
        })
    }
    catch(err){
        res.json({
            status:500,
            success:false,
            message:"Internal Server Error !!"
        })
    }
}

module.exports = {dashboard}