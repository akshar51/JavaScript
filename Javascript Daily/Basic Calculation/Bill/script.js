let name = "Ghee";
let price = 800;
let qty = 2;
let total=price*qty;
let discount1=0.15;
let discount2=0.1;
let discount3=0.08;
let newTotal;

let netTotal = total>=1500?newTotal=total-(total*discount1) : 
            total>=1000?newTotal=total-(total*discount2) : 
            total>=800?newTotal=total-(total*discount3) : 
            total

console.log(`Product is : ${name}`);
console.log(`Product price is : ${price}`);
console.log(`Quantity is :${qty}`);
console.log(`Total is : ${total}`);
console.log(`Net total after discount : ${netTotal}`);
