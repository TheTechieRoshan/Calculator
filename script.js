function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += ' ' + operator + ' ';
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculateResult() {
    const display = document.getElementById('display').value;
    try {
        const result = eval(display);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}