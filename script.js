'use strict';
/*
 * * Scope Chain **
 * * Uncomment to run **
 */
// //global variables
// const firstName = 'John';

// // global scope function
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   // Inner scope function
//   function printAge() {
//     let output = `${firstName}, you are ${age} years old, Born in ${birthYear}`;
//     console.log(output);
//     // block scope conditional
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       const firstName = 'Jane'; // works because inside block scope, this is a different variable
//       const str = `Oh, and you're a millenial, ${firstName}`; // Since the scope chain lookup happens inside out, jane is in the block scope and thus is the first to be printed instead of john
//       console.log(str);
//       // * * functions are block scoped only when 'use strict' is used
//       function add(a, b) {
//         return a + b;
//       }
//       console.log((output = 'ReAssigned Output')); // Works because we're redefining the original variable in the parent scope from within a child scope so it changes the value which isn't the same as creating a different value that's constrained within the current local scope.
//     }
//     console.log(millennial); // Works because var isn't block scoped
//     console.log(str); // Fails because let & const are block scoped ( es6 )
//     console.log(add(2, 3)); // * *Fails because function add is block scoped under 'use strict' mode
//   }
//   printAge(); // runs because we're calling child scope from parent function scope
//   return age;
// }

// calcAge(1990);

// ---------------------------------------------------------------------------------------------------------------------

/*
 * * Hoisting & TDZ ( Temporal Dead Zone ) **
 * * Uncomment to run **
 */

// //Variable Hoisting
// console.log(me); // Outputs undefined as per the hoisting rules for var variables ( by product of function hoisting)
// console.log(job); // Gives a references error as job is still in the TDZ zone ( which starts from the beginning of the current scope ( global scope in this case ) till we reach the variable declaration)
// console.log(year); // Same as job

// var me = 'John';
// let job = 'Web Developer';
// const year = 2037;

// //Function Hoisting
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// // Function Declaration works with no issues
// function addDecl(a, b) {
//   return a + b;
// }

// // Function Expression follows the pattern of the keyword it's initialized with
// const addExpr = function (a, b) {
//   return a + b;
// };

// // Function Expression follows the pattern of the keyword it's initialized with
// var addArrow = (a, b) => a + b;

// // Important Example Showing the pitfalls of hoisting
// /*
//  * * Best Practices:
//   ! 1. Avoid using var to declare variables.
//   ! 2. Use let & const to declare variables.
//   ! 3. Put your variables at the top of the scope.
//   ! 4. Don't call your functions before they're declared.
// */

// // Here the value of numProducts is undefined because it's being called before it's declared causing the if condition to be falsy
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All Products Deleted!');
// }

// // Var creates entries in the window object while let and const don't. Another smaller difference between the 2.
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//---------------------------------------------------------------------------------------------------------------------
/*
 * * This keyword in JS **
 * * Uncomment to run **
 */

// // 'this' keyword is used to access the global window object
// console.log(this);

// // 'this' keyword refers to the function CALLING it ( undefined for functions )
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1990);

// // 'this' keyword refers to the object CALLING it ( jonas )
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// // new object matilda
// const matilda = {
//   year: 2017,
// };

// // Method borrowing and CALLING the calcAge method from the matilda object changing what 'this' is pointing to
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// // Method borrowing again but this time to a normal function which results in undefined like a normal function
// const f = jonas.calcAge;
// f();
