function updatePlaceholder() {
    const select = document.getElementById('division');
    const input = document.getElementById('val');
    switch (select.value) {
        case 'celsiusToFahrenheit':
            input.placeholder = 'Enter Celsius';
            break;
        case 'fahrenheitToCelsius':
            input.placeholder = 'Enter Fahrenheit';
            break;
        case 'dollarToRupee':
            input.placeholder = 'Enter Dollars';
            break;
        case 'rupeeToDollar':
            input.placeholder = 'Enter Rupees';
            break;
        default:
            input.placeholder = 'Enter value';
    }
}

function converter() {
    const inputValue = parseFloat(document.getElementById('val').value);
    const converterType = document.getElementById('division').value;
    let result;

    if (isNaN(inputValue)) {
        document.getElementById('Result').innerText = "Please enter a valid number";
        return;
    }

    switch (converterType) {
        case "celsiusToFahrenheit":
            result = (inputValue * 9 / 5) + 32;
            document.getElementById('Result').innerText = `${result.toFixed(2)} °F`;
            break;
        case "fahrenheitToCelsius":
            result = (inputValue - 32) * 5 / 9;
            document.getElementById('Result').innerText = `${result.toFixed(2)} °C`;
            break;
        case "dollarToRupee":
            result = inputValue * 82;
            document.getElementById('Result').innerText = `₹${result.toFixed(2)}`;
            break;
        case "rupeeToDollar":
            result = inputValue * 0.0122;
            document.getElementById('Result').innerText = `$${result.toFixed(2)}`;
            break;
        default:
            document.getElementById('Result').innerText = "Invalid conversion type";
    }
}