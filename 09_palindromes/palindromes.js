const palindromes = function (input) {
    const processedString = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let array = processedString.split('');
    array.reverse()

    console.log(array.toString());

    if (array.join('') === processedString) return true;

    return false;
};

// Do not edit below this line
module.exports = palindromes;
