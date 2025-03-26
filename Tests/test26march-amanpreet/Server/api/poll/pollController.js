const pollSchema = require ('./pollModel')

setQues=async (req,res)=>{
    let total = await pollSchema.countDocuments().exec()
    let validation = ""
    let formData = req.body

    // null check
    if(!formData.question){
        validation+="Please specify the question"
    }
    if(!formData.option1){
        validation+="Please specify the option1"
    }
    if(!formData.option2){
        validation+="Please specify the option2"
    }
    if(!formData.option3){
        validation+="Please specify the option3"
    }
    if(!formData.option4){
        validation+="Please specify the option4"
    }
    if(!formData.answer){
        validation+="Please specify the answer"
    }

    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }

    else{
        // duplicacy check
        pollSchema.findOne({question:formData.question})
        .then((pollData)=>{
            if(!!pollData){
                res.json({
                    status:422,
                    success:false,
                    message:"This question already exists",
                    data:pollData
                })
            }
            else{
                let pollObj = new pollSchema
                pollObj.autoId = total+1
                pollObj.question = formData.question
                pollObj.option1 = formData.option1
                pollObj.option2 = formData.option2
                pollObj.option3 = formData.option3
                pollObj.option4 = formData.option4
                pollObj.answer = formData.answer
                pollObj.save()

                .then((pollData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Question created",
                        data:pollData
                    })
                })
                .catch((er)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"internal server error",
                        error:err
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"internal server error",
                error:err
            })
        })
    }
}

module.exports = {setQues}