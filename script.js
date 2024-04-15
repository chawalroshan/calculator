// Get the input field
const inputField = document.querySelector('.input');

// Function to append text to the input field
function appendToInput(value) {
    inputField.value += value;
}

// Function to clear the previous single character from the input field
function clearPreviousCharacter() {
    inputField.value = inputField.value.slice(0, -1);
}

// Function to clear the input field
function clearInput() {
    inputField.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        const result = eval(inputField.value);
        inputField.value = result;
    } catch (error) {
        inputField.value = 'Error';
    }
}

// Function to calculate percentage
function calculatePercentage() {
    try {
        const expression = inputField.value.trim();
        const parts = expression.split(/[\+\-\*\/]/); // Split expression by operators
        const lastNumber = parseFloat(parts[parts.length - 1]); // Get the last number

        if (!isNaN(lastNumber)) {
            const result = lastNumber / 100;
            inputField.value = result;
        }
    } catch (error) {
        inputField.value = 'Error';
    }
}

// Add event listeners to buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();

        // Handle different button actions
        switch (buttonText) {
            case 'C':
                clearInput();
                break;
            case '=':
                calculateResult();
                break;
            case '%':
                calculatePercentage();
                break;
            case '[x]':
                clearPreviousCharacter();
                break;
            default:
                appendToInput(buttonText);
                break;
        }
    });
});
