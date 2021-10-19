class Scrabble {
    constructor(word) {
        this._word = word
        this._points = 0;
        this._split = String(this._word).toLowerCase().split('')
        this._alphabetScores = {
            ' ': 0,
            "a": 1,
            "c": 3,
            "b": 3,
            "e": 1,
            "d": 2,
            "g": 2,
            "f": 4,
            "i": 1,
            "h": 4,
            "k": 5,
            "j": 8,
            "m": 3,
            "l": 1,
            "o": 1,
            "n": 1,
            "q": 10,
            "p": 3,
            "s": 1,
            "r": 1,
            "u": 1,
            "t": 1,
            "w": 4,
            "v": 4,
            "y": 4,
            "x": 8,
            "z": 10
        }
    }

    score() {
        if (typeof this._word != 'string') {
            return 0
        } else {
            for (let i = 0; i < this._split.length; i++) {
                if (this._alphabetScores[this._split[i]]) {
                    let letterScore = this._alphabetScores[this._split[i]]
                    this._points += letterScore
                }
            }
            return this._points
        }
    }
}

module.exports = Scrabble