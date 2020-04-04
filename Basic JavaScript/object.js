const person = {
    name : 'Faizan',
    age : 22,
    greet : () => {
        console.log('Hi I am '+ this.name)
    }
};
person.greet();
