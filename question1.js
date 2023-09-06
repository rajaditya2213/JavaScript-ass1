 //Q.1 Suppose you are building a payment -he-kout page and must display the final pri-e after the dis-ount+
//Create a simple dis-ount -al-ulator that takes two values from the variables - the total -ost and the
//dis-ount per-entage - and prints the dis-ounted value+

//sol->

let totalValue=2000;
let discountPercentage=20;

let discountPrice=totalValue-(discountPercentage/100) *totalValue;
console.log("The total price after discount is RS:" +discountPrice);