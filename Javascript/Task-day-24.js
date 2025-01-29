// Ques-1 - To return the remainder after divided by 3
function remainder(y){
    console.log(y%3)
}

remainder(4)


// Ques-2 - To check if the number is even or odd
function check(num){
    if(num%2==0){
        console.log("Even")
    }

    else{
        console.log("Odd");
        
    }
}

check(13);


// Ques-3 - To check if two numbers are equal
let equal=(a,b)=>{
    if(a===b){
        console.log("Equal")
    }
    else{
        console.log("Not Equal")
    }
}

equal(5,5)



// Ques-4 - Any pure function
function add(c,d){
    console.log(c+d)
}

add(2,3)
add(2,3)


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
    
    else if(price<5000){
        console.log("Shipping Charge = 100");
        console.log("New price - ",price+100);
        
    }
}

gst(600)
gst(1500)




