let E_name = "Akshar"
let B_salary = prompt("Enter salary : ")
let role = "Employee"
let exp = 2

let bonus_amount = B_salary>=25000 && exp>=5? newSalary=B_salary*0.5
        :B_salary>=20000 && exp>=3? newSalary=B_salary*0.35
        :B_salary>=15000 && exp>=2? newSalary=B_salary*0.30
        :newSalary=B_salary*0.1

console.log(`Employee name is : ${E_name}`)
console.log(`Salary is : ${B_salary}`)
console.log(`Role is : ${role}`)
console.log(`Experience is : ${exp}`)
console.log(`Bonus on salary of ${B_salary} is ${bonus_amount}`);