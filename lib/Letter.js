// Contains a class, `Letter`. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

class Letter {
    constructor(char) {
        this.visible = !/[a-z1-9]/i.test(char);
        this.char = char;
    }

    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

    toString() {
        if (this.visible === true) {
            return this.char;
        }
        return "_";
    }

    //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    guess(charGuess) {
        if (charGuess.toUpperCase() === this.char.toUpperCase()){
            this.visible = true;
            return true;
        }
        return false;
    }

    getSolution(){
        return this.char;
    }
}

module.exports = Letter;