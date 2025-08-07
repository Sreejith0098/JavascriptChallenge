//Reverse a given number 
let number = 12345
// the given number is converted to string
let toString = number.toString()
//string numbers convertd to array
let toArray= toString.split('')
//reverse the numbers
let reversed = toArray.reverse()
//converted to reversed string
let outPut = reversed.join('')
//reversed string number converted to number
let toNumber = parseInt(outPut)

console.log(toNumber)