const multiply = (...numbers) => {
  const uniqueNumbers = [...new Set(numbers)];
  const result = uniqueNumbers.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
  return result;
};

const inputNumbers = [2, 3, 2, 4, 5, 3, 6, 1];
const result = multiply(...inputNumbers);
console.log(result);

console.log(multiply(1,9,8,7,5));
