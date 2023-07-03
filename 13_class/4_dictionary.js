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
    remove(word) {
        if (this.words[word]) {
            delete this.words[word];
        }
    }
    get(word) {
        if (this.words[word]) {
            return this.words[word];
        }
    }
    showAllWords() {
        for (let word of Object.keys(this.words)) {
            console.log(`${this.words[word].word} - ${this.words[word].description}`)
        }
    }
}

const dictionary = new Dictionary('Explanatory Dictionary');
dictionary.add('JavaScript', 'popular programming language');
dictionary.add('Web-developer', 'A person who creates new services and sites or maintains and complements existing ones');

console.log(dictionary);

dictionary.remove('JavaScript');
dictionary.showAllWords();
// Web-developer - A person who creates new services and sites or maintains and complements existing ones