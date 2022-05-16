let result = ""
function getNumber(num) {
    document.getElementById("display").value += num
    let check = result.split("")
    let boo1 = check[check.length-1] == "-" || check[check.length-1] == "+" || check[check.length-1] == "/"
    let boo2 = num == "-" || num == "+" || num == "/"
    if (boo1 && boo2) {
        check[check.length-1] = num
        result = check.join("")
        document.getElementById("display").value = result
    } else {
        if (num == "x") {
            result += "*" 
        } else {
             result += num
        }
        }
}

function calculator() {
    document.getElementById("display").value = eval(result)
    result = ""
}
function reset() {
    document.getElementById("display").value = ""
    result = ""
}