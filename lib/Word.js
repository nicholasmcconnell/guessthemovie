const Letter = require('./Letter');

// * **Word.js**: Contains a class, `Word`, that depends on the `Letter` class. This is used to create an object representing the current word the user is attempting to guess. That means the class should define:


//   * An array of `new` `Letter` objects representing the letters of the underlying word

class Word {
    constructor(word){
        this.letters = word.split('').map(function(char) {
            return new Letter(char)
        })
    }
    getSolution(){
        return this.letters.map(letter => {
            return letter.getSolution()
        }).join('');
    }

    toString(){
        return this.letters.join(' ');
    }

    guessLetter(char){
        let foundLetter = false;

        this.letters.forEach(function(letter){
            if(letter.guess(char)) {
                foundLetter = true;
            }
        });
        console.log("\n" + this + "\n");
        return foundLetter;
    }

    guessedCorrectly(){
        return this.letters.every(letter => {
            return letter.visible;
        })

    }
}

module.exports = Word;

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)