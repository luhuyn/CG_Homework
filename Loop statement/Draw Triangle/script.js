let data = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        data += "*";
    }
    data += "<br>";
}
data += "<br>";
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        data += "*";
    }
    data += "<br>";
}
data += "<br>";
let data1 = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        data1 += "*";
    }
    data1 += "<br>";
}
data1 += "<br>";
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        data1 += "*";
    }
    data1 += "<br>";
}
data1 += "<br>";
document.getElementById("demo1").innerHTML = data;
document.getElementById("demo").innerHTML = data1;