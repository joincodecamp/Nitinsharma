let firstValue;
let secondValue;
let operator;



function getValue(a) {
  document.getElementById("data").value += a;
}

function handleOperatorClick(op) {
   
  if (!operator) {
    firstValue =  document.getElementById("data").value;
    document.getElementById("data").value = "";
    operator = op;
  } 
}


function clearValue() {
    
  document.getElementById("data").value = "";
}
function totalValue(){
   const secondValue = document.getElementById("data").value;
   let result;
    if(operator == '+'){
        result = parseFloat(firstValue) + parseFloat(secondValue)
    }
    else if(operator == '-'){
        result = parseFloat(firstValue) - parseFloat(secondValue)
    }
    else if(operator == '*'){
        result = parseFloat(firstValue) * parseFloat(secondValue)
    }
    else if(operator == '/'){
        result = parseFloat(firstValue) / parseFloat(secondValue)
    }
  operator = '';
    
  document.getElementById('data').value = result;
}