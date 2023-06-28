const dog = {
    name: "Charli",
    type: "dog",
    makeSound() {
        return "Woof - Woof";
    }
}
const bird = {
    name: "Jack",
    type: "sparrow",
    makeSound() {
        return "chirrup";
    }
}

function makeDomestic(isDomestic) {
    console.log(`a ${this.type} named ${this.name} says ${this.makeSound()} `);
    return {...this, isDomestic: isDomestic};
}

console.log(makeDomestic.bind(dog)(true));

console.log(makeDomestic.call(bird, false));
console.log(makeDomestic.apply(bird, [false]));

