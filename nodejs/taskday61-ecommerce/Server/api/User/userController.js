let userModel = require("./userModel")
let bcryptjs = require("bcryptjs")

const jwt = require("jsonwebtoken")
const SECRET = "MyProject@123"

login = async(req,res)=>{
    let validation = ""
    let formData = req.body

    if(!formData.email){
        validation+="Email is required"
    }
    if(!formData.password){
        validation+=" Password is required"
    }

    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }

    else{
        await userModel.findOne({email:formData.email})
        .then((userData)=>{
            if(!userData){
                res.json({
                    status:404,
                    success:false,
                    message:"User does not exist !!"
                })
            }

            else{
                let result = bcryptjs.compareSync(formData.password,userData.password)
                if(result){
                    let payload = {
                        userId : userData._id,
                        email: userData.email,
                        name: userData.name,
                        userType: userData.userType
                    }

                    let token = jwt.sign(payload, SECRET, {expiresIn:"24h"})
                    res.json({
                        status:200,
                        success:true,
                        message:"Login Successfully",
                        token
                    })
                }
                else{
                    res.json({
                        status:200,
                        success:false,
                        message:"Invalid Credentials"
                    })
                }
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                error:err
            })
        })
    }
}

module.exports = {login}