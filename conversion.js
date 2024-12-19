function updateInputPlaceholder() {
    const converterType = document.getElementById("converterType").value;
    const inputField = document.getElementById("inputValue");
  
    switch (converterType) {
      case "celsiusToFahrenheit":
        inputField.placeholder = "Enter Celsius";
        break;
      case "fahrenheitToCelsius":
        inputField.placeholder = "Enter Fahrenheit";
        break;
      case "dollarToRupee":
        inputField.placeholder = "Enter Dollars";
        break;
      case "rupeeToDollar":
        inputField.placeholder = "Enter Rupees";
        break;
      default:
        inputField.placeholder = "Enter a value";
    }
  }
  
  function convert() {
    const converterType = document.getElementById("converterType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    let result;
  
    switch (converterType) {
      case "celsiusToFahrenheit":
        result = (inputValue * 9/5) + 32;
        break;
      case "fahrenheitToCelsius":
        result = (inputValue - 32) * 5/9;
        break;
      case "dollarToRupee":
        // Replace 82 with the current exchange rate
        result = inputValue * 82;
        break;
      case "rupeeToDollar":
        // Replace 0.0122 with the current exchange rate
        result = inputValue * 0.0122;
        break;
      default:
        result = "Invalid conversion type";
    }
  
    document.getElementById("result").textContent = `Result: ${result}`;
  }
  
  // Initial call to set the default placeholder
  updateInputPlaceholder();