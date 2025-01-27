// console.log("Hello");
// console.log("Hello 2");

// let a=12;
// let b=a;
// b=10;
// console.log(b);



// FUNCTION IN ES6
// let add = (a,b)=>{
//     return a+b;
// }

// console.log(add(50,10));

//TEMPLATE LITERAL
// let name="Hello";
// console.log(`Hii ,${name}`);


//CLASSES
class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello,${this.name}`);
    }
}

let p1 = new Person("Rahul");
p1.greet();