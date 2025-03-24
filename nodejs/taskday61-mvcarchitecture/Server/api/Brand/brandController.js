const brandModel = require('./brandModel')

add= async (req,res)=>{
    validation =""
    
    if(!req.body.brandName){
        validation += "Name is required"
    }
    if(!req.body.brandDesc){
        validation += "Description is required"
    }

    if(!validation.trim()){
        // To check duplicates
    await brandModel.findOne({brandName:req.body.brandName})
    
    .then((brandData)=>{
        if(!brandData){
            // obj for accessing the schema
            let brandObj = new brandModel()

            // adding the values from queries
            brandObj.brandName = req.body.brandName
            brandObj.brandDesc = req.body.brandDesc
            brandObj.save()

            .then((categryData)=>{
                res.json({
                    status:200,
                    success:true,
                    message:"brand added",
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
                message:"brand already exists",
                data:brandData
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


all=(req,res)=>{
    let formData = req.body
    let limit = formData.limit
    let currentPage = formData.currentPage

    delete formData.limit
    delete formData.currentPage

    brandModel.find(formData)
    .limit(limit)
    .skip((currentPage-1)*limit)

    .then(async (brandData)=>{
        if(brandData.length>0){
            let total = await brandModel.countDocuments().exec()
            res.json({
                status:200,
                success:true,
                message:"brand Data fetched",
                total:total,
                data:brandData
            })
        }
        else{
            res.json({
                status:404,
                success:false,
                message:"brand not found"
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


module.exports = {add,all}