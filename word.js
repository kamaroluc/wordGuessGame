var Letter = require("./Letter");

function word(word){
    this.letters = word.split("").map(function(char){

        return new Letter(char);
    });
}

word.prototype.getSolution = function() {
    return this.letters.map(function(letter) { // iterate over each letter
      return letter.getSolution(); // return the solution for each to form an array of solved letters
    }).join(''); // create a string from the array of solved letters
   }
   
   // setting `toString()` as a method lets us concatenate it like we would a string!
word.prototype.toString = function() {
    return this.letters.join(' '); // see Letter.prototype.toString in Letter.js
   };

   word.prototype.guessLetter = function(char) {
    // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
    var foundLetter = false;
    this.letters.forEach(function(letter) {
      if (letter.guess(char)) {
        foundLetter = true;
      }
    });
   
    // Print the word guessed so far--because we set the method for toString,
    //  JavaScript will automatically concatenate this even if we don't call toString
    console.log("\n" + this + "\n");
    // return whether we found a letter
    return foundLetter;
   };
   
   // Returns true if all letters in the word have been guessed
   word.prototype.guessedCorrectly = function() {
    // The `every` method returns true if the callback function returns true for every element in the array
    return this.letters.every(function(letter) {
      return letter.visible;
    });
   };
   
   module.exports = word;