/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is the Global binding. Essentially if you simply console.log() this in the global
scope, it will give back an Object called "Window". When you look under the hood of the window object it is the entire JavaScript language.
So in the global binding "this" is the JavaScript language.
* 2. The second principle is implicit binding. Say you have an object, and you have a method within your object,
if you were to call that method using your Obj and a dot after like, "obj.method(param)", whatever is on the left
of the dot is "this". So in this case "this" is your object that you created.
* 3. The third principle is the New binding. When we create a constructor for an object, we would then
make a "new" object with those keys and values. When we say new, "this" will point to the object that was
created from that constructor function.
* 4. The fourth principle is the Explicit binding. Whenever we use .call() .bind() .apply(), we are changing the object in the
parameter of those methods. So we are overriding what this is when we use those methods, and this will then be whatever object we made it with those
specific methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myDaughter = {
    name: 'Velouria',
    age: '11 months',
    dad: 'Aaron',
    mom: 'Juliet',
    sayWord: function(word) {
        console.log(`${this.name} attempts to say ${word}, but instead babbles incoherently.`);
        console.log(this);
    }
}
myDaughter.sayWord('momma');

// Principle 3

// code example for New Binding
function Baby(baby) {
    this.name = baby.name;
    this.meanLevel = baby.meanLevel,
    this.age = baby.age,
    this.speak = function() {
        console.log(this);
        console.log(`My name is ${this.name} and I am ${this.age} old!`)
    }
    
}
const velouria = new Baby({name: 'Velouria', age: '11 months', meanLevel: 'this baby can be mean....sometimes'});
velouria.speak()

// Principle 4

// code example for Explicit Binding
const aaron = new Baby({name: 'Aaron', age: '24 years', meanLevel: 'Not very mean, not very baby'});
aaron.speak.call(velouria);
velouria.speak.call(aaron);
