var isstatus=document.querySelector("h1");
var btn=document.querySelector(".btn-cont button");
var removefriend=document.querySelector("#remove");

btn.addEventListener("click",function(){
    isstatus.innerHTML="Friend";
    isstatus.style.color="green";
})

removefriend.addEventListener("click",function(){
    isstatus.innerHTML="Stranger";
    isstatus.style.color="red"
})