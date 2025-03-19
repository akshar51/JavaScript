
//----------- EXAMPLE-1 -------------//
class Employee{
    constructor(name,age,salary){
        console.log(this.name = name);
        console.log(this.age = age);
        console.log(this.salary = salary);
        console.log("\n");
    }
}
class Manager extends Employee{
    constructor(name,age,salary){
        super(name,age,salary)
    }
}
let objs = new Manager("Tony",18,25000);


// --------- EXAMPLE-2 -------------//
class A{
    constructor(name){
        this.name = name;
        console.log("Class A : ",this.name);
    }
}
class B extends A{
    constructor(name){
        super(name)
        this.s_name = "Shyam";
        console.log("Class B : ",this.s_name)
        console.log("\n");
        
    }
}
let obj = new A("ramu");
let obj1 = new B("ramu");



//----------- EXAMPLE-3 --------------//
class Employees{
    constructor(name,salary){
        console.log(this.name = name)
        console.log(this.salary = salary)
    }
}

let obj3 = new Employees("Ram",25000);