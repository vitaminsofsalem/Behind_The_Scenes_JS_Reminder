'use strict';

//global variables
const firstName = 'John';

// global scope function
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // Inner scope function
  function printAge() {
    let output = `${firstName}, you are ${age} years old, Born in ${birthYear}`;
    console.log(output);
    // block scope conditional
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      const firstName = 'Jane'; // works because inside block scope, this is a different variable
      const str = `Oh, and you're a millenial, ${firstName}`; // Since the scope chain lookup happens inside out, jane is in the block scope and thus is the first to be printed instead of john
      console.log(str);
      // * * functions are block scoped only when 'use strict' is used
      function add(a, b) {
        return a + b;
      }
      console.log((output = 'ReAssigned Output')); // Works because we're redefining the original variable in the parent scope from within a child scope so it changes the value which isn't the same as creating a different value that's constrained within the current local scope.
    }
    console.log(millennial); // Works because var isn't block scoped
    console.log(str); // Fails because let & const are block scoped ( es6 )
    console.log(add(2, 3)); // * *Fails because function add is block scoped under 'use strict' mode
  }
  printAge(); // runs because we're calling child scope from parent function scope
  return age;
}

calcAge(1990);
