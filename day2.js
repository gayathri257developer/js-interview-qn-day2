// Day 2

// 1. What is meant by first class functions?
// It is also called first class citizen function, there are three points

// a) Function can be assigned to a variables.
let myFunction = function(){
    console.log('This is function that is assigned to a variable');
    }
    myFunction();

// b) Function can be passed as an argument to other function.
function printHello() {
    console.log("I am a first class Function");
  }
  function passedFn(functionArgument) {
    functionArgument();
  }
  executeFn(printHello); 

// c) Function can be returned from other function
function getFunction() {
    return function(){
      console.log("I am function returned from another function")
    }
  }
  let fn = getFunction();
  fn(); 

//2. Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()?

// These are just different ways of invoking or calling a function
// When we calling a function using any of these 3 then you don't have to define in the function that it will be taking obj as a parameter
// It will assume that the first argument which is coming while calling the function will be an object only.

//creating an object for the reference
let person = {
    name : "gayu",
    age : 23,
    salary : 50000,
    city : "Bangalore"
}

// creating a function which will be using this object:  When using call bind or apply

//  Call : In case of call each and every argument which is required to be passed to the function will be passed individually.
function myDetails(company, designation) {
    console.log(this.name + " is " + this.age + " years old. ", company, " ", designation);
}
myDetails.call(person, "Google", "Frontend Developer");

//  Apply : In apply each and every argument which is required to be passed to the function will be passed inside an array .
function myDetails (company, designation) {
    console.log(this.name + " is " + "working in the", company, " ", designation);
}
myDetails.apply(person, ["Lumen", " Java Developer"]);

// Bind : It will return you a new function. And this new function you can use anytime anywhere.
const newFunc = UserDetails.bind(person);
newFunc("Flipkart", "CEO")

//3. What are objects in javascript?

// Objects are the non-primitive datatypes and are use to store multiple data in the form of key and value pairs.
const ObjName = {
   name : 'Uday Kiran',
   role : "Actor",
}
console.log(ObjName.role + " " + ObjName.name);

//4. What are function constructors?

// Function constructor is kind of regular function to create multiple objects at a time. 
//When creating function constructor, the first letter of the name must be capital.
// new keyword is mandatory to be used with function constructor.
function Job(role, salary){
    this.role = role,
    this.salary = salary
}
const newJob = new Job('HR', 30000);
console.log(Job.role);

//5. Explain prototypes ?
// Every objrct in javascript has a built-in property. which is called its prototype.

//6. What is prototype chain?

//The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.

// constructor function
function Person () {
  this.name = 'John',
  this.age = 23
}
// creating objects
const Person1 = new Person();

// checking the prototype value
console.log(Person.prototype);

//7. Give an example of inheritance using function constructor?

function Employee(name, age, gender, id) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.id = id;
};

function Developer(name, age, gender, id, 
specialization) {

  // Calling Employee constructor function
  Employee.call(this, name, age, gender, id);

  // Adding a new parameter
  this.specialization = computer;
}
console.log(Employee.prototype);
console.log(Developer.prototype);

//8. What are callback?

//A callback is a function passed as an argument to another function

function add(a, b , callback){
  document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>");
  callback();
  }
  // disp() function is called just
  function disp(){
  document.write('This must be printed after addition');
  }
  add(5,6,disp); 

//9. What is the use of setTimeout

//The setTimeout() method calls a function after a number of milliseconds.
// 1 second = 1000 milliseconds.

// setTimeout(function () {
//   console.log("hello world");
// }, 2000);

//10. What is an event loop and call stack?

// if the call stack is currently executing some code, 
// the event loop is blocked and won't add any calls from the queue until the stack is empty again.

const addOne = (value) => value + 1;
const addTwo = (value) => addOne(value + 1);
const addThree = (value) => addTwo(value + 1);
const calculation = () => {
  return addThree(1) + addTwo(2);
};
calculation();
