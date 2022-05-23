function cal() {
    let number1 = +document.getElementById("number1").value;
    let number2 = +document.getElementById("number2").value;
    let result = 0
    if (number1 == number2) {
        result = "It is not allowed to enter 2 equal numbers. Please re-enter!";
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    } else if (number1 > number2) {
        for(let i = number2; i <= number1; i++) {
            result += i;
        }
    } else {
        for(let i = number1; i <= number2; i++) {
            result += i;
        }
    }
    document.getElementById("result").innerHTML = result;
}