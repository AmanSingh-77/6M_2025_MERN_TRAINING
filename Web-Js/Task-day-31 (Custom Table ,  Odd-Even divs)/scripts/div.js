function createDivs(){
    var num = parseInt(document.getElementById("num").value)

    if(num%2==0){
        color = 'red'
    }
    else{
        color = 'yellow'
    }
    
    for(var i = 1; i<=num;i++){
       
        var divs = document.createElement("div")
        divs.setAttribute("style",`height:100px; width:100px; background-color:${color}; margin-top:10px; margin-left:auto; margin-right:auto; border:0.5vh solid black`)
        
        document.getElementById("output").appendChild(divs) 
            
    }
}