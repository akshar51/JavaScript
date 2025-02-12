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


// 1) PRINT 1 TO 10 USING FOR LOOP

let str='';
for(let i=1;i<=10;i++){
    str += i+' , ';
}
console.log(str);

// 2) PRINT 1 TO 10 USING WHILE LOOP

let str='';
let i=1;
while(i<=10){
    str += i+' , ';
    i++;
}
console.log(str);

// 3) PRINT 1 TO 10 USING DO-WHILE LOOP

let i=1;
do{
    console.log(i);
    i++;
}while(i<=10);

// 4) SUM OF FIRST 10 NATURAL NUMBER

let ans=0;
for(i=1;i<=10;i++){
    ans+=i;
}
console.log(`Answer:${ans}`);


// 5) SUM OF FIRST 10 NATURAL NUMBER

let ans=0;
let i=1;
while(i<=10){
    ans+=i;
    i++;
}
console.log(`Answer:${ans}`);

// 6) SUM OF FIRST 10 NATURAL NUMBER

let ans = 0;
let i = 1;
do {
 ans += i;
 i++;
} while (i <= 10);
console.log(`Answer:${ans}`);

// 7) PRINT EVEN FROM 1 TO 20

let str='';
for(let i=2;i<=20;i+=2){
    str+=i +',';
}
console.log(str);

// 8) PRINT ODD FROM 1 TO 20
let str='';
for(let i=1;i<=20;i+=2){
    str+=i +',';
}
console.log(str);

// 9) PRINT TABLE OF 5
for(let i=1;i<=10;i++){
    console.log("5*"+i + "=" + 5*i);
}

// 10) REVERSE COUNTDOWN FROM 10 TO 1
let i=10;
let str='';
while(i>=1){
    str += i+' , ';
    i--; 
}console.log(str);

// 11) FACTORIAL OF NUMBER

let num = 5 ;
let fact = 1 ;

for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(`Factorial is : ${fact}`);


// 12) FIND THE SUM OF DIGIT

let num = 1234;
let sum = 0;

while(num>0){
    sum = sum + num % 10;
    num = Math.floor(num/10);
}
console.log(`Sum of all digit is : ${sum}`)

// 13) REVERSE A NUMBER
let num = 1234;
let rev = 0;

while(num > 0){
    rev = rev *10 + (num % 10);
    num = Math.floor(num / 10);
}

console.log(`Reversed number is : ${rev}`)

// 14) CHECK IF NUMBER IS PRIME

let num = 7;
let isPrime = true;
 for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i === 0){
        isPrime = false;
        break;
    }
 }
 console.log(`${num} is prime ${isPrime}`)

 // 15) FIBONACCI SERIES UPTO 10 TERM

 let a = 0;
 let b = 1;
 let temp;
 console.log(a);
 console.log(b);
 
 for(let i=2;i<10;i++){
    temp = a + b;
    console.log(temp)
    a = b;
    b = temp;
 }

// 16) FIND LARGEST DIGIT IN NUMBER

let num = 8375;
let maxDigit = 0;

while(num > 0){
    let digit = num % 10;
    if(digit > maxDigit){
        maxDigit = digit;
    }
    num = Math.floor(num/10);
    
}
console.log(`Largest digit is : ${maxDigit}`)

// 17) CALCUALTE POWER OF NUMBER

let base = 2;
let exp = 3;
let result = 1;

for(let i=0;i<exp;i++){
    result = result * base;
}
console.log(`${base} raised to ${exp} = ${result}`)

// 18) CHECK IF NUMBER IS ARMSTRONG NUMBER

let num = 153;
let sum = 0;
let temp = num;

while(temp>0){
    let digit = temp % 10;
    sum = sum + digit**3;
    temp = Math.floor(temp/10);
}
console.log(`${num} is armstrong ${sum===num}`)

// 19) GREATEST COMMON DIVISOR (GCD) OF TWO NUMBER

let a = 48;
let b = 18;

while(b!==0){
    let temp = b;
    b = a % b;
    a = temp;
}
console.log(`GCD ${a}`);

// 20) LEAST COMMON MULTIPLE (LCM) OF TWO NUMBER

let a = 12;
let b = 15;
let lcm = (a*b)/gcd(a,b);

function gcd(x,y){
    while(y){
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}
console.log(`LCM : ${lcm}`)

// 21) CHECK IF NUMBER IS PALINDROME

let num = 11011;
let rev = 0;
let newNumber = num;
while(num > 0){
    rev = rev *10 + (num % 10);
    num = Math.floor(num / 10);
}

if(newNumber === rev){
    console.log(`Palindrome`);
}
else{
    console.log(`Not`);
}

// 23)SUM OF FIRST N PRIME NUMBER

let sum = 0;
let end = prompt("Ending number : ");

for(let num = 2;num<=end;num++){
    let isPrime = true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    } 
    if(isPrime){
        sum+=num;
    }
}
console.log(`Sum of prime number from 1 to ${end} : ${sum}`)

// 26) PRINT ALL PRIME NUMBER IN RANGE

let start = prompt("Starting number : ");
let end = prompt("Ending number : ");

for(let num = start;num<=end;num++){
    let isPrime = true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(num)
    }
}

// 27) PRINT HOLLOW SQUARE PATTERN USING LOOP

let n = parseInt(prompt("Enter the size of the square:"));

for (let i = 0; i < n; i++) { 
    let row = "";
    for (let j = 0; j < n; j++) { 
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
            row += "* ";
        } else {
            row += "  "; 
        }
    }
    console.log(row); 
}

// 30) FIND SUM OF ALL ODD DIGIT IN NUMBER

let num = 13579;
let sum = 0;

while(num>0){
    let newNum = num % 10
    if(newNum % 2 !=0){
        sum = sum + newNum;
    }
    num = Math.floor(num/10);
}
console.log(`Sum of all odd digit is : ${sum}`)