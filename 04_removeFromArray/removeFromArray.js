const removeFromArray = function(array, ...theWords) {
    let newArray = array.filter(val => !theWords.includes(val));
    console.log(newArray)
    return newArray 
};

// Do not edit below this line
module.exports = removeFromArray;
