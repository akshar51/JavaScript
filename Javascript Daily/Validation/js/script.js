let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let gender = document.querySelectorAll("input[name='gender']")
let hobby = document.querySelectorAll("input[name='hobby']")

let validate = ()=>{
    
    if(username.value.trim() === ""){
        document.querySelector('.userError').classList.remove("d-none");
    }
    else{
        document.querySelector('.userError').classList.add("d-none");
    }

    if(email.value.trim()===""){
        document.querySelector('.emailError').classList.remove('d-none')
    }
    else{
        document.querySelector('.emailError').classList.add('d-none')
    }
}
