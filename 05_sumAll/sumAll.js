const sumAll = function (num1, num2) {
    let sum = 0;
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }
    if (num1 >= 0 && Number.isInteger(num1) && num2 >= 0 &&  Number.isInteger(num2)) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        return sum
    }
    return "ERROR"
        
      
};

sumAll(1.1, 2)
// Do not edit below this line
module.exports = sumAll;
