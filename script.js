const add=(num1,num2)=>{
    let result = num1+num2
    console.log(result)
    return result
}
const subtract=(num1,num2)=>{
    let result = num1-num2
    console.log(result)
    return result
}
const multiply=(num1,num2)=>{
    let result = num1*num2
    console.log(result)
    return result
}

const divide=(num1,num2)=>{
    if (num2 === 0) {
        console.log("Error: Division by zero");
        return "Error";
    }
    let result = num1/num2
    console.log(result)
    return result
}


const operate =(firstNum,operator,secondNum)=>{
    const num1=parseFloat(firstNum)
    const num2 = parseFloat(secondNum)

    if(operator==="+"){
        return add(num1,num2)
    }
    if(operator==="-"){
        return subtract(num1,num2)
    }
    if(operator==="*"){
        return multiply(num1,num2)
    }
    if(operator==="/"){
        return divide(num1,num2)
    }


}

const container =document.getElementById("calculator")

const display =document.getElementById("display")
const numberBtn =document.querySelectorAll(".number")
const operatorBtn =document.querySelectorAll(".operator")
const clearBtn =document.querySelector(".clear")
const equalBtn =document.querySelector(".equal")

let firstNum =""
let secondNum = ""
let operator = ""
let waitingForSecondNum = false

numberBtn.forEach(element => {
   element.addEventListener("click",()=>{
    if (waitingForSecondNum) {
        secondNum += element.textContent
        display.textContent =secondNum
        
    } else {
        firstNum += element.textContent
        display.textContent=firstNum
        
    }
        
    }) 
});

operatorBtn.forEach(button=>{
    button.addEventListener("click",()=>{
        if (firstNum !=="") {
            operator =button.textContent
            waitingForSecondNum = true
        }
    })
})


