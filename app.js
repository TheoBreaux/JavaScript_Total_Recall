// A. Q + A

// 1 How do we assign a value to a variable?
// To assign a value to a variable we use the key words "let", "const" or "var" along with the "=" assignment operator and its value to the right.

// 2 How do we change the value of a variable?
// To change the value, you must reassign the value to the variable name using the assignment operator. The variable must have been originally assigned with either the "let" of "var" keyword. Const variables cannot be changed

// 3 How do we assign an existing variable to a new variable?
// The variable must have been originally declared using "let" or "var". It can be reassigned then using the assignment operator and the new value to the right.

// 4 Remind me, what are declare, assign, and define?
// They are all virtually differnt terms for doing thee same thing. Assigning a value to a variable.

// 5 What is pseudocoding and why should you do it?
// Pseudocoding isbasically coding instructions you can jot down to complete the problem. You should do it because it helps to keep your code structured and breaks down a big problem into smaller one.

// 6 What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// As much time that is needed to think about how you will breakdown and strucure your code to solve the problem should be taken. Then you should begin to code.

// B. Strings

// Create a variable called firstVariable.
let firstVariable;

// Assign it the value of the string "Hello World".
firstVariable = "Hello World";

// Change the value of this variable to some number.
firstVariable = 7;

// Store the value of firstVariable in a new variable called secondVariable.
let secondVariable = firstVariable;

// Change the value of secondVariable to any string.
secondVariable = "Bye";

// What is the value of firstVariable?
console.log(firstVariable); // 7

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Theo";

let greeting = "Hello, my name is " + yourName;
console.log(greeting);

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || (false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

// D. The Farm

// Declare a variable animal. Set it to be "cow" or some other animal.
let animal = "cow";

// Write code that will print out "mooooo" if the variable is equal to cow.
if (animal == "cow") {
  console.log("mooooo");
}

// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
if (animal !== "cow") {
  console.log("Hey, You're not a cow");
}

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic.
let age = 78;

// Write code that will print out "Here are the keys!" if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

if (age > 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young");
}

// II. Loops

// A. The Basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400.
for (let i = 10; i <= 400; i++) {
  // console.log(i);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i = 12; i <= 4000; i += 3) {
  // console.log(i);
}

// B. Get Even

// Print out the numbers that are within the range of 1 - 100.
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i, "<-- is an even number");
  } else {
    console.log(i);
  }
}

// C. Give Me Five

// For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five.

// Add to the code from above to print out "I found a number. Three is a crowd." if the number is a multiple of three.

