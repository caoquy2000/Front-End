let summit = document.getElementById("summit");

console.log(num1 , num2);
summit.addEventListener("click", function compute(){
    let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
let operator = document.getElementById("operators").value;
let result = document.getElementById("result");
    if(operator === '+')
    {
        result.value = num1 + num2 ;
    }
    else if(operator === '-')
    {
        result.value = num1 - num2 ;
    }
    else if(operator === '*')
    {
        result.value = num1 * num2 ;
    }
    else if(operator === '/')
    {
        result.value = num1 / num2 ;
    }
    else if(operator === '**')
    {
        result.value = num1 ** num2 ;
    }
});

// ==============
// let summit = document.getElementById('summit');
// summit.addEventListener("click",function calc()
// {
//     let n1 = parseFloat(document.getElementById('num1').value);
//     let n2 = parseFloat(document.getElementById('num2').value);   
//     let oper = document.getElementById('operators').value;
//     let result = document.getElementById('result');
    
//     if(oper === '+')
//     {
//         result.value = n1+n2;
//     }else if(oper === '-')
//     {
//         result.value = n1-n2;
//     }else if(oper === '/')
//     {
//         result.value = n1/n2;
//     }else if(oper === '*')
//     {
//         result.value = n1*n2;
//     }else if(oper === '**')
//     {
//         result.value = n1**n2;
//     }
// } );