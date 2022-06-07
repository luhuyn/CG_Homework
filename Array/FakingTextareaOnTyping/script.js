let textArr = [
    "Hello, how are you?",
    "Do you like me?",
    "Have you read Nobody's Boy?",
    "You are nice!",
    "Goodbye!"
];

function changeAnotherText(){
    let randomTextPos = Math.floor(Math.random() * textArr.length);
    let randomText = textArr[randomTextPos];
    return randomText;
}

let currentText = changeAnotherText();
let str = "";
console.log(currentText);
function fakeTyping(){
    let textArea = document.getElementById("text");        
    for(let i = 0; i < textArea.value.length; i++){
        str += currentText.charAt(i);
        if(i == currentText.length){
            str = "";
            currentText = changeAnotherText();
        }
    }
    textArea.value = str;
    str = "";
}