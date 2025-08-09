// Find the Sum of Digits of a Number
const SumofDigits = () => {
  let num = 1234;
  let sum = 0;
  toString = num.toString();
  toArray = toString.split("");
  for (let i = 0; i <= toArray.length - 1; i++) {
    let toNum = parseInt(toArray[i])
         sum+=toNum
  }
  console.log(sum);
};
SumofDigits();
