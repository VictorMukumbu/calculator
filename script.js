const add=(num1,num2)=>{
    let result = num1+num2
    console.log(result)
    return result
}
add(1,2)
const subtract=(num1,num2)=>{
    let result = num1-num2
    console.log(result)
    return result
}
subtract(2,4)
const multiply=(num1,num2)=>{
    let result = num1*num2
    console.log(result)
    return result
}
multiply(2,3)

const divide=(num1,num2)=>{
    let result = num1/num2
    console.log(result)
    return result
}
divide(10,5)

const firstNum =''
const secondNum =''
const operator =''

const operate =(firstNum,operator,secondNum)=>{
    if(operator==="+"){
        return add(firstNum,secondNum)
    }
    if(operator==="-"){
        return subtract(firstNum,secondNum)
    }
    if(operator==="*"){
        return multiply(firstNum,secondNum)
    }
    if(operator==="/"){
        return divide(firstNum,secondNum)
    }


}
operate(firstNum,operator,secondNum)

const container =document.getElementById(calculator)
const displayBox =document.createElement("div")
