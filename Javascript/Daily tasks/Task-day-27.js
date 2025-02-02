//Question-1
console.log("------------------------------");
console.log("Question-1");
console.log("------------------------------");

let songs=[]                                                                              //Array named songs

songs.push({song_name:"Wavy", singer:"Karan Aujla", language:"Punjabi"})                  //push 5 songs with common keys
songs.push({song_name:"After Hours", singer:"Weekend", language:"English"})
songs.push({song_name:"One of one", singer:"Jerry", language:"Punjabi"})
songs.push({song_name:"Bulleya", singer:"Papon", language:"Hindi"})
songs.push({song_name:"Die for you", singer:"Weekend", language:"English"})

for(keys in songs){                                                                        // Print all song names with singer and language
    console.log(songs[keys].song_name,"-", songs[keys].singer,"-",songs[keys].language);
}
console.log("Song name at location 3 - ",songs[2].song_name);                               //Print song name at location-3






//Question-2
console.log("------------------------------");
console.log("Question-2");
console.log("------------------------------");

let threeD=[                                                                               //3-D array
        [
            [1,2,3],
            ["Aman","Shruti","Ajay"],
        ],
        [
            [4,5,6],
            ["Ram","Pragati","Sam"]
        ]    
]

for(item of threeD){
    console.log(item);
}






//Question-3
console.log("------------------------------");
console.log("Question-3");
console.log("------------------------------");

let foodItems={                                                                             //Object with objects in its keys
    veg: {w: "wheat" , c:"cheese"},
    non_veg: {ck:"chicken kebab",ec:"egg curry"}
}

console.log(foodItems.veg.c)                                                                //Syntax to print cheese






//Question-4
console.log("------------------------------");
console.log("Question-4");
console.log("------------------------------");


function flat_arr(...arr){                                                                   //Function to return a flattened array
    console.log(arr.flat(Infinity));
}

flat_arr( [1, [2, [3, [4, 5]]]])