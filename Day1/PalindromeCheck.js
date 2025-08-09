// Check the number is palindrome or not 
const palindromecheck =()=>{

let number = 121;
toString = number.toString()

let toArray = toString.split("")
let reversedArray= toArray.reverse()

let revesedString = reversedArray.join("")
let reversedNumber =  parseInt(revesedString)
if(reversedNumber===number){
     console.log(`${number} is palindrome`)
}else{
    console.log(`${number} is not palindrome`)
}
}
palindromecheck();
