class Dictionary {
    #name;
    #words
    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    }

    set setMainName(name) {
        this.#name = name;
    }

    get allWords() {
        return this.#words;
    }
    add(word, description) {
        if (!(word in this.#words)) {
            this.#words[word] = {word, description};
            console.log("this.#words:", this.#words);
        }
    }

    addNewWord(word, description) {
        this.add(word, description);
    }
    remove(key) {
        if (key in this.#words) {
            delete this.#words[key];
        }
    }
    get(key) {
        if (key in this.#words) {
            return this.#words[key];
        }
    }
    showAllWords() {
        for (let prop of Object.values(this.#words)) {
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
        this.allWords[word] = {...this.allWords[word], isDifficult: true};
    }
}

const hardWord = new HardWordsDictionary("Hard words");

hardWord.add('amateur', 'One who engages in science or art without special training, possessing only superficial knowledge.');
hardWord.add('neologism', 'A new word or expression, as well as a new meaning for an old word.');
hardWord.add('quantum', 'An indivisible part of any quantity in physics.');

hardWord.remove('neologism');
hardWord.showAllWords();
console.log("hardWord:", hardWord);
console.log("Object.keys(hardWord):", Object.keys(hardWord));

console.log(hardWord.mainName); // Hard words
hardWord.setMainName = 'Новый Словарь';
console.log(hardWord.mainName); // Новый Словарь
console.log(hardWord.allWords); // выводит объект в котором есть слова дилетант и квант
hardWord.addNewWord("test", "Who is?");
console.log(hardWord.allWords);

console.log("Object.keys(hardWord):", Object.keys(hardWord));