// /**
//  * A callback is a function that is executed after another function has finished execution
//  */

// /**
//   * Continuations
//   */

// // A

// ajax("..", function(...){
//     // C
// })
// // B

// // Now: A, ajax, B
// // Later: C
// // The callback function wraps or encapsulates the continuation of the program.


// // A
// setTimeout(function() {
//     // C
// }, 1000);
// // B

// // Do A, setTimeOut for 1 second, then B, then after 1 second C

// /**
//  * Nested/Chained callbacks
//  */

// listen("click", function handler(evt) {
//     setTimeOut(function request() {
//         ajax("http:some.url.1", function respond(text) {
//             if(text === "Hello") {
//                 handler()
//             } else if(text === "World") {
//                 request()
//             }
//         })
//     }, 1000)
// })

// // waiting for "click" event, then waiting for timeout to fire, then waiting for ajax response to come back, at which point it might do it all over again

// // First(now):
// listen("click", function handler(evt) {
//     //..
// })

// // Then(later):
// setTimeOut(function request() {
//     //..
// }, 1000)

// // Then(even later):
// ajax("...", function response() {
//     if(...) {
//         //..
//     } else if(...) {
//         //...
//     }
// })

// 1
// doA(function(){
//     doB()

//     doC(function() {
//         doD()
//     })

//     doE()
// })

// doF()

// A, F, B, C, E, D

// 2

// doA(function() { /**<---Synchronous */
//     doC()

//     doD(function() { /**<---- Synchronous */
//         doF()
//     })

//     doE()
// })

// doB()

// A, C, D, F, E, B


// Rewrite without using nesting function
// listen("click", function handler(evt) {
//     setTimeOut(function request() {
//         ajax("http://some.url.1", function respond(text) {
//             if(text === "Hello") {
//                 handler()
//             } else if(text === "World") {
//                 request()
//             }
//         })
//     }, 1000)
// })

//Rewritten code
// listen("click", handler)

// function handler(evt) {
//     setTimeOut(request, 1000)
// }

// function request() {
//     ajax("http://some.url.1", respond)
// }

// function respond(text) {
//     if(text === "Hello") {
//         handler()
//     } else if(text === "World") {
//         request()
//     }
// }

// A
// ajax("...", function() {
    // C
// })
// B

// let tracked = false

// analytics.trackPurchase(purchaseData, function(){
//     if(!tracked) {
//         chargedCreditCard()

//         displayThankYouPage()

//         tracked = true
//     }
// })

// 0 <---doesnt allow for strings
// function addNumbers(x, y) {

//     return x + y
// }

// 1 <----gives error if numbers arent already a number
// function addNumbers(x, y) {
//     if(typeof x !=== "number" || typeof y !== "number") throw Error("Bad parameters")

//     return x + y
// }

// 2 <---makes x and y numbers before trying to add them

// function addNumbers(x , y) {
//     x = Number(x);
//     y = Number(y);

//     return x + y
// }


// function success(data) {
//     console.log(data);
// }

// function failure(err) {
//     console.error(err);
// } 

// ajax("htp://some.url.1", success, failure)


/**
 * Error-first style
 */

// function response(error, data) {
//     //Error?
//     if(error) {
//         console.error(error);
//     } else {
//         console.log(data);
//     }
// }

// What about the trust issue of never being called? If this is a concern (and it probably should be!), you likely will need to set up a timeout that cancels the event. You could make a utility (proof-of-concept only shown) to help you with that:

// function timeoutify(fn, delay) {
//     let intv = setTimeout(function() {
//         intv = null

//         fn(new Error("Timeout"))
//     }, delay);

//     return function() {
//         // if timeout hasn't happened yet
//         if(intv) {
//             clearTimeout(intv)

//             fn.apply(this, [null].concat([].slice.call(arguments)))
//         }
//     }
// }

// function foo(err, data) {
//     if(err) {
//         console.err(err)
//     } else {
//         console.log(data);
//     }
// }

// ajax('http://some.url.1', timeoutify(foo, 500))

// Too early

// Array.prototype.myFunc = function() {
//     console.log(this);
// }

// let arr = ["a", "b", "c"];
// arr.myFunc()

/**
 *   Write an extension for array that reimplements the "map()" function
 * 
 * Samples:
 * [1, 2, 3].solution(e => `${e}) === ['1', '2', '3']
 * ['1', '2', '3'].solution(e => parseInt(e)) === [1, 2, 3]
 * [8, 3 , 6].solution((e, i) => `${i}: ${e * 2}`) === ['0: 16', '1: 6', '2: 12``']
 */

Array.prototype.solution = function(callback) {
    let newArr = []

    for(let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this))
    }
    return newArr
}

// let arr = ["a", "b", "c"]
// arr.solution()
console.log(([1, 2, 3].solution(e => `${e}`)));
console.log((['1', '2', '3'].solution(e => parseInt(e))));
console.log(([8, 3, 6].solution((e, i) => `${i}: ${e * 2}`)));

console.assert(JSON.stringify([1, 2, 3].solution(e => `${e}`)) === JSON.stringify(['1', '2', '3']),`Error`);
console.assert(JSON.stringify(['1', '2', '3'].solution(e => parseInt(e))) === JSON.stringify([1, 2, 3]),`Error`);
console.assert(JSON.stringify([8, 3, 6].solution((e, i) => `${i}: ${e * 2}`)) === JSON.stringify(['0: 16', '1: 6', '2: 12']),`Error`);

