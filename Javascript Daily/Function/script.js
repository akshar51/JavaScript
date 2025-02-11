// // FUNCTION
// function functionName(){
//     console.log(` NORMAL FUNCTION`)
// }
// functionName();

// // FUNCTION - 2
// let print = function(){
//     console.log(`FUNCTION STORING IN VARIABLE`)
// }
// print();

// // FUNCTION - 3

// let print2 = ()=>{
//     console.log(`ARROW FUNCTION`)
// }
// print2();
// // FUNCTION - 4 
// (function(){
//     console.log(`IIEF FUNCTION`)
// })();


// FIBONACCI SERIES

let f,f1 = 0,f2 = 1;
let i=1;
let str=""
while(i<=5){
    f = f1;
    f1 = f+f2;
    f2 = f;
    console.log(f)
    i++;
}


// FACTORIAL

function fact(value){
    let f1;
    if(value<=1){
        return 1;
    }
    else{
        f1 = fact(value - 1);
    }
    console.log(value+"*"+fact);
    return value * fact;
}
console.log(fact(5));
