// Write a program that a takes user information(such as name,email,age) and uses the type of operator to check the datatype of each input.Print appropriate message like "Names shold be string", "email should be string" and "age should be number".


let name="Aditya";
let Email="adityaexample2023@gmail.com";
let age="20";

if (typeof name!==String) {
     console.log("Name Should be a String");
}else if (typeof Email!=="string") {

     console.log("Email Should be a String");
} else if (typeof age!=="number") {
                 
     console.log("Age Should be a number");
} else {
     console.log("All field should be a proper ");
}
