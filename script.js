function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(array){
    return array.reduce((total, current) => total * current)}

function divide(a, b){
    return a / b
}

console.log(add(1, 4));
console.log(subtract(1, 4));
console.log(multiply(1, 4));
console.log(divide(1, 4));