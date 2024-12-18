function converter() {
  const num = document.getElementById('val').value;
  const selected = document.getElementById('division').value


  if (selected == 'cel') {
      
      document.getElementById('Result').innerText =` F:${(num * (9/5) + 32).toFixed(2)}`;
      
  }
  else if(selected =='fah'){
      document.getElementById('Result').innerText = `C: ${( (num - 32) * 5/9).toFixed(2)}`;
  }
  else if(selected == 'rupee'){
      document.getElementById('Result').innerText = `Rs. ${(num*84).toFixed(2)}`;
  }
  else if(selected == 'dollar'){
      document.getElementById('Result').innerText =` $ ${(num/84).toFixed(2)}`;
  }
 
}