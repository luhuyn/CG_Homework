let data = "<table>";
for(let i = 1; i <= 10; i++) {
    data += "<tr>";
    for(let j = 1; j <= 10; j++) {
        data += "<td>" + i + " x " + j + " = " + j*i + "</td>";
    }
    data += "</tr>";
}
data += "</table>";
document.getElementById("result").innerHTML = data;