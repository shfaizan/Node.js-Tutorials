// This is the asyncronous function
// asyncronous code because it doesn't run Immediately

// here the delay of 2000ms or 2 sec is done.
setTimeout(() => {
    console.log("Hello after 2 sec")
},2000)
// Here we have set dalay of 1 ms 
setTimeout(() => {
    console.log("superfast with delay of 1ms")
},1)

console.log("without any delay")

