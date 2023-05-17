// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  function caesar(input, shift , encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) { // returns false if shift is equal to 0, less than -25, more than 25, or doesnt exist.
      return false;
    }
    
   
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split(''); // this creates an array of letters in the alphabet
    
      const shiftDirection = encode ? 1 : -1; // if true, then it will output 1 which will let us know we need to shift to the right, and false will do the opposite
    
    
   const output = input 
   .toLowerCase() // this converts the string to all lowercase to prevent having errors, since upper and lower case letters have different hex values
   .split("") // this converts the string into individual characters
   .map((char) => { // by using .map() we can then search through the array of letters converted from the string input
     if (!/[a-z]/.test(char)) {  // excludes any values that dont equal any letter in the alphabet and returns it unchanged
  return char;
  }

      
      const currentIndex = alphabet.indexOf(char);  // if the character is in the alphabet, it finds its index  
      const newIndex = (currentIndex + shiftDirection * shift + 26) % 26; // then adds the shift value, which will then multiply by the direction which will either make that value positive or negative, then adding 26 enusres we always have a positive number,then by using the modules operator %, we get the remainder of the of the division operator of 26
      return alphabet[newIndex];
    })
    .join("");
    
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
