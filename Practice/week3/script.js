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

// ----------------------CALCULATOR ---------------------//

let btn = document.querySelectorAll("button")
let display = document.querySelector("#display")
let array = ['+','-','*','/'];

btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{

        let value = e.target.innerHTML
        let displayValue = display.value

        let last = displayValue.slice(-1)//
        let removeStr = display.value.slice(0,-1)// Remove last char from display value

        if(value == '='){
            if(array.includes(last)){
                display.value = removeStr
            }
            else{
                display.value = eval(display.value)
            }
        }
        else if(value == 'C'){
            display.value = ""
        }
        else if(array.includes(value)){
            if(last == value){
                display.value = display.value
            }
            else{
                if(array.includes(last)){
                    display.value = removeStr + value;
                }
                else{
                    display.value += value;
                }
            }
        }
        else{
            display.value += value;
        }
        
    })
})