// For numbers divisible by both three and five, be sure your code prints both messages.

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`I found a ${i}. Three is a crowd. High five!`);
  }
  if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd.`);
  }
  if (i % 5 === 0) {
    console.log(`I found a ${i}. High Five!`);
  }
}

// D. Savings Account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

let bank_account = 0;

for (let i = 1; i <= 10; i++) {
  bank_account += i;
  console.log(bank_account);
}

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

let bonus_pay = 0;

for (let i = 1; i <= 100; i++) {
  bonus_pay += i * 2;
  console.log(bonus_pay);
}

// III. Arrays & Control flow

// A. Talk About It
// What are the things in an array called?
// Elements

// Do Arrays guarantee those things will be in order?
// yes because arrays are indexed

// What real-life thing could you model with an array?
// student grades

// B. Easy Does It

// Create an array that contains three quotes and store it in a variable called quotes.

const quotes = [
  "The only way to do great work is to love what you do.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The future belongs to those who believe in the beauty of their dreams.",
];

// C. Accessing Elements

// Given the following array,
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
console.log(randomThings[0]);

// What would you write to access the 3rd element of the array?
console.log(randomThings[2]);

// D. Change Values

// Given the following array,
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// Change the value of "Github" to "Octocat".
ourClass[4] = "Octocat";
// Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
// Check the value of the array to make sure it updated the array.
console.log(ourClass);

// E. Mix It Up

// Given the following array,
const myArray = [5, 10, 500, 20];

// Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("Tired");

// Remove the 5 from the beginning of the array.
myArray.shift();

// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");

// Remove the string of your choice from the end of the array.
myArray.pop();

// Reverse this array using Array.prototype.reverse().
myArray.reverse();

// Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
// yes the array has changed from its original form. the reverse method returned the array in reverse order

console.log(myArray);

// F. Biggie Smalls
// Create a variable that contains an integer.
let number = 7;

// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100.
// console.log()s "big number" if the number is greater than or equal to 100.
if (number < 100) {
  console.log("little number");
} else if (number >= 100) {
  console.log("big number");
}

// G. Monkey in the Middle

// Write an if ... else statement:

// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log "big number".
// Otherwise, log "monkey".
let num = 6;

if (num < 5) {
  console.log("little number");
} else if (num > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);

// Access one item from Thom's accessories array.
console.log(thomsCloset[2][0]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  `Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`
);

// Get more specific about what kind of PJs Thom is wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";

console.log(thomsCloset[1]);

// IV. Functions

// A. printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting, like so:

const printGreeting = (name) => console.log(`Hello there, ${name}!`);

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => console.log(`${name} is super cool!`);

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(num) {
  return num * num * num;
}

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you expect.

const isVowel = (char) => {
  char = char.toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  }
  return false;
};

console.log(isVowel("T"));

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const stringLengthValues = [];

const getTwoLengths = (string1, string2) => {
  stringLengthValues.push(string1.length, string2.length);
  return stringLengthValues;
};

console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const stringLengthArray = [];
const getMultipleLengths = (arrayOfStrings) => {
  for (let i = 0; i < arrayOfStrings.length; i++) {
    stringLengthArray.push(arrayOfStrings[i].length);
  }
  return stringLengthArray;
};

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

const maxOfThree = (num1, num2, num3) => {
  // if (num1 >= num2 && num1 >= num3) {
  //     return num1;
  // } else if (num2 >= num1 && num2 >= num3) {
  //     return num2;
  // } else {
  //     return num3;
  // }
  return Math.max(num1, num2, num3);
};

console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

let longestWord = "";

const printLongestWord = (arrayOfStrings) => {
  for (let i = 0; i < arrayOfStrings.length; i++) {
    let currString = arrayOfStrings[i];
    if (currString.length > longestWord.length) {
      longestWord = currString;
    }
  }
  return longestWord;
};

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

// Objects

// A. Make a User Object
// Create an object called user.

// Write into the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

const user = {
  name: "John Doe",
  email: "jdoe@gmail.com",
  age: 47,
  purchased: [],
};

// B. Update the User

// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "jdoe@hotmail.com";

// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++.
user.age++;

// C. Adding Keys and Values

// Without changing the original user object, add a new key location to the object, and give it a value of some location (a string).
user.location = "Los Angeles";

// D. Shopaholic!

// Our user has purchased some items! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");

// They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");

// They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs");

// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

// E. Object within an Object

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now).
user.friend = {
  name: "Jessica",
  age: 42,
  location: "Los Angeles",
  purchased: [],
};

// Console.log just the friend's name.
console.log(user.friend.name);

// Console.log just the friend's location.
console.log(user.friend.location);

// Change the friend's age to 55.
user.friend.age = 55;

// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");

// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A Latte");

// Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);

// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

for (items of user.purchased) {
  console.log(items);
}

// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (items of user.friend.purchased) {
  console.log(items);
}

// G. Functions Operating on Objects

// Write a single function updateUser that takes no parameters. When the function is run, it should:

// Increment the user's age by 1.
// Make the user's name uppercase.

const updateUser = () => {
  user.age++;
  user.name = user.name.toUpperCase();
};

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

const oldAndLoud = (person) => {
  person.age++;
  person.name = person.name.toUpperCase();
};

oldAndLoud(user);

console.log(user);
