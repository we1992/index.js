const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];


const getAge = pet => new Date().getFullYear() - pet.bornOn;


let petsWithAge = [...pets] ; 
petsWithAge.forEach(pet => pet.age = getAge(pet));
console.log(petsWithAge) ;


let dogs = pets.filter(dog => dog.type ==="dog");
console.log(dogs)



let jasper = pets.find(pet => pet.name ==="Jasper");

console.log(`Jasper is ${jasper.age} years old`) ;