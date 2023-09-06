//Q 9. You are given array of numbers and strings. Your task is to find the first string in the array . On finding the first string point "FOund the First string"m and its value.



// const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     console.log(`Found The Second String: ${arr[i]}`);
//     break;
//   }
// }

const arr=[1,2,999,56,"Aditya", 123, "Hitesh"];


for(i=0;i<arr.length;i++){
     if(typeof arr[i]=="string"){
          console.log(`Found The First String: ${arr[i]}`);
          break;
     }
     console.log(`Found the second string: ${arr[i]}`);
}


