/**
 * 
 * arr.reduce(callback(accumulator, currentValue[, index[array]]), initialValue)
 */

// let arr = [1, 2, 3];

// let sum = arr.reduce((accumulator, item, index) => {
//     accumulator += item;

//     return accumulator
// }, 0 /**Initial Value of accumulator*/)

// console.log(`sum: `, sum);

// let sum2 = arr.reduce((acc, item, index) => acc += item, 0)

// console.log(`sum: `, sum2);

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum3 = arr2.reduce((acc, item, index) => {
//     if(item % 2 === 0) {
//     acc += item
//     }
//     return acc
// }, 0)
// let sum3 = arr2.reduce((acc, item, i) => (item % 2 === 0) ? acc += item : acc ,0)

// console.log(`sum: `, sum3);


// let pilots = [
//     {
//         id: 10,
//         name: "Poe Dameron",
//         years: 14,
//     },
//     {
//         id: 2,
//         name: "Temmis 'Snap' Wexley",
//         years: 30,
//     },
//     {
//         id: 41,
//         name: "Tallison Lintra",
//         years: 16,
//     },
//     {
//         id: 99,
//         name: "Ello Asty",
//         years: 22,
//     }
// ]

// // let years = pilots.reduce((acc, item, i) => acc += item.years, 0);

// let mostExpPilot = pilots.reduce(function(oldest, pilot) {
//     return oldest.years > pilots.years ? oldest : pilot;
// }, 0)

// let mostExpPilot2 = pilots.reduce(function(oldest, pilot) {
//     return (oldest.years || 0) > pilot.years ? oldest : pilot;
// }, {}) /** <---best practice */

// let mostExp = pilots.reduce((acc, item) => (acc.years > item.years) ? acc : item, 0)
// let mostExp3 = pilots.reduce((acc, item) => (item.years < acc.years) ? acc : item, 0)
// let mostExp2 = pilots.reduce((acc, item) => (acc.years || 0) > item.years ? acc : item, {})


// console.log(`sum: `, mostExp2);

// function reduce(str, letter) {
//     return str.split("").reduce((acc, item) => 
//         (item === letter) ? acc + 1 : acc, 0)
// }

// function solutionMis1(str, letter) {
//     return str.split("").reduce((acc, item) => item === letter ? acc += item : acc, '').length
// }

// console.log(reduce('Mississippi', 'i'));



