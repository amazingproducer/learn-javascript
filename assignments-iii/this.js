/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In window binding, the *this* object is the global *window* object (*this* with no dot).
* 2. In implicit binding, the *this* object is determined by the value left of the dot when the function is invoked.
* 3. In new binding, the *this* object is determined as an instance of the function to the right of the *new* keyword.
* 4. In explicit binding, the *this* object is determined by the parameter of the *execution method* invoked on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let windowBinding = function(name) {
    console.log(`This is an example of ${this.name} binding.`);
};
global.name = "window";
windowBinding();

// Principle 2

// code example for Implicit Binding
let implicit = {
    name: 'implicit',
    sample: function() {
        console.log(`This is an example of ${this.name} binding.`);
    }
}
implicit.sample();

// Principle 3

// code example for New Binding
let Binding = function(name) {
    this.name = name;
    this.sample = function() {
        console.log(`This is an example of ${this.name} binding`);
    };
}
let exampleObject = new Binding('new').sample();

// Principle 4

// code example for Explicit Binding
let binding = function() {
    console.log(`This is an example of ${this.name} binding.`);
};

let explicit = {
    name: 'explicit'
};
binding.call(explicit);