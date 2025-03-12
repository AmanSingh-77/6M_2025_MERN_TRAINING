const express = require('express')

const app = express()

const PORT = 5000

app.listen(PORT,()=>{
    console.log('Server running at port ',PORT);
})

// default api
app.get("/",(req,res)=>{
    res.json({
        status:200,
        success:true, 
        message:"Server running"
    })
})

var weather = require('weather-js');

// variables to store name and temperature
var loc_name;
var loc_temp;


// Using query string
app.get("/query", (req,res)=>{
    let loc = req.query.location

    weather.find({search: loc , degreeType: 'C'}, function(err, result) {
        loc_name = result[0].location.name
        loc_temp = result[0].current.temperature
  
        if(err) console.log(err);
        
        console.log(JSON.stringify(result[0].location.name, null, 2));
        console.log(JSON.stringify(result[0].current.temperature + ' C' , null, 2));
        
        res.json({
            name :loc_name,
            temp : loc_temp
          })
      });
      
    })


// Using Params
app.get("/params/:location", (req,res)=>{
    let loc = req.params.location

    weather.find({search: loc , degreeType: 'C'}, function(err, result) {
        loc_name = result[0].location.name
        loc_temp = result[0].current.temperature
  
        if(err) console.log(err);
        
        console.log(JSON.stringify(result[0].location.name, null, 2));
        console.log(JSON.stringify(result[0].current.temperature + ' C' , null, 2));
        
        res.json({
            name :loc_name,
            temp : loc_temp
          })
      });
      
    })


    
    
    



