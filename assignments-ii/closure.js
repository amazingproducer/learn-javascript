// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const containerType = "bottle";
const containerSize = "333 mL"
function domesticDefaultBottleSize() {
  const containerSize = "12 fl. oz";
  return containerSize;
}
console.log(containerSize, containerType); // "333 mL bottle"
console.log(domesticDefaultBottleSize(), containerType); // "12 fl. oz bottle"

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;
  return () => ++count;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const mycounter = counterMaker();
mycounter();
mycounter();
mycounter();
mycounter();
mycounter();
console.log(mycounter()); // This should print 6

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const limitedCounterMaker = function (limit) {
  let count = 0
  return (limit) => {
    if(count < limit) {
      return ++count;
    }
    else {
      return count = 1;
    }
  }
}
const limitedCounter = limitedCounterMaker(3);
limitedCounter();
limitedCounter();
limitedCounter();
console.log(limitedCounter()); // This should print 1

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let cfCount = 0;
  return {
    increment: function(){return ++cfCount;},
    decrement: function(){return --cfCount;},
  }
};
const newCounterFactory = counterFactory();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
console.log(`We now expect the counter factory's output to be 5. It is ${newCounterFactory.increment()}`);