const hobbies = ['sports','coading'];

// 'map' does not modify the actual array
console.log(hobbies.map(hobby => ('Hobby: ' + hobby )));

// The array will not be permenantly modify 
console.log(hobbies);

// This had actually modified the array 
// Here we have write the const keyword for the array name but the const is the reference to the address and
// we didn't modified it so we can insert the elements in the array.
hobbies.push('talking');
console.log(hobbies);