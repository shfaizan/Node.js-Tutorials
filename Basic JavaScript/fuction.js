var name = "faizan"
var age = 21
var hobbies = true

function UserDetail(username,userage,userhobbies) {
    return('User named ' + username + ' of age ' + userage + ' has Hobbies '+ userhobbies);
}

console.log(UserDetail(name,age,hobbies))