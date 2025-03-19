const express = require('express')

const app = express()

const PORT = 5001

app.listen(PORT,()=>{
    console.log("Server running at PORT", PORT);
})

app.get("/", (req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"Api connected"
    })
})

// routes file
const api = require('./Server/routes/apiRoutes')
app.use('/api',api)

// database
const db = require('./Server/config/db')

