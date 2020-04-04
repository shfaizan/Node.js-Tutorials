const person = {
    name : 'Faizan',
    age : 22,


    // This is the sample way to use the arrow function the result will gave undefinded name as the 
    // 'this' keyword refer to the global variable. 
    // // greet : () => {
    // //     console.log('Hi I am '+ this.name)
    // // }

    //  we have to use the function keyword to access the local variable in the object.
    // // greet : function() {
    // //     console.log('Hi I am '+ this.name)
    // // }

    // Here we do the same thing without writing the function keyword.
    greet() {
        console.log('Hi I am '+ this.name)
    }
};
person.greet();
