const express = require ("express")
const app = express()

const PORT = 5000

app.listen(PORT,()=>{
    console.log('Server running at port ',PORT);
})

app.get("/",(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"Server connected"
    })
})

app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:"50mb"}))

const api = require('./Server/routes/apiRoutes')
app.use('/api',api)

const db = require('./Server/config/db')