// let main = document.querySelector("span")
// let main1 =document.querySelector(".main")
// console.dir(main1.childNodes[1])
// main1.childNodes[1].style.color="purple";
// main.style.color = "red"
// main.style.backgroundColor = "green"
// main.style.display = 'block'

// let p = document.querySelector(".main p")
// // console.log(p.innerHTML);

// p.innerHTML += " with Akshar"

let num1 = document.getElementById("num1");
num1.addEventListener("click",function(){
    document.getElementById("screen").innerHTML += 1;
    num1=1;

})

let num2 = document.getElementById("num2");
num2.addEventListener("click",function(){
    document.getElementById("screen").innerHTML += 2;
    num2=2;
    
})

let num3 = document.getElementById("num3");
num3.addEventListener("click",function(){
    document.getElementById("screen").innerHTML += 3;
    num3=3;
   
})

let add = 0;
let sub = 0;
let operation=(type)=>{
    switch(type){
        case 'add':
            document.getElementById("screen").innerText += "+"
            add++;
            // let newNum =document.getElementById("screen").innerHTML = parseInt(num1) + parseInt(num2);
        break;
        case 'sub':
            document.getElementById("screen").innerText += "-"
            sub++;
        break;
        case 'equal':
        if(add>0){
            document.getElementById("screen").innerHTML = parseInt(num1) + parseInt(num2);
        }
        else if(sub>0){
            document.getElementById("screen").innerHTML = parseInt(num1) - parseInt(num2);
        }
        else{
            console.log("Invalid")
        }
        break;
    }
}