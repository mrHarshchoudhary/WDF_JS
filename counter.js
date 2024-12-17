let count=0;
let value=document.getElementById("value")

function More(){
count++;
value.textContent=count

}
function Less(){
count--;
value.textContent=count
}
function Reset(){
count=0;
value.textContent=count
}
