const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(numbers) {
	return numbers.reduce((sum, num) => sum+num,0)
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total * num,1)
  
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  let total = 1;
	while(num > 0){
    total *= num
    num--
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
