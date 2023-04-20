// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// moved end of curly braces down to line 15 and all the way to the left
// added semicolon to end of line 13
function askForName() { 
  console.log("Hello, what is your name?"); 
}

askForName()


// EX 2:
// moved end of curly braces all the way to the left on line 27
// indented(tabbed) both var sum and return sum
// added console.log to the called function in order to print to console
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));


// EX 3:
// changed "func" to "function" on line 37
// put a space between the ending parenthesis and curly braces on line 37
// moved end of curly braces all the way to the left on line 43
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4:
// moved beginning of curly braces to the end of line 50 with a space in b/t end of parenthesis
// indented(tabbed) var on line 52 and matched identation for var and return on line 53 and 54, respectively
// moved end of curly braces all the way to the left on line 56
// added console.log to check if code works
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
}

console.log(average(6, 25))