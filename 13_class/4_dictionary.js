class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }
    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {word, description};
        }
    }
    remove(key) {
        if (key in this.words) {
            delete this.words[key];
        }
    }
    get(key) {
        if (key in this.words) {
            return this.words[key];
        }
    }
    showAllWords() {
        for (let prop of Object.values(this.words)) {
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