// Question-1

let country = ["India", "USA", "Australia","China","France"]    //Array with 5 countries
console.log(country);                                           //Print the entire array
console.log("length of the array - ",country.length);           //Print the length of the array
console.log("Country at position 3 - ",country[2]);             //Print country at position 3
country.shift()                                                 //Remove the first country India
country.push("Italy")                                           //Add a country at the end

console.log("Traversed array -");                               //Traverse the array
for(var i=0;i<country.length;i++){
    console.log(country[i]);
}





// Question - 2
console.log("---------------------------");
console.log("Question-2");
console.log("---------------------------");


let employee={                                                   //Create an object employee
    employee_name:"Ram",
    dept:"CSE",
    join_year:2025
}

console.log("Full object print - ",employee)                      //Print object
console.log("Print dept of employee - ",employee.dept)            //Print dept of employee
delete employee.join_year                                         //delete join year
employee.employee_name="Aman"                                     //replace empoyee name with your name

console.log("Object after changes - ",employee);                  //Object after changes






// Question - 3
console.log("---------------------------");
console.log("Question-3");
console.log("---------------------------");

function printElements(...x){                                      //Function with rest parameter
    for(var i=0;i<x.length;i++){                                   //Traverse each element in the argument
        console.log(x[i])
    }
}

printElements("Aman","Sam",7,4,["hello", "Aman"])







// Question-4
console.log("---------------------------");
console.log("Question-4");
console.log("---------------------------");


let numbers=[]                                                    //Array numbers with 50 numbers
for(var i=1;i<=50;i++){
    numbers.push(i)
}

let smallArray=[]                                                 //Smaller array with numbers divisible by 3 from main array

for(var j=0;j<numbers.length;j++){
    if(numbers[j]%3==0){
        smallArray.push(numbers[j])
    }
}

console.log(numbers);                                              //Print main array
console.log(smallArray);                                           //Print smaller array







// Question-5
console.log("---------------------------");
console.log("Question-5");
console.log("---------------------------");


let i_am_array=[]                                                   //i_am_array with 20 elements

for(var i=1;i<=20;i++){
    i_am_array.push(i)
}

console.log("Print i_am_array - ",i_am_array);                      //print i_am_array


console.log("Print each element of array");                        //Print each element of i_am_array
for(var k=0;k<i_am_array.length;k++){
    console.log(i_am_array[k])
}

let teen_guna=[]                                                     //array named teen_guna with each element of i_am_array multiplied by 3

for(var j=0;j<i_am_array.length;j++){
    teen_guna.push(i_am_array[j]*3)
}

console.log(teen_guna);                                               //Print teen_guna array
console.log("Length of teen_gunna array - ",teen_guna.length);        //Length of teen_guna array
console.log("teen_guna type is:",typeof(teen_guna));                  //type of teen_guna array
console.log("i_am_array type is:",typeof(i_am_array));                //type of i_am_array  






