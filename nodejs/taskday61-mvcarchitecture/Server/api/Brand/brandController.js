const brandModel = require('./brandModel')

add=(req,res)=>{
    // obj for accessing the schema
    let brandObj = new brandModel()

    // adding the values from queries
    brandObj.brandName = req.query.brandName
    brandObj.brandDesc = req.query.brandDesc
    brandObj.save()

    .then((brandData)=>{
        res.json({
            status:200,
            success:true,
            message:"Brand added",
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

all= async(req,res)=>{
    try{
        const result = await brandModel.find()

        console.log("Brand Data fetched");
        

        res.json({
            status:200,
            success:true,
            message:"Brand Data fetched",
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