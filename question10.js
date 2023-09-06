//Q 10. You are given with array of number with positive and negative.Your task is to print only the positive number.

let arr=[1,2,-3,5,-9,-8,-7,7];

for(i=0; i<arr.length; i++){
     if(arr[i]<0){
          continue;
     }
     console.log(arr[i]);
}
