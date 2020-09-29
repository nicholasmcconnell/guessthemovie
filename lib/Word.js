const Letter = require('./Letter');

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