

function numberClickedBinder(number){
  return $("#button"+number).click(function(){numberClicked(number); console.log(number)})
}


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
  if(mode === "equals"){
    current = ""+eval(last+operation+current)
    updateDisplay(current)
  }
  else{
    last = current
    current = ""+eval(ans+operation+current)
    mode = "equals"
    updateDisplay(current)
  }
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

  $("#equalsButton").click(equalsClicked)
  $("#multiplyButton").click(function(){operationClicked("*")})
  $("#addButton").click(function(){operationClicked("+")})
  $("#subtractButton").click(function(){operationClicked("-")})
  $("#divideButton").click(function(){operationClicked("/")})
  $("#clearButton").click(clearClicked)

  for(i = 0; i<=9; i++){
    numberClickedBinder(i)
  }
}
$(document).ready(function(){
  mode = "equals"
  ans = ""
  operation = "+"
  current = ""
  initHandlers()
  updateDisplay("")
})
