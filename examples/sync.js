// let data = ajax("http://some.url.1")

// console.log(data);

// ajax("http://some.url.1", function(data) {
//     console.log(data);
// })

// function now() {
//     return 21
// }

// function later() {
//     answer = answer * 2

//     console.log("Meaning of life: ", answer);
// }

// let answer = now();

// setTimeout(later, 1000)

//now

// function now() {...}
// function later() {...}
// let answer = now()
// setTimeout(...)

//later

// answer = answer * 2
// console.log("Meaning of life: ", answer);

let eventloop = [];
let event

//keep going forever
while(true) {
    //perform a tick
    if(eventloop.length > 0) {
        //get the next event in queue
        event = eventloop.shift()

        //execute the next event
        try{
            event()
        } catch (err) {
            reportError(err)
        }
    }
}