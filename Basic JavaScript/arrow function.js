// Same as the function.js but here we use the 'let' and 'const' instead of var
const name = "faizan"
let age = 21
const hobbies = true

age= 22;

const UserDetail = (username,userage,userhobbies) => {
    return('User named ' + username + ' of age ' + userage + ' has Hobbies '+ userhobbies);
}

const add = (a,b)=> {
    return(a+b);
}

console.log(add(2,3))
console.log(UserDetail(name,age,hobbies))
