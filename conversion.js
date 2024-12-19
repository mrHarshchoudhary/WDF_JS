function updatePlaceholder() {
    const select = document.getElementById('division');
    const input = document.getElementById('val');
    switch (select.value) {
        case 'cel':
            input.placeholder = 'Enter Celsius';
            break;
        case 'fah':
            input.placeholder = 'Enter Fahrenheit';
            break;
        case 'rupee':
            input.placeholder = 'Enter Dollars';
            break;
        case 'dollar':
            input.placeholder = 'Enter Rupees';
            break;
        default:
            input.placeholder = 'Enter value';
    }
}

function converter() {
    const value = parseFloat(document.getElementById('val').value);
    const type = document.getElementById('division').value;
    let result;

    if (isNaN(value)) {
        result = "Please enter a valid number";
    } else {
        switch (type) {
            case 'cel':
                result = `${(value * 9 / 5 + 32).toFixed(2)} °F`;
                break;
            case 'fah':
                result = `${((value - 32) * 5 / 9).toFixed(2)} °C`;
                break;
            case 'rupee':
                result = `₹ ${(value * 82).toFixed(2)}`;
                break;
            case 'dollar':
                result = `$ ${(value / 82).toFixed(2)}`;
                break;
            default:
                result = "Please select a conversion type";
        }
    }
    document.getElementById('Result').innerText = result;
}