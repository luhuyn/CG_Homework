function calBMI(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi = weight / Math.pow(height, 2);

    if(bmi > 40){
        document.getElementById("result").innerHTML = "Obesity III";
    }
    else if(bmi >= 35){
        document.getElementById("result").innerHTML = "Obesity II";
    }
    else if(bmi >= 30){
        document.getElementById("result").innerHTML = "Obesity I";
    }
    else if(bmi >= 25){
        document.getElementById("result").innerHTML = "Overweight";
    }
    else if (bmi >= 18.5) {
        document.getElementById("result").innerHTML = "Normal";
    }
    else if(bmi >= 17){
        document.getElementById("result").innerHTML = "Skinny I";
    }
    else if (bmi >= 16) {
        document.getElementById("result").innerHTML = "Skinny II";
    }
    else {
        document.getElementById("result").innerHTML = "Skinny III";
    }
}