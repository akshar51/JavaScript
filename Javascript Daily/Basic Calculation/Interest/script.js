let P_amount = prompt("Enter principle amount : ");
let N_year = prompt("Enter number of year : ");
let R_rate1=12;
let R_rate2=9;
let R_rate3=6;
let R_rate4=3.5;


let interest = P_amount>=500000?(P_amount * R_rate1 * N_year)/100
        :P_amount>=350000?(P_amount * R_rate2 * N_year)/100
        :P_amount>=75000?(P_amount * R_rate3 * N_year)/100
        :(P_amount * R_rate4 * N_year)/100 

console.log(`Principle amount is :${P_amount}`);
console.log(`Number of year is : ${N_year}`);
console.log(`Interest on ${P_amount} is : ${interest}`);

