// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Hello stranger!";
}

var g = greeting();
var o = greeting();
console.log(g);
console.log(o);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Hello ${name}!`;
}

var myName = customGreeting("Judy");
var yourName = customGreeting("Snoopy");
console.log(myName);
console.log(yourName);


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, second, last) {
    return `Hello ${first} ${second} ${last}, are you sleepy?`;
}

var name = greetPerson("John", "Smelly", "Smith");
var anotherName = greetPerson("College", "Ruled", "Subject");
console.log(name)
console.log(anotherName)

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    return `You will have ${num**2} coffees or french fries today!`
}

var coffee = square(4)
var frenchFries = square(50)
console.log(coffee)
console.log(frenchFries)

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"



function checkStock(num, item) {
    if (num >= 4) {
        return `${item} is stocked`;
    } else if (num > 0) {
        return `${item} - running LOW!`;
    } else {
        return `${item} - OUT of stock!`;
    }
}

console.log(checkStock(4, "Coffee")); 
console.log(checkStock(3, "Tortillas"));
console.log(checkStock(0, "Cheese"));
console.log(checkStock(1, "Salsa"));



