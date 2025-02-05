let B_salary=10000;
let HRA=B_salary*50/100;
let MA=B_salary*8/100;
let DA=B_salary*8/100;
let TA=B_salary*8/100;
let Pf=B_salary*12/100;
let PT=200;
let TDS=B_salary*10/100;

let gross= HRA + MA + DA + TA + PT + Pf + TDS;
let Net_salary=B_salary-gross;

console.log(`Salary is : ${B_salary}`);
console.log(`House rent allowance is :${HRA}`)
console.log(`Medical allowance is :${MA}`);
console.log(`Dearness allowance is:${DA}`);
console.log(`Traveling allowance is :${TA}`);
console.log(`Provident fund :${Pf}`);
console.log(`Professional tax is:${PT}`);
console.log(`Net salary is :${Net_salary}`);