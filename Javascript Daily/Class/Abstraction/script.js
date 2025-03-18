// ---- EXAMPLE-1 ----//
    // class Vehicle{
    //     wheel(){
    //         console.log("Engine...")
    //     }
    // }

    // class Bike extends Vehicle{
    //     wheel(){
    //         console.log("Piston Engine...")
    //     }
    // }

    // class Car extends Vehicle{
    //     wheel(){
    //         console.log("V8 Engine...")
    //     }
    // }

    // let obj = new Vehicle();
    // obj.wheel();

    // let obj1 = new Bike();
    // obj1.wheel();

    // let obj2 = new Car();
    // obj2.wheel();


//------ Example-2 --------------//
class Employee{
    constructor(){
        this.e_name = "";
        this.salary = "";
        this.age = "";
    }

    setempInfo(name,salary,age){
        this.e_name = name;
        this.salary = salary;
        this.age = age;
    }

    getempInfo(){
        console.log(`Employee name is ${this.e_name}, salary is ${this.salary},age is ${this.age}`);
    }
}

class Salary extends Employee{
    constructor(){
        super()
        this.grossSalary = "";
        this.netSalary = "";
    }

    setInfo(name,salary,age,hra,ma,pf){
        this.setempInfo(name,salary,age)
        this.grossSalary = hra + ma - pf
        this.netSalary = this.grossSalary + this.salary
    }

    getInfo(){
        super.getempInfo();
        console.log(`Employee grossSalary is ${this.grossSalary} and netSalary is ${this.netSalary}`);
    }
}

let obj = new Salary("Ramu",45000,20,2500,2500,5000);
obj.getInfo();