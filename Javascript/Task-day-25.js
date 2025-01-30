// Ques-1 - To print the table for the given argument
let table=(num)=>{
    for(var i=1;i<=10;i++){
        console.log(num,"*",i,"=",num*i)
    }
}

table(5)



// Ques-2 - Print string letters
function printName(word){
    for(var i=0;i<word.length;i++){
        console.log(word[i])
    }
}

console.log("-Second question");
printName("aman")



// Ques 3 - loop for the given output
console.log("-Third Question")
for(var a=1;a<2;a++){
    for(var b=1;b<3;b++){
        for(var c=1;c<=3;c++){
            console.log(a,b,c)
        }
    }
}