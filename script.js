console.log("Hello, World!");
console.log("From script.js file.");

const myName = "shena";
let age = 20;
let number = 9072744901;
let address = "saravia";


console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log('67');

function greet(greeting, names = []) {
    if (Array.isArray(names)) {
        names = names.join(" , ");
    }
    return `${greeting} sa enyu, ${names}`;
}


console.log(greet(" Mayong aga ", ["shena", "Bai", "Soy", "Tol", "Erp"]));

const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const ProjectsHeading = document.querySelector("#services h2");
console.log(ProjectsHeading);