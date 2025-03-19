
//----------------- EXAMPLE-1 ------------//
class Employee{
    constructor(){
        this.e_name = "";
        this.salary = 0;
        this.age = 0;
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
    constructor(name,salary,age,hra,ma,pf){
        super();
        this.setempInfo(name,salary,age)
        this.grossSalary = this.salary + hra + ma
        this.netSalary = this.grossSalary - pf
    }

    getInfo(){
        this.getempInfo();
        console.log(`Employee grossSalary is ${this.grossSalary} and netSalary is ${this.netSalary}`);
    }
}

let obj = new Salary("Ramu",45000,20,2500,2500,5000);
obj.getInfo();