function Student(name, age) {

    this.name = name;

    this.age = age;

    this.technologies = [];

    this.status = 'Junior';

    this.setTechnologies = function(technologies) {

        this.technologies = [

            ...this.technologies,

            ...technologies,

        ];

    }

    this.setNewStatus = function(newStatus) {

        this.status = newStatus;

    }

}

const student = new Student('Maxim', 20);

student.setTechnologies(['HTML', 'CSS', 'JavaScript']);

student.setNewStatus('Middle');

console.log(student);


class Student_2 {
    technologies = [];
    status = 'Junior';
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies,
        ];
    }
    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student_2 = new Student_2('Maxim', 20);
student_2.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student_2.setNewStatus('Middle');
console.log(student_2);
console.log(student_2.technologies);


class Student_3 {
    #technologies = [];
    #status = 'Junior';
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set technologies(technologies) {
        this.#technologies = [
            ...this.#technologies,
            ...technologies,
        ];
    }
    get technologies() {
        return this.#technologies;
    }
    set status(newStatus) {
        this.#status = newStatus;
    }
    get status() {
        return this.#status;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

const student_3 = new Student_3('Maxim', 20);
student_3.technologies = ['HTML', 'CSS', 'JavaScript'];
student_3.status = 'Middle';
console.log(student_3.getName()); // Maxim
console.log(student_3.getAge()); // 20
console.log(student_3.technologies); // ['HTML'…[omitted]
console.log(student_3.status); // Middle
console.log(student_3);