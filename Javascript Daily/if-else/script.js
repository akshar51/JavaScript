// 1) NUMBER IS POSITIVE
// let num=7;
// if(num>0){
//     console.log(` ${num} is positive..`);
// }

// 2) NUMBER IS EVEN OR ODD
// let num=5;
// if(num%2===0){
//     console.log(`${num} is even..`)
// }
// else{
//     console.log(`${num} is odd..`)
// }

// 3) DIVISIBLE BY 3 & 5
// let num=25;
// if(num%3==0){
//     if(num%5==0){
//         console.log(`${num} is divisible by both 3 and 5.`)
//     }
//     else{
//         console.log(`${num} is divisible by 3 but not by 5.`)
//     }
// }
// else{
//     console.log(`${num} is not divisible by 3.`)
// }

// 4) GRADE BASED ON SCORE
// let score=85;
// if(score>=90){
//     console.log(`Grade : A`)
// }
// else if(score>=80){
//     console.log(`Grade : B`)
// }
// else if(score>=70){
//     console.log(`Grade : C`)
// }
// else if(score>=60){
//     console.log(`Grade : D`)
// }
// else{
//     console.log(`Grade : F`)
// }

// 5) LOGIN SIMULATION

// let username="admin"
// let password="12345"

// if(username==="admin"){
//     if(password==="12345"){
//         console.log(`Login successfull !`)
//     }
//     else{
//         console.log(`Incorrect password.`)
//     }
// }
// else{
//     console.log(`Unknown username.`)
// }

// 6) TEMPERATURE CLASSIFICATION
// let temperature = 28;
//  if(temperature > 30){
//     console.log(`Hot outside`)
//  }
//  else if(temperature>=20){
//     console.log(`Warm outside`)
//  }
//  else{
//     console.log(`Cold outside`)
//  }

// 7) DAY OF WEEK 
// let dayNumber=4;
// let dayName=""

// if(dayNumber===1){
//     dayName = "Monday"
// }
// else if(dayNumber===2){
//     dayName = "Tuesday"
// }
// else if(dayNumber===3){
//     dayName = "Wednesday"
// }
// else if(dayNumber===4){
//     dayName = "Thursday"
// }
// else if(dayNumber===5){
//     dayName = "Friday"
// }
// else if(dayNumber===6){
//     dayName = "Saturday"
// }
// else if(dayNumber===7){
//     dayName = "Sunday"
// }
// else{
//     dayName = "Invalid day"
// }

// console.log(`Day ${dayNumber} is ${dayName}.`)

// 8) DISCOUNT ELIGIBILITY

// let isMember = true;
// let spending = 150;

// if(isMember){
//     if(spending > 100){
//         console.log(`You get a 20% discount.`)
//     }
//     else{
//         console.log(`You get a 10% discount.`)
//     }
// }
// else{
//     console.log(`No discount available for non-member`)
// }


// 9) CHECK STRING IS EMPTY 
//  let str = "";
//  if(str===""){
//     console.log(`String is empty.`)
//  }
//  else{
//     console.log(`String is not empty.`)
//  }

// 10) LEAP YEAR 
// let year = 2024;

// if(( year % 4 ===0 && year % 100 !==0) || (year % 400 ===0)){
//     console.log(`${year} is a leap year.`)
// }
// else{
//     console.log(`${year} is not a leap year.`)
// }

// 11) TWO NUMBER ARE BOTH POSITVE 
// let a = 5
// let b = -3

// if (a > 0) {
//     if (b > 0) {
//         console.log(`Both numbers are positive.`);
//     } else {
//         console.log(`a is positive, but b is not positive.`);
//     }
// }
// else {
//     console.log(`a is not positive.`);
// }

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