//Reverse a String Without Using reverse() Method
const reverseString=()=>{
    let input = "hello"
    let reversedString = ""
    intoArray = input.split('')
    for(let i=intoArray.length-1; i>=0; i--){
        reversedString= reversedString + intoArray[i]
    }
    console.log(reversedString)
}
    reverseString()