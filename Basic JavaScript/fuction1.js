// Same as the function.js but here we use the 'let' and 'const' instead of var
const name = "faizan"
let age = 22
const hobbies = true

age= 23;

function UserDetail(username,userage,userhobbies) {
    return('User named ' + username + ' of age ' + userage + ' has Hobbies '+ userhobbies);
}

console.log(UserDetail(name,age,hobbies))
