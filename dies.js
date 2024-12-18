let min=1;
let max=7
let num1;
let num2;
function Throws1(){
num1=Math.floor(Math.random()*(max-min))+min
document.getElementById("number1").textContent=num1

}
function Throws2(){
num2=Math.floor(Math.random()*(max-min))+min
document.getElementById("number2").textContent=num2
}
function winner(){
  winnr.textContent=Math.max(num1,num2)
  document.getElementById.textContent=Math.max(num1,num2)
  if(num1>num2){
    winnr.textContent="Person 1 winner"
  }
  else if(num1<num2){
    winnr.textContent="Person 2 is winner"
  }
  else{
    winnr.textContent="Person 1 and Person 2"
  }
}