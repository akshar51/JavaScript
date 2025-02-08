// FOR LOOP
// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// WHILE LOOP

// let i=1;
// while(i<=5){
//     console.log(i)
// }

// DO WHILE LOOP


//INFINITE LOOP
// let j=6;
// do{
//     console.log(j);
// }while(j!=5);

// NOT INFINITE LOOP
// let k=5;
// do{
//     console.log(k);
// }while(k!=5);


// 11) FACTORIAL OF NUMBER

// let num = 5 ;
// let fact = 1 ;

// for(let i=1;i<=num;i++){
//     fact=fact*i;
// }
// console.log(`Factorial is : ${fact}`);


// 12) FIND THE SUM OF DIGIT

// let num = 1234;
// let sum = 0;

// while(num>0){
//     sum = sum + num % 10;
//     num = Math.floor(num/10);
// }
// console.log(`Sum of all digit is : ${sum}`)

// 13) REVERSE A NUMBER
// let num = 1234;
// let rev = 0;

// while(num > 0){
//     rev = rev *10 + (num % 10);
//     num = Math.floor(num / 10);
// }

// console.log(`Reversed number is : ${rev}`)

// 14) CHECK IF NUMBER IS PRIME

// let num = 7;
// let isPrime = true;
//  for(let i=2;i<=Math.sqrt(num);i++){
//     if(num % i === 0){
//         isPrime = false;
//         break;
//     }
//  }
//  console.log(`${num} is prime ${isPrime}`)

 // 15) FIBONACCI SERIES UPTO 10 TERM

//  let a = 0;
//  let b = 1;
//  let temp;
//  console.log(a);
//  console.log(b);
 
//  for(let i=2;i<10;i++){
//     temp = a + b;
//     console.log(temp)
//     a = b;
//     b = temp;
//  }

// 16) FIND LARGEST DIGIT IN NUMBER

// let num = 8375;
// let maxDigit = 0;

// while(num > 0){
//     let digit = num % 10;
//     if(digit > maxDigit){
//         maxDigit = digit;
//     }
//     num = Math.floor(num/10);
    
// }
// console.log(`Largest digit is : ${maxDigit}`)

// 17) CALCUALTE POWER OF NUMBER

// let base = 2;
// let exp = 3;
// let result = 1;

// for(let i=0;i<exp;i++){
//     result = result * base;
// }
// console.log(`${base} raised to ${exp} = ${result}`)

// 18) CHECK IF NUMBER IS ARMSTRONG NUMBER

// let num = 153;
// let sum = 0;
// let temp = num;

// while(temp>0){
//     let digit = temp % 10;
//     sum = sum + digit**3;
//     temp = Math.floor(temp/10);
// }
// console.log(`${num} is armstrong ${sum===num}`)

// 19) GREATEST COMMON DIVISOR (GCD) OF TWO NUMBER

let a = 48;
let b = 18;

while(b!==0){
    let temp = b;
    b = a % b;
    a = temp;
}
console.log(`GCD ${a}`);
