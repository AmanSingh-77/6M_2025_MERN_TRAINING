const mongoose = require ('mongoose')

let votingSchema = mongoose.Schema({
        autoId:{type:Number,default:1},
        user_email:{type:String, default:""},
        answer:{type:Number,default:0},
        questionId:{type:Number,default:0},
        status:{type:Boolean,default:true},
        createdAt:{type:Date,default:Date.now}
})

module.exports= mongoose.model("votingSchema", votingSchema)