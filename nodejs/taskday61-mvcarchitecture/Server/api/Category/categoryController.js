const categoryModel = require('./categoryModel')

add=(req,res)=>{
    // obj for accessing the schema
    let categoryObj = new categoryModel()

    // adding the values from queries
    categoryObj.categoryName = req.query.categoryName
    categoryObj.categoryDesc = req.query.categoryDesc
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

all= async(req,res)=>{
    try{
        const result = await categoryModel.find()

        console.log("Category Data fetched");
        

        res.json({
            status:200,
            success:true,
            message:"Category Data fetched",
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

module.exports = {add,all}