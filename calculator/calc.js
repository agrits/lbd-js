
function numberClicked(number){
  if((mode==="equals" || mode==="number") && current == 0 && current !==""){
    current = ""
    numberClicked(number)
  }
  else if(mode === "equals"){
    current = ""
    mode = "number"
    numberClicked(number)
  }

  else{
    if(mode === "operation"){
      ans = current
      current = ""
    }

    mode = "number"
    current = parseFloat(current + "" + number)
    updateDisplay(current)
  }
}

function operationClicked(op){
  if(mode === "number" && !(!ans) && !(!current) ){
    equalsClicked()
  }
  mode = "operation"
  operation = op
  ans = current
}
function equalsClicked(){
  current = ""+eval(ans+operation+current)
  ans = ""
  mode = "equals"
  updateDisplay(current)
}
function updateDisplay(string){
  $("#display").val(string)
}
function clearClicked(){
  updateDisplay("")
  current = ""
  ans = ""
  operation = "+"
  mode = "number"
}
function initHandlers(){
  for(let i = 0; i<=9; i++){
    $("#button"+i).on('click', function(){numberClicked(i)})
  }

  $("#equalsButton").on('click', equalsClicked)
  $("#multiplyButton").on('click', function(){operationClicked("*")})
  $("#addButton").on('click', function(){operationClicked("+")})
  $("#subtractButton").on('click', function(){operationClicked("-")})
  $("#divideButton").on('click', function(){operationClicked("/")})
  $("#clearButton").on('click', clearClicked)
}

$(document).ready(function(){
  mode = "equals"
  ans = ""
  operation = "+"
  current = ""
  initHandlers()
  updateDisplay("")
})
