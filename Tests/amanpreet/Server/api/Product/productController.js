const productModel = require('./productModel')

// Add product api
add=(req,res)=>{
    console.log("product added")

    let productObj = new productModel()
    productObj.productName = req.query.productName
    productObj.productCategory = req.query.productCategory
    productObj.productID = req.query.productID
    productObj.save()

    .then((productData)=>{
        res.json({
            status:200,
            success:true,
            message:"product added",
            data : productData
        })

    })
}

// View product api
view= async(req,res)=>{
    const viewData = await productModel.find()

    try{
        res.json({
            status:200,
            success:true,
            message:'Data fetched',
            data:viewData
        })
    }

    catch{
        res.json({
            status:500,
            success:false,
            message:'Internal Server Error'
        })
    }
}

module.exports={add,view}