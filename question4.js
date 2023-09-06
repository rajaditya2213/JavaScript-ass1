//Q 4. You are developing a booking application for a cinema. The tickets price depends on the type of the viwer("child" "adult" or "senior")
//Write a program which calculates the price accordingly and prints the total price price to be paids.Let's assume
//the ticket price for a child is Rs.100, adult ticket price is Rs.150, and ticket price for senior is Rs 120.


let numberofChilds=2;
let numberofAdults=1;
let numberofSeniors=1;

let childTicketPrice=100;
let adultTicketPrice=150;
let seniorTicketPrice=120;

let totalPrice= numberofChilds*childTicketPrice + numberofAdults*adultTicketPrice + numberofSeniors*seniorTicketPrice;
console.log(totalPrice);