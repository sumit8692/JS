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

// var userName = "sumit"; 



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

let a = 10;
{
    console.log(a);
    let a = 10;             //javascript will show error as cannot access a variable showing as inaccessible
}
