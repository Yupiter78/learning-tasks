 class MyClass {
  name = 'default value';

  constructor(name = this.name) {
      this.name = name;
  }
}

const myClass1 = new MyClass();
console.log(myClass1); //MyClass {name: 'default value'}
const myClass2 = new MyClass('new value');
console.log(myClass2);// MyClass {name: 'new value'}

 class MyClass_2 {
     name = 'default value';

     constructor(name) {
         this.name = name || this.name;
     }
 }

 const myClass3 = new MyClass_2();
 console.log(myClass3); //MyClass_2 {name: 'default value'}
 const myClass4 = new MyClass_2('new value');
 console.log(myClass4);// MyClass_2 {name: 'new value'}


 class MyClass_3 {
     name = 'default value';

     constructor(name) {
         if (name) {
             this.name = name;
         }
     }
 }

 const myClass5 = new MyClass_3();
 console.log(myClass5); //MyClass_3 {name: 'default value'}
 const myClass6 = new MyClass_3('new value');
 console.log(myClass6);// MyClass_3 {name: 'new value'}