const fibonacci = function(index) {
let currentNum = 1; 
let previousNum = 0; 

if(index == 0) return previousNum
if(index < 0) return "OOPS"

for (let i = 1; i < index; i++) {
    let nextNum = currentNum + previousNum
    previousNum = currentNum
    currentNum = nextNum
}
return currentNum
};

// Do not edit below this line
module.exports = fibonacci;
