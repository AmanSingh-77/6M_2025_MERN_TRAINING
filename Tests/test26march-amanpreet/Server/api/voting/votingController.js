const votingSchema = require ("./votingModel")

vote= async (req,res)=>{
    let total = await votingSchema.countDocuments().exec()
    let formData = req.body
    let validation = ""
    

    if(!formData.user_email){
        validation+="Please enter your email"
    }
    if(!formData.answer){
        validation+="Please select an option"
    }
    if(!formData.questionId){
        validation+="Please select the question for which you have answered"
    }

    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }
    else{
        votingSchema.findOne({user_email : formData.user_email})
        .then((voteData)=>{
            if(!!voteData){
                res.json({
                    status:422,
                    success:false,
                    message:"You can only answer once"
                })
            }
            else{
                let voteObj = new votingSchema()
                voteObj.autoId = total+1
                voteObj.user_email = formData.user_email
                voteObj.answer = formData.answer
                voteObj.questionId = formData.questionId
                voteObj.save()

                .then((voteData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Answer recorded",
                        data:voteData
                    })
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

module.exports = {vote}