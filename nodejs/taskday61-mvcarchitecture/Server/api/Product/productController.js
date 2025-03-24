const productModel = require('./productModel')

add= async (req,res)=>{
    let validation =""
    let formData = req.body

    if(!formData.productCategory){
        validation="Category is required"
    }
    if(!formData.brand){
        validation="Brand is required"
    }
    if(!formData.productName){
        validation="Name is required"
    }
    if(!formData.productPrice){
        validation="Price is required"
    }

    if(!validation.trim()){
        // To check duplicates
    await productModel.findOne({productName:formData.productName})
    
    .then((productData)=>{
        if(!productData){
            // obj for accessing the schema
            let productObj = new productModel()

            // adding the values from queries
            productObj.productCategory = req.body.productCategory
            productObj.brand = req.body.brand
            productObj.productName = req.body.productName
            productObj.productPrice = req.body.productPrice
            productObj.save()

            .then((categryData)=>{
                res.json({
                    status:200,
                    success:true,
                    message:"Product added",
                    data:categryData
                })
            })

            .catch((err)=>{
                res.json({
                    status:500,
                    success:false,
                    message:'Internal Server error',
                    error:err
                })
            })

        }
        else{
            res.json({
                status:200,
                success:true,
                message:"Product already exists",
                data:productData
            })
        }
    })

    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal server error!",
            error:err
        })
    })
    
    }
    else{
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }
}


all= async(req,res)=>{
    let formData = req.body
    let limit = formData.limit
    let currentPage = formData.currentPage

    delete formData.limit
    delete formData.currentPage

    productModel.find(formData)
    .limit(limit)
    .skip((currentPage-1)*limit)

    .then(async (productData)=>{
        if(productData.length>0){
            let total = await productModel.countDocuments().exec()
            res.json({
                status:200,
                success:true,
                message:"Product Data fetched",
                total:total,
                data:productData
            })
        }
        else{
            res.json({
                status:404,
                success:false,
                message:"Product not found"
            })
        }
    })

    .catch(()=>{
        res.json({
            status:500,
            success:false,
            message:"Internal server error"
        })
    })
}

module.exports={add,all}