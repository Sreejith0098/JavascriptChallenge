//Given a positive number, write logic to find the largest digit in it.

const largestDigit =()=>{

    let number = 53821;
    let toString = number.toString()
    
    toArray = toString.split('')
   
    for(let i=0; i<=toArray.length-1; i++){

       if(toArray[0]>=toArray[i]){
        console.log(toArray[1])
       }else{
        console.log(toArray[i])
       }
    }
}
largestDigit()