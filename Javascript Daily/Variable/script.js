// var 
// console.log(age);
// var age = 12;
// console.log(age)

// let 
// let name = "akshar";
// console.log(name);

// const
// const age=25;
// age=30;
// console.log(age)

// DATA TYPE
// 1) NULL
// let age=null;
// console.log(age);

// 2)Undefined
// let studentName;
// console.log(studentName);

// Object

// let obj={
//     student:"aks",
//     age:33,
// }
// console.log(obj);

// OPERATOR
// 1) ARITHMETIC OPERATOR

// let a=10;
// let b=2;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**3);// EXPONENTIAL-means power


let num = 11011;
let rev = 0;
let newNumber = num;
while(num > 0){
    rev = rev *10 + (num % 10);
    num = Math.floor(num / 10);
}

if(newNumber === rev){
    console.log(`Palindrome`)
}
else{
    console.log(`Not`)
}
// if(num1 === rev){
//     console.log(`Palindrome`)
// }
// else{
//     console.log(`Not`)
// }