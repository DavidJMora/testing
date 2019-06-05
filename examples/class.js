// class Animal {
//     constructor(name, weight) {
//         this.name = name;
//         this.weight = weight;
//     }

//     eat() {
//         return `${this.name} is eating`
//     }

//     sleep() {
//         return `${this.name} is sleeping`
//     }

//     wakeUp() {
//         return `${this.name} is waking up`
//     }
// }

// class Gorilla extends Animal {
//     constructor(name, weight){
//         super(name, weight); /**super calls the former constructor in this case Animal */
//     }

//     climbTree() {
//         return `${this.name} is climbing trees!`
//     }

//     poundChest() {
//         return `${this.name} is pounding chest!`
//     }

//     showVigor() {
//         return `${this.poundChest()}!`
//     }

//     dailyRoutine() {
//         return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`
//     }
// }

// function display(content) {
//     console.log(content);
// }

// const gorilla = new Gorilla("Doug", '500p')

// display(gorilla.poundChest())
// display(gorilla.sleep())
// display(gorilla.showVigor())
// display(gorilla.dailyRoutine())

/**
 * Traditional JavaScript Classes-ES5
 */

// function Animal(name, weight) {
//     this.name = name;
//     this.weight = weight;
// }

// Animal.prototype.eat = function() {
//     return `${this.name} is eating.`
// }

// Animal.prototype.sleep = function() {
//     return `${this.name} is sleeping.`
// }

// Animal.prototype.wakeUp = function() {
//     return `${this.name} is waking up.`
// }

// function Gorilla(name, weight) {
//     Animal.call(this, name, weight)
// }

// Gorilla.prototype = Object.create(Animal.prototype);
// Gorilla.prototype.constructor = Gorilla;

// Gorilla.prototype.climbTrees = function() {
//     return `${this.name} is climbing trees!`
// }

// Gorilla.prototype.poundChest = function() {
//     return `${this.name} is pounding chest!`
// }

// Gorilla.prototype.showVigor = function() {
//     return `${Animal.prototype.eat.call(this)} ${this.poundChest()}!`
// }

// Gorilla.prototype.dailyRoutine = function() {
//     return `${Animal.prototype.wakeUp.call(this)} 
//             ${this.poundChest()} 
//             ${Animal.prototype.eat.call(this)} 
//             ${Animal.prototype.sleep.call(this)}`
// }

// function display(content) {
//     console.log(content);
// }

// const gorilla = new Gorilla("Frank", "800lbs");
// display(gorilla.poundChest());
// display(gorilla.sleep());
// display(gorilla.showVigor());
// display(gorilla.dailyRoutine());


/**
 * Methods as part of the class
 */

class Animal {/**ES6 version */
        eat() {
            return `${this.name} is eating`
        }
    
        sleep() {
            return `${this.name} is sleeping`
        }
    
        wakeUp() {
            return `${this.name} is waking up`
        }
    }


Animal.prototype.eat = function() { /** ES5 version */
    return `${this.name} is eating.`
}

Animal.prototype.sleep = function() {
    return `${this.name} is sleeping.`
}

Animal.prototype.wakeUp = function() {
    return `${this.name} is waking up.`
}

/**
 * Mapping super to Traditional JS
 */

/**ES6 */

class Gorilla extends Animal {
    constructor(name, weight){
        this.name = name;
        this.weight = weight
    }
        showVigor() {
        return `${this.poundChest()}!`
    }

    dailyRoutine() {
        return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`
    }
}

/**ES5 */

function Gorilla(name, weight) {
    Animal.call(this, name, weight)
}

Gorilla.prototype = Object.create(Animal.prototype);
Gorilla.prototype.constructor = Gorilla;

Gorilla.prototype.showVigor = function() {
    return `${Animal.prototype.eat.call(this)} ${this.poundChest()}!`
}

Gorilla.prototype.dailyRoutine = function() {
    return `${Animal.prototype.wakeUp.call(this)} 
            ${this.poundChest()} 
            ${Animal.prototype.eat.call(this)} 
            ${Animal.prototype.sleep.call(this)}`
}
