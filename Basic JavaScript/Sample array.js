const hobbies = ['sports','coading'];

// for (let hobbie of hobbies)
// {
//     console.log(hobbie);
// }

// 'map' keyword modify the array without accualy adding anything to the array.
console.log(hobbies.map(hobby => ('Hobby: ' + hobby )));

// The array will not be permenantly modify 
console.log(hobbies);