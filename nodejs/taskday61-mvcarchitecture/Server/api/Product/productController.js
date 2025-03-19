const productModel = require('./productModel')

add=(req,res)=>{
    // Object for accessing the product schema
    let productObj = new productModel()

    // adding values from queries
    productObj.productCategory = req.query.productCategory
    productObj.brand = req.query.brand
    productObj.productName = req.query.productName
    productObj.productPrice = req.query.productPrice
    productObj.save()

    .then((productData)=>{
        res.json({
            status:200,
            success:true,
            message:"Product Added",
            data:productData
        })  
    })

    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal server error",
            error:err
        })
    })
}

all= async(req,res)=>{
    try{
        const result = await productModel.find()
        
        console.log("Product Data fetched");
        

        res.json({
            status:200,
            success:true,
            message:"Product Data fetched",
            data:result
        })
    }
    catch{
        res.json({
            status:500,
            success:false,
            message:"Internal server error",
            error:err
        })
    }
}

module.exports={add,all}