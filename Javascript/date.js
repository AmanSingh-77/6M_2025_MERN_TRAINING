let months=["January", "February", "March", "April", "May","June","July","August", "September", "October","November","December"]
let days=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let date = new Date()

console.log(date.getDate());


let currentMonth = date.getMonth()
console.log(months[currentMonth]);


let currentDay = date.getDate()
console.log(days[currentDay]);
