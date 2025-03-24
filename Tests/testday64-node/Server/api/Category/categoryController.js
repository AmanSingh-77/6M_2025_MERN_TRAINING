const categoryModel = require('./categoryModel')

// Add category api
add=(req,res)=>{
    console.log("category added")

    let categoryObj = new categoryModel()
    categoryObj.categoryName = req.query.categoryName
    categoryObj.categoryGender = req.query.categoryGender
    categoryObj.categoryID = req.query.categoryID
    categoryObj.save()

    .then((categoryData)=>{
        res.json({
            status:200,
            success:true,
            message:"category added",
            data : categoryData
        })

    })
}

// View Category api
view= async(req,res)=>{
    const viewData = await categoryModel.find()

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