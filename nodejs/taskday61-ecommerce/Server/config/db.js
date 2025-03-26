const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/day61")

.then(()=>{
    console.log('Database is connected');
})

.catch((err)=>{
    console.log("There was a problem - " ,err);
})