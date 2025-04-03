const customerModel = require("./customerModel")
const userModel = require("../User/userModel")

// To encrypt password in database
const bcryptjs=require("bcryptjs")

register=(req,res)=>{

    let validation=""
    let formData=req.body 

    if(!formData.name){
        validation+="Name is required"
    }
    if(!formData.email){
        validation+=" email is required"
    }
    if(!formData.password){
        validation+=" password is required"
    }
    if(!formData.phoneNumber){
        validation+=" Phone number is required"
    }
    if(!formData.address){
        validation+=" address is required"
    }

    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }
    
    else{
        userModel.findOne({email:formData.email})
        .then(async (userData)=>{
            if(!userData){
                //insert in userModel first 
                let userTotal=await userModel.countDocuments().exec()
                let userObj=new userModel()
                userObj.autoId = userTotal+1
                userObj.name=formData.name 
                userObj.email=formData.email 
                userObj.password=bcryptjs.hashSync(formData.password,10) 
                userObj.userType = 2
                userObj.save()

                .then(async (userData)=>{
                    // insert into customer model 
                    let customerTotal=await customerModel.countDocuments().exec()
                    let customerObj=new customerModel() 
                    customerObj.autoId=customerTotal+1 
                    customerObj.phoneNumber=formData.phoneNumber
                    customerObj.address=formData.address
                    customerObj.userId = userData._id 
                    customerObj.save()
                    .then((customerData)=>{
                        res.json({
                            status:201,
                            success:true,
                            message:"Customer registered Successfully!",
                            userData,
                            customerData
                        })
                    })
                    .catch((err)=>{
                        res.json({
                            status:500,
                            success:false,
                            message:"Internal server error!!"
                        })
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error!!"
                    })
                })
            }
            
            else{
                res.json({
                    status:200,
                    success:false,
                    message:"User already exist",
                    data:userData
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error!!"
            })
        })
    }
}

module.exports={register}