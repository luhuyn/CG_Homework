let result = document.getElementById("result");

function changeLabel(exerciseNumber){
    result.innerText = "";

    let title = document.getElementById("title");
    let starsList = document.getElementById("starsList");
    let firstInput = document.getElementById("input1");
    let secondInput = document.getElementById("input2");
    let thirdInput = document.getElementById("input3");
    let labels = document.getElementsByTagName("label");
    let processBtn = document.getElementById("process-exercise");

    title.style.display = "none";
    starsList.style.display = "none";
    labels[0].style.display = "none";
    labels[1].style.display = "none";
    labels[2].style.display = "none";
    firstInput.style.display = "none";
    secondInput.style.display = "none";
    thirdInput.style.display = "none";
    processBtn.style.display = "none";
    firstInput.value = "";
    secondInput.value = "";
    thirdInput.value = "";
    title.innerText = "";

    switch (exerciseNumber) {
        case 1:
            title.style.display = "inline-block";
            labels[0].style.display = "inline-block";
            labels[1].style.display = "inline-block";
            firstInput.style.display = "inline-block";
            secondInput.style.display = "inline-block";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "First number: ";
            labels[1].textContent = "Second number: ";
            title.innerText = 'Enter 2 numbers, if first number is less than or equal to second number, displays sum of 2 numbers ; but if first number is greater than second number, displays that first number is greater than second number';
            break;
        case 2:
            title.style.display = "inline-block";
            starsList.style.display ="inline-block";
            labels[0].style.display = "inline-block";
            firstInput.style.display = "inline-block";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "Enter a star name: ";
            title.innerText = 'Displays the constellation name corresponding to the entered star name';
            break;
        case 3:
            title.style.display = "inline-block";
            labels[0].style.display = "inline-block";
            firstInput.style.display = "inline-block";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "Enter a random number: ";
            title.innerText = 'The exponentiation of a number entered from the keyboard';
            break;
        case 4:
            title.style.display = "inline-block";
            labels[0].style.display = "inline-block";
            firstInput.style.display = "inline-block";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "Enter the radius of the circle: ";
            title.innerText = 'Calculate the circumference and area of a circle based on the entered radius';
            break;
        case 5:
            title.style.display = "inline-block";
            labels[0].style.display = "inline-block";
            firstInput.style.display = "inline-block";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "Enter a random number: ";
            title.innerText = 'Calculate the factorial of an entered number';
            break;
        case 6:
            title.style.display = "inline-block";
            labels[0].style.display = "inline-block";
            firstInput.style.display = "inline-block";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "Enter a random number: ";
            title.innerText = 'Check if the number you just entered is a number or not';
            break;
        case 7:
            title.style.display = "inline-block";
            labels[0].style.display = "inline-block";
            labels[1].style.display = "inline-block";
            labels[2].style.display = "inline-block";
            firstInput.style.display = "inline-block";
            secondInput.style.display = "inline-block";
            thirdInput.style.display = "inline-block";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "First number: ";
            labels[1].textContent = "Second number: ";
            labels[2].textContent = "Third number: ";
            title.innerText = 'Enter three numbers, then find the minimum';
            break;
        case 8:
            title.style.display = "inline-block";
            labels[0].style.display = "inline-block";
            firstInput.style.display = "inline-block";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "Enter a random number: ";
            title.innerText = 'Check if the number you just entered is a positive integer';
            break;
        case 9:
            title.style.display = "inline-block";
            starsList.style.display ="none";
            labels[0].style.display = "inline-block";
            labels[1].style.display = "none";
            labels[2].style.display = "none";
            firstInput.style.display = "inline-block";
            secondInput.style.display = "none";
            thirdInput.style.display = "none";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "Enter an array of integers(separated by comma): ";
            title.innerText = 'Enter an array of integers separated by comma,reverse the array';
            break;
        case 10:
            title.style.display = "inline-block";
            labels[0].style.display = "inline-block";
            labels[1].style.display = "inline-block";
            firstInput.style.display = "inline-block";
            secondInput.style.display = "inline-block";
            processBtn.style.display = "inline-block";
            labels[0].textContent = "Enter a string: ";
            labels[1].textContent = "Enter a character: ";
            title.innerText = 'Enter a string and a character, check if the character is in the array, return the number of occurrences of the character';
            break;
    }
}

