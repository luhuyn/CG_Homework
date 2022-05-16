function showPrice(){
    let fruit = document.getElementById("fruit").value;
    switch(fruit){
        case "Ổi":
        case "Guava":
        case "Dưa hấu":
        case "Watermelon":{
            document.getElementById("result").innerHTML = "20.000 VND/kg";
        }
        break;
        case "Táo":
        case "Apple":
        case "Xoài":
        case "Mango":{
            document.getElementById("result").innerHTML = "30.000 VND/kg";
        }
        break;
        case "Cam":
        case "Orange":
        case "Chôm chôm":
        case "Rambutan":{
            document.getElementById("result").innerHTML = "40.000 VND/kg"
        }
        break;
        case "Măng Cụt":
        case "Mangosteen":{
            document.getElementById("result").innerHTML = "50.000 VND/kg"
        }
        break;
    }
}