// 1) NUMBER IS POSITIVE
let num=7;
if(num>0){
    console.log(` ${num} is positive..`);
}

// 2) NUMBER IS EVEN OR ODD
let num=5;
if(num%2===0){
    console.log(`${num} is even..`)
}
else{
    console.log(`${num} is odd..`)
}

// 3) DIVISIBLE BY 3 & 5
let num=25;
if(num%3==0){
    if(num%5==0){
        console.log(`${num} is divisible by both 3 and 5.`)
    }
    else{
        console.log(`${num} is divisible by 3 but not by 5.`)
    }
}
else{
    console.log(`${num} is not divisible by 3.`)
}

// 4) GRADE BASED ON SCORE
let score=85;
if(score>=90){
    console.log(`Grade : A`)
}
else if(score>=80){
    console.log(`Grade : B`)
}
else if(score>=70){
    console.log(`Grade : C`)
}
else if(score>=60){
    console.log(`Grade : D`)
}
else{
    console.log(`Grade : F`)
}

// 5) LOGIN SIMULATION

let username="admin"
let password="12345"

if(username==="admin"){
    if(password==="12345"){
        console.log(`Login successfull !`)
    }
    else{
        console.log(`Incorrect password.`)
    }
}
else{
    console.log(`Unknown username.`)
}

// 6) TEMPERATURE CLASSIFICATION
let temperature = 28;
 if(temperature > 30){
    console.log(`Hot outside`)
 }
 else if(temperature>=20){
    console.log(`Warm outside`)
 }
 else{
    console.log(`Cold outside`)
 }

// 7) DAY OF WEEK 
let dayNumber=4;
let dayName=""

if(dayNumber===1){
    dayName = "Monday"
}
else if(dayNumber===2){
    dayName = "Tuesday"
}
else if(dayNumber===3){
    dayName = "Wednesday"
}
else if(dayNumber===4){
    dayName = "Thursday"
}
else if(dayNumber===5){
    dayName = "Friday"
}
else if(dayNumber===6){
    dayName = "Saturday"
}
else if(dayNumber===7){
    dayName = "Sunday"
}
else{
    dayName = "Invalid day"
}

console.log(`Day ${dayNumber} is ${dayName}.`)

// 8) DISCOUNT ELIGIBILITY

let isMember = true;
let spending = 150;

if(isMember){
    if(spending > 100){
        console.log(`You get a 20% discount.`)
    }
    else{
        console.log(`You get a 10% discount.`)
    }
}
else{
    console.log(`No discount available for non-member`)
}


// 9) CHECK STRING IS EMPTY 
 let str = "";
 if(str===""){
    console.log(`String is empty.`)
 }
 else{
    console.log(`String is not empty.`)
 }

// 10) LEAP YEAR 
let year = 2024;

if(( year % 4 ===0 && year % 100 !==0) || (year % 400 ===0)){
    console.log(`${year} is a leap year.`)
}
else{
    console.log(`${year} is not a leap year.`)
}

// 11) TWO NUMBER ARE BOTH POSITVE 
let a = 5
let b = -3

if (a > 0) {
    if (b > 0) {
        console.log(`Both numbers are positive.`);
    } else {
        console.log(`a is positive, but b is not positive.`);
    }
}
else {
    console.log(`a is not positive.`);
}

// 12) SEASON BASED ON MONTH

let month = 11;
let season = ""

if(month === 12 || month === 1 || month === 2){
    season = "Winter"
}
else if( month >= 3 && month <= 5){
    season = "Spring"
}
else if(month >= 6 && month <= 8){
    season = "Summer"
}
else if(month >= 9 && month <= 11){
    season = "Autumn"
}
else{
    season = "Invalid month"
}

console.log(`${month} month is in ${season}.`)

// 13) VOTING ELIGIBILITY WITH CITIZENSHIP

let personAge = 20
let isCitizen = true

if (personAge >= 18){
    if(isCitizen){
        console.log(`You are eligible to vote.`)
    }
    else{
        console.log(`You must be a citizen to vote.`)
    }
}
else{
    console.log(`You are not old enough to vote`)
}

// 14) PASSWORD LENGTH CHECK

let passwordInput = "secret123"

if(passwordInput.length >= 8){
    console.log(`Password is acceptable.`)
}
else{
    console.log(`Password must be at least 8 characters long.`)
}

// 15) MOVIE RATING ELIGIBILTY

let viewerAge = 15;
 if(viewerAge >= 18){
    console.log(`You can watch this movie`)
 }
 else{
    console.log(`You are too young to watch this movie`)
 }

// 16) SIMPLE PRIME NUMBER

let primeCandidate = 17
let isPrime = true


if (primeCandidate <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i < primeCandidate; i++) {
        if (primeCandidate % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${primeCandidate} is a prime number.`);
} 
else{
    console.log(`${primeCandidate} is not a prime number.`);
}

// 18) AREA BASED ON SHAPE TYPE

let shape = "circle"
let area = 0

if(shape === "circle"){
    let radius = 5
    area = Math.PI * radius * radius
    console.log(`Area of circle is ${area.toFixed(2)}`)
}
else if( shape === "rectangle"){
    let length=10
    let width = 4
    area = length * width
    console.log(`Area of rectangle is ${area}`)
}
else{
    console.log(`Shape not recognized.`)
}

// 19) USER LOGIN VERIFICATION
let inputUsername = "user1"
let inputPassword = "pass123"

if(inputUsername === "user1" && inputPassword === "pass123"){
    console.log(`User login succesful.`)
}
else{
    console.log(`Invalid username or password.`)
}

// 20) MULTIPLE CONDITION CHECK
let customerAge = 30
let isMemberStatus = true
let purchaseAmount = 250

if(customerAge >=25 && isMemberStatus && purchaseAmount >= 200){
    console.log(`Congratulation ! You qualify for our special offer.`)
}
else{
    console.log(`Sorry , you do not qualify for the special offer.`)
}