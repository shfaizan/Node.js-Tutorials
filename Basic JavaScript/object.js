const person = {
    name : 'Faizan',
    age : 22,


    // This is the sample way to use the arrow function the result will gave undefinded name as the 
    // 'this' keyword refer to the global variable. 
    // // greet : () => {
    // //     console.log('Hi I am '+ this.name)
    // // }
    greet : function() {
        console.log('Hi I am '+ this.name)
    }
};
person.greet();
