// let animal    = {}
// animal.name   = 'Leo'
// animal.energy = 10

// animal.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
// }

// animal.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
// }

// animal.play = function (length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
// }

// // We need to create more than one animal. Naturally the next step for this would be to encapsulate that logic inside of a function that we can invoke whenever we needed to create a new animal.


// /**
//  * Functional Instantiation
//  */
// function Animal (name, energy) {
//     let animal    = {}
//     animal.name   = name
//     animal.energy = energy

//     animal.eat = function (amount) {
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     }

//     animal.sleep = function (length) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     }

//     animal.play = function (length) {
//         console.log(`${this.name} is playing.`)
//         this.energy -= length
//     }

//     return animal
// }

// const leo   = Animal('Leo', 7)
// const snoop = Animal('Snoop', 10)


// /**
//  * Functional Instantiation with Shared Methods
//  */
// const animalMethods = {
//     eat(amount) {
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     },
//     sleep(length) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     },
//     play(length) {
//         console.log(`${this.name} is playing.`)
//         this.energy -= length
//     }
// }

// function Animal (name, energy) {
//     let animal    = {}
//     animal.name   = name
//     animal.energy = energy
//     animal.eat    = animalMethods.eat
//     animal.sleep  = animalMethods.sleep
//     animal.play   = animalMethods.play

//     return animal
// }

// const leo   = Animal('Leo', 7)
// const snoop = Animal('Snoop', 10)

// By moving the shared methods to their own object and referencing that object inside of our Animal function, we’ve now solved the problem of memory waste and overly large animal objects.


/**
 * Object.create
 */
// Object.create allows you to create an object which will delegate to another object on failed lookups.
// Object.create allows you to create an object and whenever there’s a failed property lookup on that object, it can consult another object to see if that other object has the property.



/**
 * Object.create
 * Object.create allows you to create an object which will delegate to another object on failed lookups
 */

// const parent = {
//     name: "Stacey",
//     age: 35,
//     heritage: "Irish"
// };

// const child = Object.create(parent);
// child.name = "Ryan";
// child.age = 7

// console.log(child.name);
// console.log(child.age);
// console.log(child.heritage);

/**
 * Funtional Instantiation with shared methods and Object.create
 */
// const animalMethods = {
//     eat(amount) {
//         console.log(`${this.name} is eating`);
//         this.energy += amount;
//     },
//     sleep(length) {
//         console.log(`${this.name} is sleeping`);
//         this.energy += length;
//     },
//     play(length) {
//         console.log(`${this.name} is playing`);
//         this.energy -= length;
//     }
// }

// function Animal(name, energy) {
//     let animal = Object.create(animalMethods);
//     animal.name = name;
//     animal.energy = energy;

//     return animal
// }

// const leo = Animal('Leo', 7)
// const snoop = Animal('Snoop', 10)

// leo.eat(10);
// snoop.play(5)

/**
 * Prototypal Instantiation
 */

// function Animal(name, age) {
//     let animal = Object.create(Animal.prototype);
//     animal.name = name;
//     animal.age = age;

//     return animal
// }

// Animal.prototype.eat = function(amount) {
//     console.log(`${this.name} is eating`);
//     this.energy += amount
// }

// Animal.prototype.sleep = function(length) {
//     console.log(`${this.name} is sleeping`);
//     this.energy += length
// }

// Animal.prototype.play = function(length) {
//     console.log(`${this.name} is playing`);
//     this.energy -= length
// }

// const leo = Animal('Leo', 7)
// const snoop = Animal('Snoop', 10)

// leo.eat(12)
// snoop.play(2)


/**
 * New 
 */

// function Animal(name, age) {
//     // let animal = Object.create(Animal.prototype);
//     this.name = name;
//     this.age = age;

//     // return animal
// }

// Animal.prototype.eat = function(amount) {
//     console.log(`${this.name} is eating`);
//     this.energy += amount;
// }

// Animal.prototype.sleep = function(length) {
//     console.log(`${this.name} is sleeping`);
//     this.energy += length;
// }

// Animal.prototype.play = function(length) {
//     console.log(`${this.name} is eating`);
//     this.energy -= length;
// }

// let leo = new Animal('Leo', 7);
// let snoop = new Animal('Snoop', 10);

// leo.eat(10);
// snoop.sleep(2)

/**
* Psuedoclassical Instantiation
*/

// class Animal {
//     constructor(name, energy) {
//         this.name = name;
//         this.energy = energy
//     }

//     eat(amount) {
//         console.log(`${this.name} is eating`);
//         this.energy += amount;
//     }

//     sleep(length) {
//         console.log(`${this.name} is sleeping`);
//         this.energy += length;
//     }

//     play(length) {
//         console.log(`${this.name} is eating`);
//         this.energy -= length;
//     }
// }

// let leo = new Animal('Leo', 7);
// let snoop = new Animal('Snoop', 10);

// leo.eat(10);
// snoop.play(2)