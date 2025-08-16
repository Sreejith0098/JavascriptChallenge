//Write a function in JavaScript that counts how many vowels are in a given string.

const countVowels=()=>{
    let input= 'javascript'
    let count = 0  
    let array = input.split('')

    for(let i=0; i<=array.length-1; i++){
        if("aeiou".includes(array[i])){
            count= count+1
        }
    }  console.log(count)
}
countVowels()