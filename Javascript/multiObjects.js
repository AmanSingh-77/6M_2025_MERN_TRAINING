let car={
    car1:{
        name:"Thar",
        color:"black",
        model:2024
    },

    car2:{
        name:"Swift",
        color:"white",
        model:2022
    },

    car3:{
        name:"BMW",
        color:"blue",
        model:2025
    }
}


console.log(car);
console.log(car.car2);
console.log(car.car3.name);

car.car1.price="10L"
console.log(car.car1);

car.car4={
    name:"Merc",
    color:"blue",
    model:2019
}

car.car4.name="Verna"
console.log(car);


delete car.car2
console.log(car);






