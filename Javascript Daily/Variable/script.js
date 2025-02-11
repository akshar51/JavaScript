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



// let sum = 0;
// let end = prompt("Ending number : ");

// for(let num = 2;num<=end;num++){
//     let isPrime = true;
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num % i === 0){
//             isPrime = false;
//             break;
//         }
//     } 
//     if(isPrime){
//         sum+=num;
//     }
// }
// console.log(`Sum of prime number from 1 to ${end} : ${sum}`)

// let start = prompt("Starting number : ");
// let end = prompt("Ending number : ");

// for(let num = start;num<=end;num++){
//     let isPrime = true;
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(num)
//     }
// }

let n = parseInt(prompt("Enter the size of the square:"));

for (let i = 0; i < n; i++) { // Loop for rows
    let row = "";
    for (let j = 0; j < n; j++) { // Loop for columns
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
            row += "* ";
        } else {
            row += "  "; // Print space for the hollow part
        }
    }
    console.log(row); // Print each row
}
