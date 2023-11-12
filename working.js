//Execution Context


// var userName = "Tom";
// var userAge = "10";

// console.log(`username: ${userName}`);
// console.log(`userAge:${userAge}`);

// function greetUser(name){
//     var greet = 'I hope you are doing fine.';
//     console.log(`Hello ${name}, ${greet}`);
//     var currentYear = 2030;
//     const year = currentYear-userAge;

//     return `Your birth year is ${year}`;gi
//     }

// const birthYear = greetUser(userName);
// console.log(birthYear);



// Hoisting


// console.log(userName);

// var userName = "sumit";                                    will print undefined

        ///start

// Temporal Dead Zone

// var a = 10;
// {
//     console.log(a);
// }

// console.log(a) //will give error as a is not defined


// console.log(a);
// let a = 10;         // memory is allocated but it's not accessible this is temporal deadzone here let is hoisted but Javascript is not allowing to access

// let a = 10;
// {
//     console.log(a); //output would be 10 here
// }

// let a = 10;
// {
//     console.log(a);
//     let a = 10;             //javascript will show error as cannot access a variable showing as inaccessible
// }
                    //end


            //start

//Strict mode                  
// a = 10;
// console.log(a); //JS won't allow this is strict mode.

// let value = 10;
// if(value){
//     valeu = 20;         //here javascript will create another variable named valeu and assign 20 to it.
// }
// console.log(value);     //In large codebases it is difficult to find such bugs so in strict mode we can avoid all this mistakes
// 'Use strict'            //use this to use strict mode in javascript

//Strict mode in javascript enforces rules for variable scoping and prevents the use of undeclared variables. It enforces stricter rules for variable scoping and prevents the use of undeclared variables, leading to better code quality and fewer bugs.


                //end

                //start

// var a = 20;
// let b = 20;



// var a = 55;
// console.log(a);

// let b = 33; // this is not possible since b is already declared above.
// console.log(a);

                        //end



//IIFE

(function(a,b){
        console.log(a*b);               // This is how we define it.
})(4,2);

const user = (function(){
        const userData = {
                userName: 'John',
                userAge: 20,
        };

        function getName(){
                userData.userName = "sumit";
                console.log(userData.userName);
        }

        function updateAge(age){
                userData.userAge = age;
                console.log(userData.userAge);
        }

        return {getName, updateAge};
})();

// console.log(user);
// console.log(user.userData);
// user.updateAge(50);
// console.log(user);
// user.updateAge(30);
// user.userData.user;

// We user the concept of IIFE for immediately invoking the function where we need to initialize object with initial values see the example above.

function main(){
        return (function(){
                console.log("hello user");
        })();
}
const result = main();

//PURE FUNCTIONS

function calculate(num1, num2){
        return num1*num2;
}

console.log(calculate(4, 6));
// Functions which are completely dependent on input not dependent on external factors. This type of functions should not modify the input.

const discount = 25;

function calcDis(price){
        return price - discount;
}
//This one has dependency on external factors. also should not change state of outside function.


                // Callback functions

//When we use function as a parameter inside a function that is a callback function

function greet(wish){
        console.log(`${wish()} welcome to javascript` );
}
function sayHi(){
        return "Hi";
}

function sayHello(){
        return "Hello";
}

function goodMorning(){
        return 'Good Morning';
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);


///Higher Order Function 

// Functions which accepts function as an argument
// or returning a function is higher order function

const inputs = [2, 3, 4, 5, 6, 7, 8, 12 , 1, 4, 16];

// function square(in){
//         const squared = []
//         for(let num of in){
//               squared.push(num*num);  
//         }
//         return squared;
// }

// function cubic(in){
//         const cubes = [];
//         for(let num of in){
//                 cubes.push(num*num);
//         }
//         return cubes;
// }

// console.log(square(inputs));
// console.log(cubic(inputs));

function operation(input, fn){
        const output = [];

        for(let num of input){
                output.push(fn(num));
        }
        return output;
}

function squared(num){
        return num*num;
}

function cube(num){
        return num*num*num;
}
console.log(operation(inputs, squared));

//Currying in javascript

// f(a,b,c) ---------------->>>>> f(a)(b)(c);

function add1(a,b,c){
        return a+b+c;
}
a
function add2(a){
        return function(b){
                return function(c){
                        return a + b + c;
                };
        };
}

console.log(add2(2)(3)(4));


//map()         -------------> manipulates the given arr using function then return a new array.


const squared = inputs.map(function(
        currentElement){
                return currentElement*currentElement;
        }
);

const squared = inputs.map((num) => num*num )
console.log(squared);

//filter() ----------------------->>>> it filters out things and returns a new array

const inputs = [2, 10, 11, 23, 25, 10, 6];

const positives = inputs.filter(noNegative);

function noNegative(num){
        return num > 0;
}
console.log(positives);


//reduce() --------------------------->>>>> 
//reduce(fn, initial value)

//function redfn(accumulator, currentvalue, currentIndex, arr)

const inputs = [2, 3, 4, 5, 6]


cons sum = inputs.reduce((total, num, index) => {
        
        return total+num;
}, 0)

//find ------------------------- findIndex

const in = [
        22, 13, 15, 77, 98, 76, 44, 55
];

const find1 = in.find((num) => {
        num == 65;
})
console.log(find1);

const find2 = in.findIndex((num) => {
        num == 65;
})


// this keyword in javascript ------------------------>>>>>>>   this keyword is a pointer to the object


let user = "John";

// console.log(user);
// console.log(window.user);
// console.log(this.user);

// All of them outputs John

function checkThis(){
        console.log(this);
}
checkThis();

const user1 = {
        userName: "John",
        userAge: 12,
        work: function(){
                console.log(this);
        }
}



user1.work();

const user2 = {
        userName: 'Harry',
}

user2.work = user1.work;

console.log(user2);

user2.work();


//normal function has their own this whereas arrow function have their parents this.


const checkArrow = ()=>{
        console.log(this);
}

function checkThis(){
        console.log(this);
}

checkArrow();
checkThis();