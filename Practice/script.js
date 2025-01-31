var isstatus=document.querySelector("h1");
var btn = document.querySelector("#add");

// var removefriend=document.querySelector("#remove");

// TWO BUTTON 
// btn.addEventListener("click",function(){
//     isstatus.innerHTML="Friend";
//     isstatus.style.color="green";
// })

// removefriend.addEventListener("click",function(){
//     isstatus.innerHTML="Stranger";
//     isstatus.style.color="red"
// })

// SINGLE BUTTON
var check=0
btn.addEventListener("click",function(){
    if(check == 0){
        isstatus.innerHTML="Friend";
        isstatus.style.color="green";
        console.log("hiii")
        check=1;
    }
    else{
        isstatus.innerHTML="Stranger";
        isstatus.style.color="red" ;
        check=0;
    }
})
