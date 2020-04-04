// Spread and rest operator
const hobbies = ['sports','coading'];

// This is the nested array and not the exact copy of the real array.
// // const copiedArray = [hobbies];

// We use slice operator to copy the original array
// //const copiedArray = hobbies.slice();

// This created the exact copy of the original array.
// This is spred operator the three dot pre array name
const copiedArray = [...hobbies]

console.log(copiedArray)