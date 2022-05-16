function convert() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    if (from == "USD" && to == "VND") {
        document.getElementById("result").innerHTML = "Result: " + (amount * 23000);
    } else if (from == "VND" && to == "USD") {
        document.getElementById("result").innerHTML = "Result: " + (amount / 23000);
    } else {
        document.getElementById("result").innerHTML = "Result: " + amount;
    }
}
