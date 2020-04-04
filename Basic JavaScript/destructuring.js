// object declared
const person = {
    name : 'Faizan',
    age : 22,
};

//  Here we have use a normal function for extracting the elements
// // const PrintDetail = (PersonData) =>
// // {
// //     return(person.name)
// // }

// Here we will use object destucturing syntax with the function
const PrintDetail = ({name,age}) => {console.log(name)};  
PrintDetail(person)

// We can also use destructuring without using function
const {name,age} = person
console.log(name,age)

// new array declared
const hobbies = ['sports','coading'];

// array destructuring NOTE: we use curly {} for object and use square [] for array
const [hobby1,hobby2] = hobbies
console.log(hobby1,hobby2)