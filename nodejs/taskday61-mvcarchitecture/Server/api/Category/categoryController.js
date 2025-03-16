add=(req,res)=>{
    console.log('Category Add function is running');

    res.json({
        status:200,
        success:true,
        message:"Category add api is connected"
    })
}

all=(req,res)=>{
    console.log('Category All function is running');

    res.json({
        status:200,
        success:true,
        message:"Category all api is connected"
    })
}

module.exports = {add,all}