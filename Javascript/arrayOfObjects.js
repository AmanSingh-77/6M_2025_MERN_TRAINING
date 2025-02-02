let restro=[
    {name:"Burger King", rating:4},
    {name:"Mcdonalds", rating:5},
    {name:"Neels", rating:3},
]

console.log(restro);

console.log(restro[1]);
console.log(restro[0].name);

restro.push({name:"Domino's",rating:5})
console.log(restro);


for(var i=0;i<restro.length;i++){
    console.log(restro[i]);
}

for(var i=0;i<restro.length;i++){
    console.log(restro[i].name);
}

for(var i=0;i<restro.length;i++){
    restro[i].distance = i+"KM"
}

console.log(restro);


