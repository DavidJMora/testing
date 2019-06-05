/**
* Promises
* A promise is an object that may produce a singular value some time in the future: either a resolved value or a r4ason that is not resolved. A promise can be in 3 states: fulfilled, rejected, and pending.
* Fulfilled: onFulfilled()
* Rejected: onRecjected()
* Pending: not yet fulfilled or rejected 
*/

// const wait = time => new Promise((resolve) => setTimeout(resolve, time));
// 1. function wait with attribute time
// 2. create a Promise
// 3. set timeout with a delay
// 4. fulfill our Promise

// wait(3000).then(() => console.log('Hello from Promise!'));

// Our wait function call will wait 3 seconds and then log "Hello from Promise!"
// In ES6 Promise constructor takes a function. That function takes two parameters "resolve()" and "reject()"

/**
* Important Promise rules:
* 1) A Promise is an object that supplies a standard ".then()" method
* 2) A pending Promise may transition into fulfilled or rejected state
* 3) A fulfilled or rejected Promise is settled and must not transition into any other state
* 4) Once a Promise is settled, it must have a value (which can be undefined). That value must not be changed.
*/

// Promise.then(
//     onFulfilled?: Function,
//     onRecjected?: Function
// ) => Promise

/**
* The .then() method must comply with these rules:
* 1) Both onFulfilled() and onRejected() are both optional.
* 2) If arguments supplied are not functions, they must be ignored.
* 3) onFulfilled() will be called after the Promise has been fulfilled with the Promise value as first argument.
* 4) onRejected() will be called after Promise has been rejected with the reason for rejection as first argument.
* 5) Neither onFulfilled() or onRejected() may be called more than once.
* 6) .then() may be called multiple times on the same Promise.
* 7) .then() must return a new Promise.
* 8) if onFulfilled() or onRejected() returns a value "x", and "x" is a Promise than Promise2 will be locked in with(the same state of value) 'x'.
* 9) If either onFulfilled() or onRejected() throws an exception 'e' than our Promise2 must be rejected with the same exception.
* 10) if onFulfilled() is not a function and Promise1 is fulfilled, than Promise2 must be fulfilled with same value as Promise1
* 11) if onRejected() is not a function and Promise1 is rejected, than Promise2 must be rejected for the same reason.
*/

// fetch(url)
//     .then(process)
//     .then(save)
//     .catch(handleError)

// const wait = time => new Promise(
//     res => setTimeout(() => res(), time)
// )

// wait(200)
//     // onFulfilled() can return a new Promise.
//     .then(() => new Promise(res => res("Foo")))
//     // Next Promise will assume the state of 'x'
//     .then(a => a)
//     // Above we returned unwrapped value of 'x'
//     // So ".then()" above returns a fulfilled Promise
//     // with that value:
//     .then(b => console.log(b)) // Foo
//     // Note: "null" is a valid Promise value
//     .then(() => null)
//     .then(c => console.log(c)) // null
//     // The following Error is not reported yet
//     .then(() => { throw new Error("Error") })
//     // Returned Promise is rejected
//     // with an error as a reason
//     .then(
//         // Nothing is loggeddue to the Error above
//         d => console.log(`d: ${d}`),
//         // We handle an Error(rejection reason)
//         e => console.log(e) // [Error: Error]
//     )
//     .then(f => console.log(`f: ${f}`)) // f: undefined
//     // The following does not log. 'e' was already handled
//     // so this handler doesn't get called
//     .catch(e => console.log(e))
//     .then(() => { throw new Error("Error2") })
//     // When a Promise is rejected, success handlers get skipped
//     // Nothing logs here because of the "Error2" exception
//     .then(g => console.log(`g: ${g}`))
//     .catch(h => console.log(h)) // [Error: Error2]


// /**
//  * Error handling
//  */

// // 1 anti-pattern
// save().then(
//     handleSuccess,
//     handleError
// )

// // 2
// save()
//     .then(handleSuccess)
//     .catch(handleError)

// // 3
// save()
//     .then(
//         handleSuccess,
//         handleError
//     )
//     .catch(handleSomeOtherError)

/**
 * !!! I recommend ending all Promise chains with a ".catch()" !!!
 */


/**
 * Cancel Promise
 * Common mistakes when cancelling Promises
 * 1) Adding .cancel() to the Promise
 * Adding .cancel() makes the Promise non-standard, but it also violates another rule of Promises: Only the function that creates the Promise should be able to resolve, reject or cancel the Promise. Exposing it breaks that encapsulations, and encourages people to write cdoe that manipulates the Promise in places that shouldn't know about it. Avoid spaghetti and broke Promises.
 * 2) Forgetting to clean up
 * Some clever people have figured out that there's a way to use Promise.race() as a cancellation mechanism. The problem with that is that cancellation control is taken from the function that creates the Promise, which is the only place that you can conduct proper cleanup activities, such as clearing timeouts or freeing up memory by clearing references to data, etc...
 * 3) Forgetting to handle a rejected cancel Promise
 * Did you know that Chrome throws warning messages all over the console when you forget to handle a Promise rejection?
 * 4) Rethinking Promise Cancellation
 * Generally, I pass all the information the Promise needs to deterine how to resolve / reject / cancel at Promise creation time. That way, there's no need for a .cancel() method on a Promise. You might be wondering how you could possibly know whether or not you're going to cancel at Promise creation time.
 */

// const wait = (
//     time,
//     cancel = Promise.reject()
// ) => new Promise((resolve, reject) => {
//     const timer = setTimeout(resolve, time)
//     const noop = () => {}

//     cancel.then(() => {
//         clearTimeout(timer)

//         reject(new Error("Cancelled"))
//     }, noop)
// })

// const shouldCancel = Promise.resolve() // Yes, cancel
// // const shouldCancel = Promise.reject() // No, do not cancel

// wait(2000, shouldCancel).then(
//     () => console.log('Hello'),
//     (e) => console.log(e))
