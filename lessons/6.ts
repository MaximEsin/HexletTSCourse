const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

function getEvenNumbers() {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
}
