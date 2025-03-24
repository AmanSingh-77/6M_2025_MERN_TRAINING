const categoryModel = require('./categoryModel')

add= async (req,res)=>{
    let validation = ""

    if(!req.body.categoryName){
        validation += "Name is required"
    }
    if(!req.body.categoryDesc){
        validation += "Description is required"
    }

    if(!validation.trim()){
        // To check duplicates
    await categoryModel.findOne({categoryName:req.body.categoryName})
    
    .then((categoryData)=>{
        if(!categoryData){
            // obj for accessing the schema
            let categoryObj = new categoryModel()

            // adding the values from queries
            categoryObj.categoryName = req.body.categoryName
            categoryObj.categoryDesc = req.body.categoryDesc
            categoryObj.save()

            .then((categryData)=>{
                res.json({
                    status:200,
                    success:true,
                    message:"Category created",
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
                message:"Category already exists",
                data:categoryData
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

    categoryModel.find(formData)
    .limit(limit)
    .skip((currentPage-1)*limit)

    .then(async (categoryData)=>{
        if(categoryData.length>0){
            let total = await categoryModel.countDocuments().exec()
            res.json({
                status:200,
                success:true,
                message:"Category Data fetched",
                total:total,
                data:categoryData
            })
        }
        else{
            res.json({
                status:404,
                success:false,
                message:"Category not found"
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