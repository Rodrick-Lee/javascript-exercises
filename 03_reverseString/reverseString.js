const reverseString = function(string) {
    let reverseWord = []
    let splitWord = string.split("");
    let j = 0;
    for (let i = splitWord.length-1; i >= 0; i--) {
        reverseWord[j] = splitWord[i]; 
        j++;
    }
    return reverseWord.join("");
    
};

// Do not edit below this line
module.exports = reverseString;
