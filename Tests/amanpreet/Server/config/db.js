const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/amanpreet')
.then(()=>{
    console.log("database connected");
})

.catch((err)=>{
    console.log("Error connecting database");
})