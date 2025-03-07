let btn = document.querySelectorAll("button")
let display = document.querySelector("#display")
let array = ['+','-','*','/'];

btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let value = e.target.innerHTML
        let lastStr = display.value.slice(0,)
        

        if(value == '='){
            if(array.includes(value)){
               display.value = lastStr
            }
            else{
                display.value = eval(display.value)
            }
        }
        else if(value == 'C'){
            display.value = ""
        }
        else{
            display.value += value;
        }
    })
})