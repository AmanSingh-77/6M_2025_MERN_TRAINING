const { uploadImg } = require('../../utilities/helper')
const productModel = require('./productModel')

add= async (req,res)=>{
    let total = await productModel.countDocuments().exec()
    
    let validation =""
    let formData = req.body

    if(!formData.productCategory){
        validation+="Category is required "
    }
    if(!formData.brand){
        validation+="Brand is required "
    }
    if(!formData.productName){
        validation+="Name is required "
    }
    if(!formData.productPrice){
        validation+="Price is required "
    }
    if(!req.file){
        validation+="Image is required "
    }

    if(!validation.trim()){
        // To check duplicates
    await productModel.findOne({productName:formData.productName})
    
    .then(async (productData)=>{
        if(!productData){
            // obj for accessing the schema
            let productObj = new productModel()

            // adding the values from queries
            productObj.autoId = total+1
            productObj.productCategory = req.body.productCategory
            productObj.brand = req.body.brand
            productObj.productName = req.body.productName
            productObj.productPrice = req.body.productPrice
            try{
                let url = await uploadImg(req.file.buffer)
                productObj.productImage = url
            }
            catch(err){
                res.json({
                    status:500,
                    success:false,
                    message:"Error uploading the product image !!",
                    error:err
                })
            }
            productObj.save()

            .then((productData)=>{
                res.json({
                    status:200,
                    success:true,
                    message:"Product added",
                    data:productData
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


single=(req,res)=>{
    let validation = ""
    let formData = req.body
    if(!formData._id){
        validation+= "_id is required"
    }

    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }
    else{
        productModel.findOne({_id:formData._id})
        
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"No data found"
                })
            }
            else{
                res.json({
                    status:200,
                    success:true,
                    message:"Data fetched",
                    data:productData
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:422,
                success:false,
                message:"Internal server error",
                error:err
            })
        })
    }
}


update=(req,res)=>{
    let formData = req.body
    let validation = ""
    if(!formData._id){
        validation+="_id is required"
    }

    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }
    else{
        productModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                if(!!formData.productCategory){
                    productData.productCategory = formData.productCategory
                }
                if(!!formData.brand){
                    productData.brand = formData.brand
                }
                if(!!formData.productName){
                    productData.productName = formData.productName
                }
                if(!!formData.productPrice){
                    productData.productPrice = formData.productPrice
                }

                productData.save()
                .then((productData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data updated",
                        data:productData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:422,
                        success:false,
                        message:"Internal Server error"
                    })
                })
            }
        })

        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error"
            })
        })
    }
}


deleteProduct=(req,res)=>{
    let formData = req.body
    let validation = ""
    if(!formData._id){
        validation+="_id is required"
    }

    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }
    else{
        productModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                productModel.deleteOne({_id:formData._id})
                .then((productData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data deleted"
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:422,
                        success:false,
                        message:"Internal Server error"
                    })
                })
            }
        })

        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error"
            })
        })
    }
}


changeStatus=(req,res)=>{
    let formData = req.body
    let validation = ""
    if(!formData._id){
        validation+="_id is required"
    }

    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }
    else{
        productModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                productData.status = !productData.status
                productData.save()
                .then((productData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data updated",
                        data:productData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:422,
                        success:false,
                        message:"Internal Server error"
                    })
                })
            }
        })

        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error"
            })
        })
    }
}

module.exports={add,all,single,update,deleteProduct,changeStatus}