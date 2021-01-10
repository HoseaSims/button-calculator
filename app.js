const hOne = document.querySelector('h1')
const firstNumber = document.querySelector('#firstNumber')
const secondNumber = document.querySelector('#secondNumber')
const submit = document.querySelector('#submit')
const numberContainer = document.querySelector('#number-container')
const operators = document.querySelector('#operators')
const calculate = document.querySelector('#submit')
const displayOp = document.querySelector('#display-op')

let firstValue = "";
let storeFirstValue
let secondValue = ""
let storeOp
let result



numberContainer.addEventListener('click', e =>{
    
    if(storeFirstValue === undefined){
        
        firstValue += e.target.innerText
        firstNumber.innerText = firstValue
    }
    else if(storeFirstValue != undefined){
        secondValue += e.target.innerText
        secondNumber.innerText = secondValue
    }
    

    console.log(firstValue);
    console.log(secondValue);
    
})

operators.addEventListener('click', e =>{

    storeOp = e.target.innerText

    storeFirstValue = firstValue
    console.log(storeFirstValue);
    console.log(storeOp);
    displayOp.innerText = storeOp
})

calculate.addEventListener('click', e =>{

    if(storeOp === "+"){

        result = parseInt(storeFirstValue) + parseInt(secondValue)
    }
    else if(storeOp === "-"){

        result = parseInt(storeFirstValue) - parseInt(secondValue)
    }
    else if(storeOp === "*"){

        result = parseInt(storeFirstValue) * parseInt(secondValue)
    }
    else if(storeOp === "/"){

        result = parseInt(storeFirstValue) / parseInt(secondValue)
    }
    console.log(result);

    storeFirstValue = undefined
    firstValue = ""
    secondValue = ""
    hOne.innerText = result

})
