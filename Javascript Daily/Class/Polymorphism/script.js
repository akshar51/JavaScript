

// --- EXAMPLE -1 ----//
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

    // let obj = new Car();
    // obj.wheel();

    // let obj = [new Vehicle(),new Bike(),new Car()]
    // obj.forEach((e)=>e.wheel());


//------- EXAMPLE-2 ---------//
//     class Animal {
//         speak() {
//             console.log("Animal makes a sound");
//         }
//         eat(){
//             console.log("Animal eat...")
//         }
//     }

//     class Dog extends Animal {
//         speak() {
//             console.log("Dog barks");
//         }
//     }

//     class Cat extends Animal {
//         speak() {
//             console.log("Cat meows");
//         }
//     }

// let obj = new Animal()
// obj.speak()

// let obj1 = new Dog()
// obj1.speak()
// obj1.eat()

// let obj2 = new Cat()
// obj2.speak()

// let ani = [new Animal(),new Dog(),new Cat()]
// ani.forEach((e)=>e.speak())

//------------------ EXAMPLE-3 -------------//

// class TV{
//     remote(){
//         console.log("TV remote")
//     }
// }

// class AC extends TV{
//     remote(){
//         console.log("AC remote")
//     }
// }

// class Fan extends AC{
//     remote(){
//         console.log("Fan remote")
//     }
// }

// let obje = [new TV(),new AC(),new Fan()]
// obje.forEach((e)=>e.remote())

// let obj1 = new TV();
// obj1.remote();

// let obj2 = new AC();
// obj2.remote();

// let obj3 = new Fan();
// obj3.remote();

//------------- Example-4 ----------------//
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
  
//   let animals = [new Dog(), new Cat()];
//   animals.forEach(animal => animal.speak());
let obj = new Cat();
let obj1 = new Animal();

obj.speak()
obj1.speak()
 
  