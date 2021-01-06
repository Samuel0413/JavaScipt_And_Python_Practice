console.log('hello');

//alert('yoooo, js is working');

// Variables
var b = 'smoothie';
console.log(b);

var num = 45;
console.log(num);

// Manipulate DOM with JS: change html using js
//const age = prompt('What is your age?');

//document.getElementById('sometext').innerHTML = 'Hey Sup!' + ' You are ' + age;

// Numbers in JS
var num1 = 5.7;
num1++;
console.log('Value of num1 is ' + num1); // 6.7
console.log(5 * 10);

// Functions
// Create function and call it

function fun() {
    console.log('this is a function');
}

// call the function
//fun()

/* Task: create a function and says hello + name, and the current time
Example:
    Name: "Sam"
    Output: "Hello, Sam"
*/

// if function is dependent on something, then write functions with arguments so it is clear

function greeting(name) {
    var cur_time = new Date().toLocaleTimeString();
    if (user_name != null && user_name != '') {
        document.getElementById('heading1').innerHTML = "Hello, " + user_name + "! It is now " + cur_time + ".";
    }
}

//var user_name = prompt('What\' your name?');
//console.log(user_name);

//greeting(user_name);

// Data Types
let yourAge = 18; // int
let yourName = 'Bob'; // string
let name = {first: 'jane', last: 'doe'}; // object
let truth = false; // boolean
let fruits = ['apple', 'banana', 'orange'] // array
let random; // undefined
let nothing = null; // null

// Strings in js (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple'; // new line

// to get the length
console.log(fruit.length);

// to get a index of a string 
console.log(fruit.indexOf('nan'));

// slicing (substring)
console.log(fruit.slice(2, 6));
console.log(fruit.slice(2));

// replace some part
console.log(fruit.replace('bana', 'd'));

// split by some specific char
let combine = "1,2,3,4,5";
console.log(combine.split(',')); // split by comma
console.log(combine.split('')); // split by char

// array
let my_fruits = ['banana', 'apple', 'orange', 'peach'];
// my_fruits = new Array(...)
// common methods
// transform array to string (combine then one by one seperated by comma)
console.log('to string', my_fruits.toString());
// join array element with the given string, default join with comma like toString()
console.log('join array', my_fruits.join(' ** ')); 
// pop elements out from array, and return the pop out elements
console.log(my_fruits.pop(), my_fruits);
// push element(s) into the array, and return the length of the array after pushing in
console.log(my_fruits.push('durian'), my_fruits); // same as my_fruits[my_fruits.length] = newElement
// shift() remove the first item from the array, unshift(element) adds items to the head of the array

// Objects (kinda)
let user = {
    first: 'Samuel',
    last: 'Chen',
    age: 19,
    userInfo: function() {
        return this.first + '\n' + this.last + '\n' + 'Age: ' + this.age;
    }
    // use this to access field just like 'self' in python
}

console.log(user.userInfo());

// Conditionals, Control Flows
// && and, || or
// let will not work with prompt, write var instead

//var age = prompt('How old are you?');
let age = 0
let status = ''
if (age >= 18 && age <= 35) {
    status = 'target demo';
} else {
    status = 'not the audience';
}
//console.log(status);

// Switch statements
// differentiate between weekday and weekend
// day 0 -> Sunday -> Weekend
// day 6 -> Saturday -> Weekend
// day 4 -> Thursday -> Weekday
switch (new Date().getDay()) {
    case 0:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);

// json file, see students.json
// array of js objects, they are valid js codes

