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

all=(req,res)=>{
    console.log('brand All function is running');

    res.json({
        status:200,
        success:true,
        message:"brand all api is connected"
    })
}

module.exports = {add,all}