const person = {
    name : 'Faizan',
    age : 22,
    greet() {
        console.log("hey my name is " + this.name)
    }
}

person.greet();