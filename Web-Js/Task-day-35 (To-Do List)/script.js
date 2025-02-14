// count variable to set id's
count = 0

// Add button
function add(){
    var a = document.getElementById("input").value

    if(a.trim()==""){
        alert("Field cannot be empty")
        document.getElementById("input").value = ""  
    }

    else{

        divs = document.createElement("div")   
    document.getElementById('box').appendChild(divs)
    divs.id = count
    document.getElementById(`${divs.id}`).classList.add('row')

    //for all the lists except first one
    if(divs.id!=0){
        document.getElementById(`${divs.id}`).innerHTML = `
        <div class="col-7 p-0">
                    <span id ="${divs.id}Span" class=" ps-4 ms-3 fw-bold">${a}</span>
                </div>

                <div class="col p-0 ">
                    <button onclick="edit('${divs.id}')" class="button me-2">Edit</button>
                    <button onclick="deleted('${divs.id}')" class="button text-danger">Delete</button>
                </div>`
                document.getElementById(`${(divs.id - 1)}`).innerHTML += `<hr class="my-3 w-75 mx-auto"></hr>`
    }

    //for first list
    else{
        document.getElementById(`${divs.id}`).innerHTML = `<div class="col-7 p-0">
                    <span id ="${divs.id}Span" class=" ps-4 ms-3 fw-bold">${a}</span>
                </div>

                <div class="col p-0 ">
                    <button onclick="edit('${divs.id}')" class="button me-2">Edit</button>
                    <button onclick="deleted('${divs.id}')" class="button text-danger">Delete</button>
                </div>
                `
    }
    
    count++

    document.getElementById("input").value = ""    
}

    }
        
    

// Edit Button
function edit(id){
    spanTxt = document.getElementById(`${id}Span`).innerHTML
    newPrompt = prompt('Edit Your To-Do list',`${spanTxt}`)
    checkPrompt = newPrompt.trim()
    if(checkPrompt!==''){
        document.getElementById(`${id}Span`).innerHTML = newPrompt
    }
}

// Delete Button
function deleted(id){
  a = document.getElementById(id)
  a.remove()
}