//Write a function in JavaScript that finds the second largest number in an array without using Math.max() twice.

let input= [10, 5, 8, 20, 15]
let largest = 0
let secondLargest = 0;

function findSecondLargest(){
   
    const sorted = input.sort((a,b)=>a-b)
   length = sorted.length-2
   secondLargest = sorted[3]
    console.log(`the second largest number is ${secondLargest}`)
}
findSecondLargest()
      