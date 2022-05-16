var btnCheck = document.getElementById("btnCheck");
btnCheck.addEventListener("click", getValue);

function getValue(){
    var inputnum = document.getElementById("inputnum")
    var num = inputnum.value;

    if(num % 2 == 0){
        document.write(num + " is an even");
    }
    else{
        document.write(num + " is an odd");
    }
}