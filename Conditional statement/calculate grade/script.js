function calGrade(){
    let math = parseFloat(document.getElementById("math").value);
    let literature = parseFloat(document.getElementById("literature").value);
    let english = parseFloat(document.getElementById("english").value);
    let area = parseFloat(document.getElementById("area").value);
    document.getElementById("result").innerHTML = (math + literature + english + area);
}