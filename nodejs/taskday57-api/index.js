const express = require('express')

const app = express()

const PORT = 5001

app.listen(PORT,()=>{
    console.log('Server running at port ',PORT);
})


// 1.) GET method to tell your name
app.get('/',(req,res)=>{
    res.json({
        name:'Amanpreet Singh'
    })
})

// 2.) POST method to tell your college
app.post('/college',(req,res)=>{
    res.json({
        college:'Guru Nanak Dev University, Regional Campus, Jalandhar'
    })
})

// 3.) GET method to tell your hobby
app.get('/hobby',(req,res)=>{
    res.json({
        hobby:'Basketball'
    })
})

// 4.) POST method to tell your college
app.post('/course',(req,res)=>{
    res.json({
        course:'B.Tech CSE'
    })
})

// 5.) GET method to tell technology
app.get('/technology',(req,res)=>{
    res.json({
        technology:'MERN Stack'
    })
})

