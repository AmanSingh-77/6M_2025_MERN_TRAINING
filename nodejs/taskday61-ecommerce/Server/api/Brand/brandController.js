const { uploadImg } = require('../../utilities/helper')
const brandModel = require('./brandModel')

add= async (req,res)=>{
    let total = await brandModel.countDocuments().exec()
    validation =""
    
    if(!req.body.brandName){
        validation += "Name is required"
    }
    if(!req.body.brandDesc){
        validation += "Description is required"
    }
    if(!req.file){
        validation+="Image is required"
    }

    if(!validation.trim()){
        // To check duplicates
    await brandModel.findOne({brandName:req.body.brandName})
    
    .then(async (brandData)=>{
        if(!brandData){
            // obj for accessing the schema
            let brandObj = new brandModel()

            // adding the values from queries
            brandObj.autoId = total+1
            brandObj.brandName = req.body.brandName
            brandObj.brandDesc = req.body.brandDesc
            try{
                let url = await uploadImg(req.file.buffer)
                brandObj.brandImage = url
            }
            catch(err){
                res.json({
                    status:500,
                    success:false,
                    message:"Error uploading the brand image !!",
                    error:err
                })
            }
            brandObj.save()

            .then((brandData)=>{
                console.log(req.file);
                
                res.json({
                    status:200,
                    success:true,
                    message:"brand added",
                    data:brandData
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
        brandModel.findOne({_id:formData._id})
        
        .then((brandData)=>{
            if(!brandData){
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
                    data:brandData
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
        brandModel.findOne({_id:formData._id})
        .then((brandData)=>{
            if(!brandData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                if(!!formData.brandName){
                    brandData.brandName = formData.brandName
                }
                if(!!formData.brandDesc){
                    brandData.brandDesc = formData.brandDesc
                }
                brandData.save()
                .then((brandData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data updated",
                        data:brandData
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


deleteBrand=(req,res)=>{
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
        brandModel.findOne({_id:formData._id})
        .then((brandData)=>{
            if(!brandData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                brandModel.deleteOne({_id:formData._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data deleted!"
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
        brandModel.findOne({_id:formData._id})
        .then((brandData)=>{
            if(!brandData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                brandData.status = !brandData.status
                brandData.save()
                .then((brandData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data updated",
                        data:brandData
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

module.exports = {add,all,single,update,deleteBrand,changeStatus}