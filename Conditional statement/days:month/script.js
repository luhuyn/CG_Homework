function calDay(){
    let month = document.getElementById("month").value;
    switch(month){
        //31 days
        case "1":{
            document.getElementById("result").innerHTML = "January has 31 days";
        }
        break;         
        case "3":{
            document.getElementById("result").innerHTML = "March has 31 days";
        }
        break; 
        case "5":{
            document.getElementById("result").innerHTML = "May has 31 days";
        }
        break;   
        case "7":{
            document.getElementById("result").innerHTML = "July has 31 days";
        }
        break; 
        case "8":{
            document.getElementById("result").innerHTML = "August has 31 days";
        }  
        break; 
        case "10":{
            document.getElementById("result").innerHTML = "October has 31 days";
        } 
        break; 
        case "12":{
            document.getElementById("result").innerHTML = "December has 31 days";
        }
        break; 

        //30 days
        case "4":{
            document.getElementById("result").innerHTML = "April has 30 days";
        }
        break; 
        case "6":{
            document.getElementById("result").innerHTML = "June has 30 days";
        }
        break; 
        case "9":{
            document.getElementById("result").innerHTML = "September has 30 days";
        }
        break; 
        case "11":{
            document.getElementById("result").innerHTML = "November has 30 days";
        }
        break; 

        //February
        case "2":{
            calYear();
        }
        break;
        
        default:{
            document.getElementById("result").innerHTML = "This is not a month";
        }
    }
}
function calYear(){
    let year = document.getElementById("year").value;
    if(year % 4 == 0 && year % 100 != 0){
        document.getElementById("result").innerHTML = "February has 29 days";
    }
    else if(year % 400 == 0){
        document.getElementById("result").innerHTML = "February has 29 days";
    }
    else{
        document.getElementById("result").innerHTML = "February has 28 days";
    }
}