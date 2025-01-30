
//Ques-5 - GST

let gst=(price)=>{
    if(price>1000){
        console.log("No shipping charge")
        console.log("New Price - ",price)
    }
    else if(price>500){
        console.log("Shipping charge = 50")
        console.log("New price - ",price+50)
    }
    
    else if(price<500){
        console.log("Shipping Charge = 100");
        console.log("New price - ",price+100);
        
    }
}

gst(600)
gst(1500)
gst(400)