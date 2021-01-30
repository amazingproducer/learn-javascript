// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: Scope is enclosed by `myFunction`.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

// Do you want me to name it `sumation` or `summation`?
function sumation(number) {
  let place = number;
  let sum = 0;
  while(place > 0) {
    sum += place;
    --place;
  }
  return sum;
}
console.log(sumation(4));