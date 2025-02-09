var TempArr = []
var arr2=[]
var itemPrice = []
var finalList = []

//Add Product Button
function addProduct(){
    var newProduct = document.getElementById("newProduct").value
    TempArr.push(newProduct)
    document.getElementById("newProduct").value = "" 

    for(i=0;i<TempArr.length;i++){
        var item = TempArr[i]
        arr2.push(item)

        document.getElementById("setItemList").innerHTML += '<option>'+item+'<options>'

        document.getElementById("addedMsg").innerHTML = `Product - ${item} Added in List`

        setTimeout(()=>{document.getElementById("addedMsg").innerHTML = ""},1000)

        TempArr.pop()
        
    }
    
}

//Add Price button
function addPrice(){
    var currItem = document.getElementById("setItemList").value
    var NewPrice = document.getElementById("setPrice").value

    itemPrice.push({item:currItem,price:NewPrice})
    
    document.getElementById("addedMsg").innerHTML = `Successfully set ${currItem} price to ${NewPrice}`

    setTimeout(()=>{document.getElementById("addedMsg").innerHTML = ""},1000)
    
}

//new transaction button
function newTrans(){
    
    document.getElementById("updatePriceText").innerHTML = 'Product price updated'

    setTimeout(()=>{document.getElementById("updatePriceText").innerHTML = ''},1000) 

    for(var i=0; i<itemPrice.length;i++){
        document.getElementById('checkoutList').innerHTML += `<option value=${i}>${itemPrice[i].item} $${itemPrice[i].price}/unit</option>`
    }
    
}

// Number pad 
function setUnit(num){
    document.getElementById("quantity").value = num 
}

//Add to card button
function addToCart(){
    alert("Added to Cart")
   
    var units = document.getElementById("quantity").value
    var currItem = document.getElementById("checkoutList").value
    
    let items = itemPrice[currItem].item
    let prices = itemPrice[currItem].price
   
    finalList.push({item:items, price:prices,  unit:units})
    document.getElementById("quantity").value = 0
}

//Pay button 
function pay(){
    var dateObj = new Date()

    var currDate = dateObj.getDate()
    var currMonth = dateObj.getMonth() + 1
    var currYear = dateObj.getFullYear()
    
    document.getElementById("date").innerHTML += currDate +"/"+ currMonth + "/" + currYear //print date on reciept

    document.getElementById("time").innerHTML += dateObj.toLocaleTimeString([] , {
        hour: '2-digit',
        minute: '2-digit'
    }) //print time on reciept

    var totalAmt = 0
    for(var i=0; i<finalList.length;i++){
        totalAmt += (finalList[i].unit * finalList[i].price)
        document.getElementById("recieptTable").innerHTML +=
    `<tr>
        <th>${finalList[i].item}</th>
        <th>${finalList[i].price}</th>
        <th>${finalList[i].unit}</th>
        <th>${finalList[i].unit * finalList[i].price}.00</th>
    </tr>`
    }

    document.getElementById("total").innerHTML += totalAmt.toFixed(2)
    tax = totalAmt*0.05
    document.getElementById("taxes").innerHTML += tax.toFixed(2)
    dueAmt = totalAmt+tax
    document.getElementById("due").innerHTML += dueAmt.toFixed(2)


    
    document.getElementById("recieptBox2").style.display = 'block'
    document.getElementById("recieptBox1").style.display = "none"
    
}
