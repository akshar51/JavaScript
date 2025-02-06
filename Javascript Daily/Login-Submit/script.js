let form = document.getElementById('form');
let form1 = document.getElementById('form1');
document.getElementById('form1').style.display = 'none';
document.getElementById('card').style.display = 'none';
let u_email;
let u_pass;

form.addEventListener('submit',function(event){
    event.preventDefault()

    let email= document.getElementById('email').value
    let password = document.getElementById('password').value

    u_email=email;
    u_pass=password;
    formHide();
})

function formHide(){
    document.getElementById('form').style.display = 'none';
    document.getElementById('form1').style.display = 'block';
}

form1.addEventListener('submit',function(event){
    event.preventDefault()

    let email1 = document.getElementById('email1').value
    let password1 = document.getElementById('password1').value

    if(u_email === email1 && u_pass === password1){
        displayCard()
    }
    else{
        alert("Invalid email or password")
    }
    
})



function displayCard(){
    document.getElementById('card').style.display = 'block';
    document.getElementById('form1').style.display = 'none';
    document.getElementById('img-post-title').innerText = u_email;
}


