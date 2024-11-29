const firstName = "Patel";
const lastName = "Dev";

console.log(`${firstName} ${lastName}`);

const a = 10;
const b = 20;

console.log(`${a+b}`);



const title = "Hello World";
const title1 = "Minaxi";

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="wSidth=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <h1>${title1}</h1>
</head>
<body>
    `
console.log(html);

const fullName = `${firstName} ${lastName}`;

console.log(fullName);
// const fn = function(){
//     console.log(this);
//     console.log("Hello World");
// }

// fn();


// const fn1 = () => { 
//     console.log(this);
//     console.log("Hello World");
// }

// fn1();



// const add = function(a,b){
//     return a+b;
// }

// const addArrow = (a,b) => a+b;

// console.log(add(1,2));
// console.log(addArrow(1,2));




// const sayHi = (name,lastName) => `Hi ${name} ${lastName}`;

// console.log(sayHi("Dev","Patel"));




// const firstName = "Dev";
// const lastName = "Patel";
// const age = 21;
// const gender = "Male";

// const person = {
//     firstName,
//     lastName,
//     age,
//     gender,
//     fullName: function(){
//         return `${this.firstName} ${this.lastName} ${this.age} ${this.gender}`;
//     }
// }
// console.log(person.fullName());



// let a = { a: 1 };
// let b = Object.assign({}, a);
// a.a = 5;
// console.log(a,b);


// CURD

const obj = { a: 1, b: 2, c: 3 };

// dot notation
// read
console.log(obj.a);

// update
obj.d = 4;
console.log(obj);
// delete
delete obj.a;
console.log(obj);

// create

obj['a'] = 10;
console.log(obj);

const key = "a";

// read
//array notation
console.log(obj[key]);
