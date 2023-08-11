const palindromes = function (string) {
    const adjustedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return adjustedString.split("").reverse().join("") === adjustedString;
};

// Do not edit below this line
module.exports = palindromes;
