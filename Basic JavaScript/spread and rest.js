// Spread and rest operator
const hobbies = ['sports','coading'];

const person = {
    name : 'Faizan',
    age : 22,
}
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

console.log(copiedArray)