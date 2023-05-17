const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    // Error handling for the alphabet parameter
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    const alphabetSet = new Set(alphabet);
    if (alphabetSet.size !== 26) {
      return false;
    }
    
    // Create an object that maps each letter in the input alphabet to the corresponding letter in the substitution alphabet
    const inputAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetMap = {};
    for (let i = 0; i < inputAlphabet.length; i++) {
      alphabetMap[inputAlphabet[i]] = alphabet[i];
    }

    // Encode or decode the input text based on the encode parameter
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();
      if (char === " ") {
        result += " ";
      } else {
        const substitutionChar = encode ? alphabetMap[char] : getKeyByValue(alphabetMap, char);
        result += substitutionChar;
      }
    }
    return result;
  }

  // Helper function to get the key of an object based on its value
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

