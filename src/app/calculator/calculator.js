class Calculator {
    suma(number1, number2) {
        return number1 + number2;
    }
    resta(number1, number2) {
        return number1 - number2;
    }
}
window.onload = function () {
    var calc = new Calculator();
    console.log(`Resultado suma: ${calc.suma(1, 2)}`);
    console.log(`Resultado resta: ${calc.resta(2, 1)}`);
};
