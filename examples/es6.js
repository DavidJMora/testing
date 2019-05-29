// for (var i = 0; i < 10; i++) {
//     console.log("i:", i)
// }

// console.log("iii: ", i)

// for (let j = 0; j < 10; j++) {
//     console.log("j:", j)
// }

// console.log("jjj: ", j)




// let numbers = [4, 9, 16, 25, 29]

// function myFunction(value, index, array) {
//     console.log("value: ", value);
//     console.log("index: ", index);
//     console.log("array: ", array);
//     // return value > 3
// }

// let result = numbers.find(myFunction);

// console.log(result)

// let min = Number.MIN_SAFE_INTEGER;
// console.log(min)
// let max = Number.MAX_SAFE_INTEGER;
// console.log(max)

// console.log(Number.isInteger(10))
// console.log(Number.isInteger(10.5))


// console.log(isFinite(10 / 0))
// console.log(isFinite(10))

// let globalThis = this;

// function functionThis() {
//     console.log('Global This vs Local This', globalThis === this)

//     this.someVar = "some var";
// }

// let fatArrowThis = () => {
//     console.log('Global This vs Local This', globalThis === this)
    
//     this.someVar2 = "some var 2"
// }

// functionThis();
// fatArrowThis();

// console.log('someVar: ', this.someVar)
// console.log('someVar: ', this.someVar2)


// array.map(function(currentValue, index, arr), thisValue)

// const sweetArray = [2, 3, 4, 5, 35];

// const sweeterArray = [];

// sweeterArray.push(sweetArray.map((x) => x * 2))

// console.log(sweeterArray)


// let str = "hello";

// let arr1 = new Array(...str);
// console.log(arr1);

// let arr2 = str.split("")
// console.log(arr2);

// const map = Array.prototype.map;

// const newArr = map.call(str, eachLetter => {
//     return `${eachLetter}!`
// })

// console.log(newArr)


// let officers = [
//     {id: 20, name: "Captain Holt"},
//     {id: 24, name: "General Veers"},
//     {id: 56, name: "Admiral Ozzel"},
//     {id: 88, name: "Commander Jerjerrod"}
// ]

// let officerID = officers.map(officer => officer.id)
// // console.log(officerID)
// console.assert(JSON.stringify([20, 24, 56, 88]) === JSON.stringify(officerID), "Error: failed!")

// let str = "The quick brown fox";

// function wordReverse(str) {
//     let words = str.split(" ");
//     let reversed = words.map(word => word.split("").reverse().join(""));

//     return reversed.join(" ")
// }

// console.log(wordReverse("The quick brown fox"));

// console.assert(wordReverse("The quick brown fox") === "ehT kciuq nworb xof", "Error: failed!")

// let words = [
//     "spray",
//     "limit",
//     "elite",
//     "exuberant",
//     "destruction",
//     "present"
// ]

// let result = words.filter(word => word.length > 6)

// let ages = [32, 33, 16, 40];

// function checkAdult(age) {
//     return age >=21
// }

// function myFunction() {
//     console.log('Adults: ', ages.filter(checkAdult));
// }

// // myFunction()

// function isBigEnough(v) {
//     return v >= 10
// }

// let filtered = [3, 7, 34, 243, 2].filter(isBigEnough);

// console.log('filtered: ', filtered);

// let arr = [
//     {id: 15},
//     {id: -1},
//     {id: 0},
//     {id: 3},
//     {id: 12.2},
//     {},
//     {id: null},
//     {id: NaN},
//     {id: 'undefined'},
// ]

// let invalidEntries = 0;

// function isNumber(obj) {
//     return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
// }

// function filteredById(item) {
//     if (isNumber(item.id) && item.id !== 0) {
//         return true
//     }
//     invalidEntries++
//     return false
// }

// let arrByID = arr.filter(filteredById)
// console.log('arrByID: ', arrByID);


// let heroes = [
//     {name: "Batman", franchise: "DC"},
//     {name: "Spiderman", franchise: "Marvel"},
//     {name: "Thor", franchise: "Marvel"},
//     {name: "Superman", franchise: "DC"},
// ]

// let marvelHeroes = heroes.filter(hero => hero.franchise === "Marvel");

// console.log('marvelHeroes: ', marvelHeroes);


// let testArr = [5, 15, 55, "515"]

// function solution123(arr, num) {
//     return arr.join("").split("").filter(e => e === num).length
// }

// console.log(solution123(testArr, "5"))

// function solution1(str) {
//     return str.split("").filter(
//         function(letter, index, array) {
//             return array.indexOf(letter) === index
//         }
//     ).join("")
// }

// function solution2(str) {
//     return str.split("").filter((e, i, arr) => arr.indexOf(e) === i).join("")
// }

// console.assert(solution1("Mississippi") === "Misp", `Error!`)
// console.assert(solution2("Mississippi") === "Misp", `Error!`)