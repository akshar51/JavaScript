// let para = document.querySelector(".blockquote p")
// let names = document.querySelector(".blockquote-footer")


// const dataQuote = [
//     {
//       quote: "In the middle of every difficulty lies opportunity.",
//       author: "Albert Einstein"
//     },
//     {
//       quote: "Do what you can, with what you have, where you are.",
//       author: "Theodore Roosevelt"
//     },
//     {
//       quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
//       author: "Winston Churchill"
//     },
//     {
//       quote: "Happiness depends upon ourselves.",
//       author: "Aristotle"
//     },
//     {
//       quote: "The only way to do great work is to love what you do.",
//       author: "Steve Jobs"
//     },
//     {
//       quote: "It does not matter how slowly you go as long as you do not stop.",
//       author: "Confucius"
//     },
//     {
//       quote: "Believe you can and you're halfway there.",
//       author: "Theodore Roosevelt"
//     },
//     {
//       quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
//       author: "Buddha"
//     },
//     {
//       quote: "You miss 100% of the shots you don’t take.",
//       author: "Wayne Gretzky"
//     },
//     {
//       quote: "Act as if what you do makes a difference. It does.",
//       author: "William James"
//     }
//   ]

//  function changeQuote(){
//     let randomQuote = Math.floor(Math.random()*dataQuote.length)
//     para.textContent = dataQuote[randomQuote].quote
//     names.textContent = dataQuote[randomQuote].author
//  }

//  setInterval(()=>{
//     changeQuote()
//  },2000)

//-------------------------------- LOGIN-SUMBIT --------------------------//

let form1 = document.getElementById("form1")
let card = document.getElementById("card")
let form = document.getElementById("form")

form1.style.display = "none"
card.style.display = "none"

let u_email;
let u_pass;

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let e_data = document.getElementById("email").value
    let p_data = document.getElementById("password").value
    form.style.display = "none"
    form1.style.display = "block"
    u_email=e_data;
    u_pass=p_data;
})

form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    let email1 = document.getElementById("email1").value
    let pass1 = document.getElementById("password1").value

    if(u_email === email1 && u_pass === pass1){
        form1.style.display = "none"
        card.style.display = "block"
    }
    else{
        alert("Invalid detail")
    }
})



