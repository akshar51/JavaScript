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

// let btn = document.querySelectorAll("button")
// let display = document.querySelector("#display")
// let array = ['+','-','*','/'];

// btn.forEach((button)=>{
//     button.addEventListener("click",(e)=>{

//         let value = e.target.innerHTML
//         let displayValue = display.value

//         let last = displayValue.slice(-1)//
//         let removeStr = display.value.slice(0,-1)// Remove last char from display value

//         if(value == '='){
//             if(array.includes(last)){
//                 display.value = removeStr
//             }
//             else{
//                 display.value = eval(display.value)
//             }
//         }
//         else if(value == 'C'){
//             display.value = ""
//         }
//         else if(array.includes(value)){
//             if(last == value){
//                 display.value = display.value
//             }
//             else{
//                 if(array.includes(last)){
//                     display.value = removeStr + value;
//                 }
//                 else{
//                     display.value += value;
//                 }
//             }
//         }
//         else{
//             display.value += value;
//         }
        
//     })
// })


// --------------------- QUIZ APP ------------------//
// const questions = [
//     { question: "What is JavaScript primarily used for?", options: ["Styling web pages", "Server-side scripting", "Client-side scripting", "Database management"], answer: "Client-side scripting" },
//     { question: "Which keyword is used to declare a variable in JavaScript?", options: ["int", "var", "string", "declare"], answer: "var" },
//     { question: "What does 'DOM' stand for?", options: ["Document Object Model", "Data Object Manipulation", "Dynamic Output Method", "Document Oriented Mapping"], answer: "Document Object Model" }
// ];

// let currentQuestionIndex = 0;
// let userAnswers = [];
// let timeLeft;
// let timerInterval;

// function startTimer() {
//     timeLeft = 60;
//     clearInterval(timerInterval);
//     timerInterval = setInterval(() => {
//         if (timeLeft > 0) {
//             timeLeft--;
//             document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
//         } else {
//             clearInterval(timerInterval);
//             nextQuestion();
//         }
//     }, 1000);
// }

// function loadQuestion() {
//     startTimer();
//     const questionData = questions[currentQuestionIndex];
//     document.getElementById("question").innerText = questionData.question;
//     const optionsList = document.getElementById("options");
//     optionsList.innerHTML = "";
//     questionData.options.forEach(option => {
//         const li = document.createElement("li");
//         li.innerHTML = `<input type="radio" name="answer" value="${option}" ${userAnswers[currentQuestionIndex] === option ? 'checked' : ''}> ${option}`;
//         li.onclick = () => { 
//             li.querySelector("input").checked = true;
//             selectOption(option); 
//         };
//         optionsList.appendChild(li);
//     });
//     document.getElementById("prev").style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
//     document.getElementById("next").style.display = currentQuestionIndex === questions.length - 1 ? "none" : "inline-block";
//     document.getElementById("submit").classList.toggle("hidden", currentQuestionIndex !== questions.length - 1);
//     document.getElementById("next").disabled = !userAnswers[currentQuestionIndex];
// }

// function selectOption(option) {
//     userAnswers[currentQuestionIndex] = option;
//     document.getElementById("next").disabled = false;
// }

// function nextQuestion() {
//     if (currentQuestionIndex < questions.length - 1) {
//         currentQuestionIndex++;
//         loadQuestion();
//     } else {
//         submitQuiz();
//     }
// }

// function prevQuestion() {
//     if (currentQuestionIndex > 0) {
//         currentQuestionIndex--;
//         loadQuestion();
//     }
// }

// function submitQuiz() {
//     clearInterval(timerInterval);
//     let score = 0;
//     questions.forEach((q, index) => {
//         if (userAnswers[index] === q.answer) {
//             score++;
//         }
//     });
//     document.getElementById("quiz-container").classList.add("hidden");
//     document.getElementById("result").classList.remove("hidden");
//     document.getElementById("result").innerHTML = `<h2>You scored ${score} out of ${questions.length}!</h2>`;
// }

// loadQuestion();

// --------------------- FORM VALIDATION -------------------//

