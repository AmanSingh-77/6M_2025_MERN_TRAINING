function createTable(){
    var num = parseInt(document.getElementById("num").value)
    var start = parseInt(document.getElementById("start").value)
    var end = parseInt(document.getElementById("end").value)
    

    for(start;start<=end;start++){
        document.getElementById("result").innerHTML+= num + ' x ' + start + ' = ' + num*start + '<br>'
    }
    
    
}