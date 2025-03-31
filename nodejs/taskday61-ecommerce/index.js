const express = require('express')
const app = express()

const PORT = 5000

app.listen(PORT,()=>{
    console.log("server running at port",PORT);  
})

// default api
app.get('/',(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"Server is running"
    })
})


app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:"40mb"}))


// for using product and category api's
const api = require('./Server/routes/apiRoutes')
app.use('/api',api)


// for using database
const db = require("./Server/config/db")

// for access to the images folder
app.use(express.static("./Server/public/"))