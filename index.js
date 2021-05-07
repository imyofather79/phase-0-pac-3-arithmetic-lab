let number = 5

function add() {
    return number += 5;
}

function subtract() {
    return number -= 5;
}

function multiply() {
    return number *= 5;
}

function divide() {
    return number /= 5;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function increment(n) {
    return (n + 1);
}

function decrement(n) {
    return  (n - 1);
}


function makeInt(n) {
        n = parseInt(n, 10); 
        return n
    }

function preserveDecimal(n) {
        n = parseFloat(n); 
        return n
    }