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


const hobbies = ['sports','coading'];

const [hobby1,hobby2] = hobbies
console.log(hobby1,hobby2)