function processExercise(exerciseNumber){
    let firstInput = document.getElementById("input1").value;
    let secondInput = document.getElementById("input2").value;
    let thirdInput = document.getElementById("input3").value;
    switch (exerciseNumber) {
        case 1:
            exercise1(firstInput, secondInput);
            break;
        case 2:
            exercise2(firstInput);
            break;
        case 3:
            exercise3(firstInput);
            break;
        case 4:
            exercise4(firstInput);
            break;
        case 5:
            exercise5(firstInput);
            break;
        case 6:
            isNumber(firstInput);
            break;
        case 7:
            exercise7(firstInput, secondInput, thirdInput);
            break;
        case 8:
            exercise8(firstInput);
            break;
        case 9:
            exercise9(firstInput);
            break;
        case 10:
            exercise10(firstInput, secondInput);
            break;
    }
}
//exercise1
function exercise1(number1, number2) {
    number1 = +(number1);
    number2 = +(number2);
    result.innerText =  number1 > number2 ? `${number1} is greater than ${number2}` : `Total ${number1} + ${number2} = ${number1 + number2}`;
}
//exercise2 
function exercise2 (starName) {        
    let starsName = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let constellationsName = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
    for(let i = 0; i < starsName.length; i++) {
        if(i == starsName.length - 1 && starsName[i] != starName) {
            result.innerText = "Couldn't find the star you entered!";
        } else if(starsName[i] === starName) {
            result.innerText = `${starName} belongs to the ${constellationsName[i]}`;
            break;
        }
    }
}
//exercise3
function exercise3(number) {
    number = +number;
    if(isNaN(number)){
        result.innerText = "Please enter a number!";
    } 
    else{
        result.innerText = `The exponentiation of ${number} = ${Math.pow(number,2)}`;
    }
}
//exercise4
function exercise4(radius) {
    radius = parseInt(radius);
    if(isNaN(radius)){
        result.innerText = "Please enter a radius!";
    }
    else {
        result.innerText = `The circumference of the circle is ${(2*radius*Math.PI).toFixed(2)} and the area = ${(Math.PI*Math.pow(radius,2)).toFixed(2)}`;
    }
}
//exercise5
function exercise5(number) {
    number = parseInt(number);
    if(isNaN(number)){
        result.innerText = "Please enter a number!";
    }
    else {
        let factor = 1;
        for(let i = 1; i <= number; i++) {
            factor *= i;
        }
        result.innerText = `The factorial of ${number}: ${number}! = ${factor}`;            
    }        
}
//exercise6
function isNumber(inputValue) {
    inputValue = parseInt(inputValue);
    result.innerText = isNaN(inputValue) ? 'Not a number!' : 'It is a number';
}
//exercise7
function exercise7() {
    let args = new Array(arguments.length);
    for(let i = 0; i < args.length; i++){
        args[i] = +arguments[i];
    }
    console.log(args);
    console.log(args.every(e => !isNaN(e)&&e!=""));
    if(args.every(e => !isNaN(e)&&e!="")){
        result.innerText = "The minimum: " + args.reduce((previous, current) => {
        console.log(previous);
        return previous > current ? current : previous;
        });
    } else result.innerText = "Please enter an integer!";
}
//exercise8
function exercise8(number){
    number = +number;
    if(isNaN(number)){
        result.innerText = "Please enter a number!";
    }
    else {
        result.innerText = number > 0 ? true : false;
    }
}
//exercise9
function exercise9(str) {
    let arr = str.split(",");
    let mid = arr.length / 2;
    for(let i = 0, j = arr.length -1; i < mid, j >= mid; i++, j--){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
        result.innerText = `Reverse: ${arr}`;
}
//exercise10
function exercise10(str, searchChar) {
    let arr = str.split("");
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == searchChar) result.push(i);
    }
    result.innerText = result.length > 0 ? `The occurrences of ${searchChar} in "${str}" are ${result.length}` : `${searchChar} does not appear in the ${str}`;
}