// check the given number is amstrong number or not 

const Amstrong =()=>{
    let num =153;
    let outPut = 0
    //converting number to string
    let toString = num.toString()
    //converting to array
   let toArray =  toString.split('')   
   for(i=0; i<=toArray.length-1; i++){
    var lengthOfNum = toArray.length
   
    let elements = toArray[i]**lengthOfNum
    
    outPut +=elements  
   }  
   if(outPut===num){
    console.log(`${num} is an amstrong number `)
   }else{
    console.log(`${num} is not an amstrong number `)
   }
}
Amstrong()

