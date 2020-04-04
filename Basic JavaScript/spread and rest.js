// Spread and rest operator

// array declared
const hobbies = ['sports','coading'];

// object declared
const person = {
    name : 'Faizan',
    age : 22,
}
// copy of the original object.
const copiedObject = {...person}
console.log(copiedObject);    

// This is the nested array and not the exact copy of the real array.
// // const copiedArray = [hobbies];

// We use slice operator to copy the original array
// //const copiedArray = hobbies.slice();

// This created the exact copy of the original array.
// This is spred operator the three dot pre array name 
// (They pull out all the element or the property of array or the object)
const copiedArray = [...hobbies]

console.log(copiedArray);

// This a normal use of array in a function and we can not add more than 3 values if dynamically.
// // const toArray = (arg1,arg2,arg3) => {
// //     return[arg1,arg2,arg3];
// // };

// To print any number of values without the restriction of declaring the arguments
// We use rest operator 
// rest is declare in the same way as spread ie with three dots
// The place that we use it define what we call it.
// In spread we pull in rest we merge.

const toArray = (...args) =>{
    return args
};
console.log(toArray(1,2,3,4));