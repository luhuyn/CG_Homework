let loan = +prompt("Input loan: ");
let rate = prompt("Input interest rate: ");
let n = prompt("Input year: ");

let loanLast = loan + ((loan * rate/100) * n);
document.write("The money have to pay: " + loanLast);
