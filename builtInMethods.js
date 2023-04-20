// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


// The includes() method is called on the string "Hello World"
// The "Hello" argument is passed; includes() has one clear job which is to chek if "Hello" is in the String
// The return value is "true"
"Hello World".includes("Hello");


// The endsWith() method is called on the string "Hello World"
// The "Hello" argument is passed; endsWith() has one clear job which is to chek if the String ends with "Hello"
// The return value is "false"
"Hello World".endsWith("Hello");


// The endsWith() method is called on the string "Hello World"
// The "rld" argument is passed; endsWith() has one clear job which is to chek if the String ends with "rld"
// The return value is "true"
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// The charAt() method is called on the foodName variable, which stores the string object "Chocolate". 
// The charAt() method returns the letter at index 5 of the argument passed in
// In this example, the return value is "l", because "l" is at index 5 of "Chocolate".
// The console.log() statements prints the return value of the charAt() method (l) to the console.
var foodName = "Chocolate";
console.log(foodName.charAt(5));

// The replace() method is called on the boop variable, which stores the string object "logitecp". 
// The replace() method returns the specified value in the string object it is instructed to replace using the arguments passed in
// In this example, the return value is "logitech", because "h" is the specified value to replace "p".
// The console.log() statements prints the return value of the replace() method (logitech) to the console.
var boop = "logitecp"
console.log(boop.replace("p","h"));


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The includes() method is called on the foods variable, which stores an array of Strings.
// The includes() method returns true if the data in the foods variable contains the argument passed in.
// In this example, the return value is true, because "chips" is included in the array of Strings.
// The console.log() statements prints the return value of the includes() method (true) to the console.
var foods = ["chips", "dips", "chocolate", "sushi"]
console.log(foods.includes("chips"));

// The join() method is called on the numbers variable, which stores an array of Numbers.
// The join() method returns the joined data in the array of Numbers using the argument passed in.
// In this example, the return value is "1+2+3", because "+" is the argument passed in to the join() method.
// The console.log() statements prints the return value of the join() method (1+2+3) to the console.
var numbers = [1, 2, 3]
console.log(numbers.join("+"));