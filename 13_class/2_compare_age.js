class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(person) {
        return this.age >= person.age ? `${this.name} is older than ${person.name}`
            : `${this.name} is younger than ${person.name}`;
    }
}

const person1 = new Person('Maxim', 24);
const person2 = new Person('Svetlana', 36);
const person3 = new Person('Irina', 23);

console.log(person1.compareAge(person2)); // Maxim is younger than Svetlana
console.log(person2.compareAge(person3)); // Svetlana is older than Irina
console.log(person3.compareAge(person1)); // Irina is younger than Maxim