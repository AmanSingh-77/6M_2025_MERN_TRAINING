const mongoose = require ('mongoose')

let pollSchema = mongoose.Schema({
        autoId:{type:Number,default:1},
        question:{type:String,default:""},
        option1:{type:String,default:""},
        option2:{type:String,default:""},
        option3:{type:String,default:""},
        option4:{type:String,default:""},
        answer:{type:String,default:""},
        status:{type:Boolean,default:true},
        createdAt:{type:Date,default:Date.now}
})

module.exports= mongoose.model("pollSchema", pollSchema)