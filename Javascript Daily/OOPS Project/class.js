
//------------ 'this' keyword -------------//
class Student{
    constructor(name,age,course){
        this.e_name = '';
        this.age = 0;
        this.course = '';
    }

    set(name,age,course){
        this.e_name = name;
        this.age = age;
        this.course = course;
    }

    get(){
        console.log(`Name : ${this.e_name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Course : ${this.course}`);
    }
}

let obj = new Student();
obj.set("Akshar",24,"Full Stack")
obj.get()
