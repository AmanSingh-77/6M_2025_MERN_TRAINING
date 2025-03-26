const categoryModel = require('./categoryModel')

add= async (req,res)=>{
    let total = await categoryModel.countDocuments().exec()
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
            categoryObj.autoId = total+1
            categoryObj.categoryName = req.body.categoryName
            categoryObj.categoryDesc = req.body.categoryDesc
            categoryObj.save()

            .then((categoryData)=>{
                res.json({
                    status:200,
                    success:true,
                    message:"Category created",
                    data:categoryData
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
        categoryModel.findOne({_id:formData._id})
        
        .then((categoryData)=>{
            if(!categoryData){
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
                    data:categoryData
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
        categoryModel.findOne({_id:formData._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                if(!!formData.categoryName){
                    categoryData.categoryName = formData.categoryName
                }
                if(!!formData.categoryDesc){
                    categoryData.categoryDesc = formData.categoryDesc
                }
                categoryData.save()
                .then((categoryData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data updated",
                        data:categoryData
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


deleteCategory=(req,res)=>{
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
        categoryModel.findOne({_id:formData._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                categoryModel.deleteOne({_id:formData._id})
                .then(()=>{
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
        categoryModel.findOne({_id:formData._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                categoryData.status = !categoryData.status
                categoryData.save()
                .then((categoryData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Status updated",
                        data:categoryData
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

module.exports = {add,all,single,update,deleteCategory,changeStatus}