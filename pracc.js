// class Vehicle {
//     constructor(color, model){
//         this.color = color;
//         this.model = model;
//     }

//     display() {
//         console.log(`This vehicle's color is ${this.color} and it's a ${this.model} `);
//     }
// }

// class Car extends Vehicle{
//     constructor(color, model){
//         super(color,model);
//     }

//     display() {
//         console.log(`This car's color is ${this.color} and it's a ${this.model} `);
//     }
// }

// class Moto extends Vehicle{
//     constructor(color, model){
//         super(color,model);
//     }

//     display() {
//         console.log(`This motorcycle's color is ${this.color} and it's a ${this.model} `);
//     }
// }

// const mercedesAClasse = new Car('red','A class' )

// mercedesAClasse.display();

// function hello(firstName) {
//     return "Hello " + firstName + "welcome to the Wild.";
//    }
   
   const hello = firstName => console.log(`Hello ${firstName} welcome to the Wild.`)

   const fruits = ["Bananas", "Oranges", "Strawberries" ];
    const vegetables = ["Cabbages", "Carrots" ];
    vegetables.push(...fruits);
console.log(vegetables);
hello('john');