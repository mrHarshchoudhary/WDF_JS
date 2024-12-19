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