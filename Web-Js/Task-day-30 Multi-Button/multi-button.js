    var div1Text = document.getElementById("div1").innerHTML
    var div2Text = document.getElementById("div2").innerHTML
    

// Button-1
function copyText(){
    var inp1 = document.getElementById("inp1").value
    var inp2 = document.getElementById("inp2").value
    document.getElementById("inp2").value = inp1 
}


// Button-2
function alertMe(){
    var inp1 = document.getElementById("inp1").value 
    alert(inp1)
    alert(div1Text)
    alert(div2Text)
}


// Button-3
function copyToDiv2(){
    var inp1 = document.getElementById("inp1").value 
    document.getElementById("div2").innerHTML =inp1
}


// Button-4
function concat(){
    var inp1 = document.getElementById("inp1").value 
    var inp2 = document.getElementById("inp2").value 

    document.getElementById("div1").innerHTML = div1Text+inp1+inp2
}


// Button-5
function changeBtn(){
    document.getElementById("div2").style.backgroundImage = "URL('img1.jpg')"
    document.getElementById("div2").style.backgroundSize = "cover"
    document.getElementById("div2").style.color = "white"

    inp1.setAttribute("type","radio")
    inp2.setAttribute("type","checkbox")
}