//Find the Largest Number in an Array
function LargestNumberInArray() {
  let input = [10, 25, 3, 99, 56];

  let largest = input[0];
  for (let i = 1; i <= input.length - 1; i++) {
    if (input[i] > largest) {
      largest = input[i];
    }
  }
  console.log(largest);
}
LargestNumberInArray();
