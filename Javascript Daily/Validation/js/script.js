let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let gender = document.querySelectorAll("input[name='gender']")
let hobby = document.querySelectorAll("input[name='hobby']")
let dob = document.getElementById("dob")

let validate = ()=>{
    
    // USERNAME
    if(username.value.trim() === ""){
        document.querySelector('.userError').classList.remove("d-none");
    }
    else{
        document.querySelector('.userError').classList.add("d-none");
    }


    // EMAIL
    if(email.value.trim()===""){
        document.querySelector('.emailError').classList.remove('d-none')
    }
    else{
        document.querySelector('.emailError').classList.add('d-none')
    }

    // PASSWORD
    if(password.value.trim()===""){
        document.querySelector('.passwordError').classList.remove('d-none')
    }
    else{
        document.querySelector('.passwordError').classList.add('d-none')
    }

    // GENDER
    if(!gender[0].checked && !gender[1].checked){
        document.querySelector('.genderError').classList.remove('d-none');
    }
    else{
        document.querySelector('.genderError').classList.add('d-none');
    }

    // HOBBY
    if (!hobby[0].checked && !hobby[1].checked) {
        document.querySelector('.hobbyError').classList.remove('d-none')
    }
    else {
        document.querySelector('.hobbyError').classList.add('d-none')
    }

    // DATE
    if(dob.value.trim()=== ""){
        document.querySelector('.dobError').classList.remove('d-none')
    }
    else{
        document.querySelector('.dobError').classList.add('d-none')
    }
}
