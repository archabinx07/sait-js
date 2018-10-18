//Invoke the function
function greetPerson() {
    var name = "Wilmar";
    if (name) {
        //Do something
        console.log(name);
    }
}

greetPerson();


//Inmediately invoked function
(function greetPerson() {
    var name = "Wilmar";
    if (name) {
        //Do something
        console.log(name);
    }
})();



for (var i = 0; i < 10; i++) {
    console.log(i); //Changes from 0 - 9 as it goes thorugh the loop
}
console.log(i); // 10

for (let i = 0; i < 10; i++) {
    console.log(i); //Changes from 0 - 9 as it goes thorugh the loop
}
console.log(i); // i is not defined



// let condition = true;
// if (condition) {
//     let a = "zeta";
//     console.log(a); //Zeta
// }
// console.log(a); //This should be undefined


let condition = true;
if (condition) {
    let a = "zeta";
    console.log(a); //Zeta
}
console.log(condition); //This should be undefined


//ACTIVITY: CONST
const arr = [1, 2, 3];
const obj = { id: 0, name: "Alpha" };

arr.push(4);
console.log(arr);

obj.id = 7;
console.log(obj);


//ACTIVITY: CONST AND LET
const funcs = [];
for (let i = 0; i < 3; i++) {  
    funcs.push(function() {
        console.log(i);  
    });
}
for (let j = 0; j < funcs.length; j++) {  
    funcs[j](); // should output 0, then 1, then 2
}

//**************************************************************//
//NEWER FUNCTION
//Old Syntax
function oldOne() {
    console.log("Hello world!");
}
// New Syntax
var newOne = () => {
    console.log("Hello World!");
}


//Arrow function example
let newOneWithParameters = (a, b) => {
    return a + b;
}
newOneWithParameters(10, 20); // 30 
//One step further
// let newOneWithParameters = (a, b) => a + b
// newOneWithParameters(10, 20); // 30


//Arrow Function Steps
// var getMessage = function(name) {
//     return'Hello ' + name + '!';
// }
const getMessage = name =>'Hello ' + name + '!';
console.log(getMessage);



//ACTIVITY: REFACTOR CODE
//**************************************************************//
//No arrow Method
// const sum = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(3, 4)); // 7


//Arrow Method
const sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(3, 4)); // 7
//**************************************************************//
//No Arrow Method
// const fibonacci = function(n) {
//     if (n < 3) {
//         return 1;  
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(9)); // 3

