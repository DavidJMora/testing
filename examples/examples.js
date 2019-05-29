class DigitalFilmAcademy {
    constructor(branch, name, role, term) {
        this.branch = branch;
        this.name = name;
        this.role = role;
        this.term = term;
    }

    place() {
        console.log(`${this.name} is a part of ${this.branch} and is a ${this.role}.`);
    }

    student() {
        this.term === 2 ? console.log(`${this.name} is in Term ${this.term}.`) :
        console.log(`${this.name} is not a student`);
        
    }
}

let david = new DigitalFilmAcademy("CodeImmersives", "David", "Student", 2);
let jimmy = new DigitalFilmAcademy("CodeImmersives", "Jimmy", "Student", 2);
let yury = new DigitalFilmAcademy("CodeImmersives", "Yury", "Intructor", 2);
let ginny = new DigitalFilmAcademy("CodeImmersives", "Ginny", "Teacher Assistant", 2);
let anthony = new DigitalFilmAcademy("CodeImmersives", "Anthony", "Overseer", "");
let keevi = new DigitalFilmAcademy("CodeImmersives", "Keevi", "Student", 2);
let patrick = new DigitalFilmAcademy("Digital Film Academy", "Patrick", "Lord Commander", "");
let manish = new DigitalFilmAcademy("CodeImmersives", "Manish", "Student", 2);


console.log(patrick.place());
console.log(ginny.place());
console.log(david.student());
console.log(manish.place());
