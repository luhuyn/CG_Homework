function isPrime(number) {
    let result = true;
    if(number < 2){
        result = false;
    }
    if(number >= 2) {
        for(let i = 2; i < number-1; i++) {
            if(number % i == 0) {
                result = false;
                break;
            }
        }
    }
    return result;
}

function searchPrimes(number) {
    document.getElementById("display").innerText = "";
    let primesArr = []
    for(let i = 0; i <= number; i++) {
        if(isPrime(i)) primesArr.push(i); 
    }
    primesArr.forEach((item, index) => {
        if(index == primesArr.length - 1) document.getElementById("display").innerText += item + ".";
        else document.getElementById("display").innerText += item + ",";
    });
}