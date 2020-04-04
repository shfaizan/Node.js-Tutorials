// Same as the function.js but here we use the 'let' and 'const' instead of var
//const cannot be changed However the let keyword suggest the change is permitted.
const name = "faizan"
let age = 21
const hobbies = true

age= 22;
//Insted of writing the function keyword we here use "=>" and asign the value to UserDetail which is a constant
const UserDetail = (username,userage,userhobbies) => {
    return('User named ' + username + ' of age ' + userage + ' has Hobbies '+ userhobbies);
}
// assign the function value of a+b to the constant add 
const add = (a,b)=> a+b

//call the constant add keyword and enter the desire number for output 
console.log(add(2,2))
console.log(UserDetail(name,age,hobbies))
