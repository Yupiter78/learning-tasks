class Dictionary {
    _name;
    _words
    constructor(name) {
        this._name = name;
        this._words = {};
    }
    add(word, description) {
        if (!(word in this._words)) {
            this._words[word] = {word, description};
        }
    }
    remove(key) {
        if (key in this._words) {
            delete this._words[key];
        }
    }
    get(key) {
        if (key in this._words) {
            return this._words[key];
        }
    }
    showAllWords() {
        for (let prop of Object.values(this._words)) {
            console.log(`${prop.word} - ${prop.description}`);
        }
    }
}

const dictionary = new Dictionary('Explanatory Dictionary');
dictionary.add('JavaScript', 'popular programming language');
dictionary.add('Web-developer', 'A person who creates new services and sites or maintains and complements existing ones');

console.log(dictionary);
console.log(dictionary.get("JavaScript"));

dictionary.remove('JavaScript');
dictionary.showAllWords();
// Web-developer - A person who creates new services and sites or maintains and complements existing ones

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }
    add(word, description) {
        super.add(word, description);
        this._words[word] = {...this._words[word], isDifficult: true};
    }
}

const hardWord = new HardWordsDictionary("hard word");

hardWord.add('amateur', 'One who engages in science or art without special training, possessing only superficial knowledge.');
hardWord.add('neologism', 'A new word or expression, as well as a new meaning for an old word.');
hardWord.add('quantum', 'An indivisible part of any quantity in physics.');

hardWord.remove('neologism');
hardWord.showAllWords();
console.log(hardWord);