//User Input
//Two ways:
// 1.window prompt
// 2.Some Action + Input Text Box

// let name=window.prompt("Enter your name")
// console.log(name);
// document.getElementById("myH1").textContent=`Hello ${name}`

// document.getElementById("mybutton").onclick=function(){
//  console.log(  document.getElementById("content").innerHTML=document.getElementById("myName").value);

// }
// function show(){

//   document.getElementById("content").innerHTML=document.getElementById("myName").value
// }
// function show(){
//   let name=document.getElementById("myName").value
//   document.getElementById("myH1").textContent=`Hello ${name}`
// }

function Input() {

  let name = document.getElementById("mynaam").value;
  let email = document.getElementById("email").value;
  let div = document.getElementById("div").value;
  let feedback = document.getElementById("feedback").value;

  
  let outputMessage = `Thank you! Hello, my name is ${name}, my email is ${email}, my division is ${div}, and your feedback bright my future: "${feedback}"`;
document.getElementById("mypara").textContent="Thanks for your feedback"

  console.log(outputMessage);
}
