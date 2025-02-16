//For restart button
document.getElementById('restart').addEventListener('click',restart)

//Add reload function to restart
function restart(){
    location.reload()
}

//To start input field at 1
document.getElementsByTagName('input')[0].focus()

function game(ans,index){
    var input = document.getElementsByTagName('input')[index].value
    var img = document.getElementById(`img${index}`)
    
    if(input==ans || input==''){
        img.src = 'images/image1.png'
        document.getElementsByTagName('input')[index].setAttribute('disabled','true')
        document.getElementsByTagName('input')[index+1].focus()
    }
    else{
        img.src = 'images/image2.png'
        document.getElementsByTagName('input')[index].setAttribute('disabled','true')
        document.getElementById('restart').style.display = 'block'
        document.getElementsByTagName('input')[index+1].focus()
    }
}

//Pushing the functions
document.getElementById('inp1').addEventListener('input', ()=>{ game('c',0)})
document.getElementById('inp2').addEventListener('input', ()=>{ game('a',1)})
document.getElementById('inp3').addEventListener('input', ()=>{ game('r',2)})
document.getElementById('inp4').addEventListener('input', ()=>{ game('s',3)})


