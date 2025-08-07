// check the number is prime or not
let number =7;
//assume isPrime is true
let isPrime = true;
//less than 2 are not prime numbers
if (number < 2) {
  console.log("this is not a prime number");
  isPrime= false;
} 
//check for numbers from 2 to 6
else {
  for (let i = 2; i < number; i++) {
    // if the given number is completely divisible by 2-6 then the given number is not prime
    if (number % i === 0) {
      isPrime = false;
      break;
    } 
  } 
}
console.log(isPrime)