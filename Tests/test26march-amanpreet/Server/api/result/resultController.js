const pollSchema = require ("../poll/pollModel")
const votingSchema = require ("../voting/votingModel")

result=(req,res)=>{
    let formData = req.body
    let validation =""
    let user_email = formData.user_email

    if(!user_email){
        validation+="Please enter your email"
    }

    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }
    else{
        votingSchema.findOne({user_email:formData.user_email})
        .then((resultData)=>{
            if(!resultData){
                res.json({
                    status:404,
                    success:false,
                    message:"No entry found"
                })
            }
            else{
                let questionId = resultData.questionId
                let submittedAnswer = resultData.answer   

                pollSchema.findOne({autoId:questionId})
                .then((checkData)=>{
                    if(!checkData){
                        res.json({
                            status:404,
                            success:false,
                            message:"Question id is incorrect"
                        })
                    }
                    else{
                        if(submittedAnswer==checkData.answer){
                            res.json({
                                status:200,
                                success:true,
                                message:"Correct answer",
                                data:checkData
                            })
                        }
                        else{
                            res.json({
                                status:200,
                                success:true,
                                message:"Wrong answer",
                                data:checkData
                            })
                        }
                    }
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error"
                    })
                })

            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error"
            })
        })
    }
}

module.exports = {result}