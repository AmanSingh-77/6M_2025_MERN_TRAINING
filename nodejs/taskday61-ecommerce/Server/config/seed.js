const userModel = require("../api/User/userModel")
const bcryptjs = require("bcryptjs")

        userModel.findOne({email:"admin@gmail.com"})
        .then(async (userData)=>{
            if(!userData){
               let userTotal= await userModel.countDocuments().exec()
                let userObj=new userModel()
                userObj.autoId = userTotal+1
                userObj.name= "admin" 
                userObj.email="admin@gmail.com" 
                userObj.password=bcryptjs.hashSync("admin",10) 
                userObj.userType = 1
                userObj.save()
                .then((userData)=>{
                    console.log("Admin seeded successfully")
                })
                .catch((err)=>{
                    console.log("Error while seeding admin", err);
                })
            }
            else{
                console.log("Admin already exists !!")   
            }
        })
        .catch((err)=>{
            console.log("Error while seeding admin",err);
        })