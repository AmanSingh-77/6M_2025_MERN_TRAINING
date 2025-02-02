let arr=["Aman", "Sam", "Ajay", "Shruti"]

let obj={
    name:"Aman",
    age:22,
    stream:"CSE"
}

for(x in arr){
    console.log(arr[x]);
}

console.log("-----------------------");

for(let key in obj){
    console.log(key);
}

console.log("-----------------------");


for(let key in obj){
    console.log(obj[key]);
}

