var input = document.getElementById('inputtext');
var buttons = document.querySelectorAll('button');

function calculate(expression) {
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}

function operation(buttonValue) {
    switch (buttonValue) {
        case 'C':
            input.value = '';
            break;
        case 'DEL':
            input.value = input.value.slice(0, -1);
            break;
        case '=':
            input.value = calculate(input.value);
            break;
        default:
            input.value += buttonValue;
            break;
    }
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});