
// ---------- EXAMPLE-1 ------------//
class Vehicle{
    wheel(){
        console.log("Engine..")
    }
}

class Bike extends Vehicle{
    wheel(){
        console.log("Piston Engine...");
    }
}

class Car extends Vehicle{
    wheel(){
        console.log("V8 Engine...");
    }
}
let obj = [new Vehicle,new Bike,new Car] ;
obj.forEach(ele => ele.wheel())
console.log("\n")

// ----------- EXAMPLE-2 -----------//
class Animal {
    speak() {
      console.log("Animal makes a sound");
    }
}
  
class Dog extends Animal {
    speak() {
      console.log("Dog barks");
    }
}
  
class Cat extends Animal {
    speak() {
      console.log("Cat meows");
    }
}
let ob = new Animal
let objs = new Cat();
let obj1 = new Animal();
ob.speak()
objs.speak()
obj1.speak()
console.log("\n")


// ------- EXAMPLE-3 ---------------//
class TV{
    remote(){
        console.log("TV remote")
    }
}

class AC extends TV{
    remote(){
        console.log("AC remote")
    }
}

class Fan extends AC{
    remote(){
        console.log("Fan remote")
    }
}

let obje = [new TV(),new AC(),new Fan()]
obje.forEach((e)=>e.remote())

let objs1 = new TV();
objs1.remote();

let obj2 = new AC();
obj2.remote();

let obj3 = new Fan();
obj3.remote();
