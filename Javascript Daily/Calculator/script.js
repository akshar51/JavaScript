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