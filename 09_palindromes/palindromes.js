const palindromes = function (str) {
    const ALPHANUMERIC = "abcdefghijklmnopqrstuvxyz0123456789"
    const strClear = str
        .toLowerCase()
        .split("")
        .filter((character) => ALPHANUMERIC.includes(character))
        .join("")

    const strReverse = strClear
        .split("")
        .reverse()
        .join("")

    return (strClear == strReverse) ? true : false;
};
// Do not edit below this line
module.exports = palindromes;
