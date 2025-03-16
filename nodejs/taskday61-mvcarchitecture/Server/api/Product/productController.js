add=(req,res)=>{
    console.log('Product add function is running');

    res.json({
        status:200,
        success:true,
        message:'Product add api is connected'
    })
}

all=(req,res)=>{
    console.log('Product all function is running');

    res.json({
        status:200,
        success:true,
        message:'Product all api is connected'
    })
}
module.exports={add,all}