//Error Method
const fibonacci = n => {
    if (n < 3) {
        return 1;  
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(9)); // 3
//**************************************************************//

//DEFAULT PPARAMETER
let addNumbers = (a, b = 10) => {
    return a + b;
}
console.log(addNumbers(20)); // 30
console.log(addNumbers(20, 30)); // 50

//Modify Function
function multiply(numberOne, numberTwo = 1) {
    // if (!numberOne) {
    //     throw Error("Whoops!")
    // }
    return numberOne * numberTwo;
}
console.log(multiply(5, 4)); 
console.log(multiply(4)); 
console.log(multiply()); 

//**************************************************************//
//FOR OF LOOP
let array = [2, 3, 4, 1];
for (let value of array) {
    console.log(value);
} 
// Output:
// 2
// 3
// 4
// 1

//SPREAD/REST OPERATOR
// let createArray = (...array) => {
//     console.log(array);
// }
// createArray(10, 20, 40, 60, 90); // 10, 20, 40, 60, 90

// let createListFromArray = (...list) => {
//     console.log(list);
// }
// createListFromArray([10, 20, 40, 60, 90]); // 10, 20, 40, 60, 90

//ACTIVITY: ...REST
// function product(x, y, z) {
//     var numbers = [x, y, z];
//     return numbers.reduce((currentProduct, number) => currentProduct * number, 1);
// }  
// console.log(product(3, 4, 5)); // 60
// console.log(product(3, 4, 5, 6)); // 360
// console.log(product(1, 2, 3, 4, 5, 6)); // 720

let createArray = (...newArray) => {
    console.log(newArray);
}
createArray(1,2,3)

//ACTIVITY: ...SPREAD
// function join (array1, array2) {
//     return array1.concat(array2);
// }
//     console.log(join([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 66]

let createList = (...newList) => {
    console.log(newList);
}
createList(7,8,9)

//**************************************************************//
//TEMPLATE LITERALS
const student = {
    name: 'Jane Doe',
    city: 'Calgary'
};
// let message = 'Hello ' + student.name + ' from ' + student.city;

let message = "Hello ${student.name} from ${student.city}";


//ACTIVITY: TEMP LITERALS
const user = {
    name: 'Wilmar',
    loginCount: 1,
    goldStatus: true
};
const className = 'container';
const html = '<div class="' + className + '">' + '<h2>Welcome' + (user.goldStatus ? ' to our gold status member, ' : ', ')
 + user.name + '!' + '</h2>' + '<p>Today is ' + new Date() + '</p>' + '<p>You have logged in ' + ++user.loginCount + ' times.</p>' + '</div>';

document.getElementById('target').innerHTML = html;

let zone = 'East';

if(zone='East'){
    shippingCharge = 15.00;
} else {
    shippingCharge = 10.00;
}

shippingCharge = (zone="East") ? 15.00 : 10.00;

//**************************************************************//
const car = {
    type: 'Toyota',
    color: 'silver',
    model: 2007
};
    
const {type, color, model} = car;
console.log(type, color, model); // Toyota Silver 200

// const {color} = car;
// console.log(color); // silver

//ACTIVITY: DESCTRUCTURE AN OBJECT
const myEmployee = {
    active: true,
    department: 'Engineering'
};

function isActiveEngineer(employee) {
    const {active, department} = employee; //DESCTRUCTURE
    // const active = employee.active;
    // const department = employee.department;
    return department === 'Engineering' && active;
}
console.log(`Is myEmployee active? ${isActiveEngineer(myEmployee)}`);


//**************************************************************//
//FOR EACH
var names = ['Morgan', 'Taylor', 'Lesley'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// const names = ['Morgan', 'Taylor', 'Lesley'];
// names.forEach((name, index, array) => {
//     console.log(name);
// });

//ACTIVITY: FOR EACH
// const trips = [
// { mph: 10, hours: 3 }, 
// { mph: 30, hours: 2 },  
// { mph: 25, hours: 4 }
// ];
// for (let i = 0; i < trips.length; i++) {
//     console.log(trips[i].mph * trips[i].hours);
// }

const trip = [
{ mph: 10, hours: 3 }, 
{ mph: 30, hours: 2 },  
{ mph: 25, hours: 4 }
];
trip.forEach(trip => {
    console.log(trip.mph * trip.hours);
});

//**************************************************************//

//Every
// const students = [  
//     { name: 'Morgan', present: true },  
//     { name: 'Sam', present: false },  
//     { name: 'Taylor', present: true }
// ];
// const allPresent = students.every(student => student.present);
// console.log(allPresent); // false

//Some
const students = [  
    { name: 'Morgan', present: true },  
    { name: 'Sam', present: false },  
    { name: 'Taylor', present: true }
];
const somePresent = students.some(student => student.present);
console.log(somePresent); // true

//ACTIVITY: EVERY AND SOME

const availableLaptops = [  
    { name: 'MacBook', RAM: 8 },  
    { name: 'Asus', RAM: 32 },  
    { name: 'Lenovo', RAM: 16 },  
    { name: 'HP', RAM: 4 }
];

//CHECK FOR THIS SOLUTION
// const all16GB = availableLaptops.every(laptop => laptop.RAM >= 16);
// console.log(all16MB);

// const some16GB = availableLaptops.every(laptop => laptop.RAM >= 16);
// console.log(some16GB);

//**************************************************************//
//FILTER
const users = [  
    { username: 'ryan10', active: true },  
    { username: 'morgan', active: false }
];const activeUsers = users.filter(user => user.active);
console.log(activeUsers);


const groceries = [  
    { name: 'bananas', aisle: 'produce', price: 2 }, 
    { name: 'flour', aisle: 'baking', price: 5 },  
    { name: 'avocados', aisle: 'produce', price: 4},  
    { name: 'lettuce', aisle: 'produce', price: 5 },  
    { name: 'olive oil', aisle: 'baking', price: 10 },  
    { name: 'shampoo', aisle: 'beauty', price: 12 }
];
const produceLessThan5 = groceries.filter (grocery => grocery.aisle === "produce" && grocery.price < 5);
// const produceLessThan5 = []; // your code here
// // Output the produce
console.log(produceLessThan5);



//**************************************************************//
//MAP
const numbers = [2, 6, 10];
const halvedNumbers = numbers.map(number => number / 2);
console.log(halvedNumbers); // 1, 3, 5


///Activity: MAP
const trips = [  
    { miles: 5, hours: 1},  
    { miles: 6, hours: 0.5},  
    { miles: 4, hours: 2 }
];
// const speeds = []; 
const speeds = trips.map(trip => trip.miles / trip.hours); // your code here
// Output the speeds
console.log(speeds);

//**************************************************************//
//FIND
const jobs = [  
    { title: 'Electrician' },  
    { title: 'Developer' },  
    { title: 'Barista' }
];
const devJob = jobs.find(job => job.title === 'Developer');
console.log(devJob); // { title: 'Developer' }

//ACIVITY : FIND
const posts = [
    { id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...' },
    { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...' },
    { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sit amet...'}
  ];
  
  // Find the post with ID 29
  const currentId = 29;
  const currentPost = posts.find(post => currentId === post.id);
  
  console.log(currentPost);
  console.log(currentPost.title);
  console.log(currentPost.body);

  
//**************************************************************//
//REDUCE
// const numbs = [2, 6, 10];
// const total = numbs.reduce(function(currentSum, number) {
//     return currentSum + number;
// }, 0);

// console.log(total); // 18
const transactions = [ 5, 10, 15 ];
const total = transactions.reduce(function(currentSum, number) {
    return currentSum + number;
}, 0);
console.log(total); // 30


//**************************************************************//
//   ACTIVITY: QUIZ
//   Which array helper would be most suitable for each situation? (forEach, every, some, filter, map, find, or reduce)
//   1. You need to check if all elements in an array are integers.
        //EVERY
//   2. You have an array of blog posts and need to output each post on the page.
        //FOREACH
//   3. You need to check if an array has at least one element that isn't null.
        //SOME
//   4. You have an array of expenses and need to calculate your total expenses lastmonth.
        //REDUCE
//   5. You need a new array to store the square root of each item in an existing array.
        //MAP
//   6. You have an array of computers, but only need computers with more than 16GB of RAM.
        //SOME
//   7. You have an array of blog posts, and need to retrieve one post by its ID.
        //Find