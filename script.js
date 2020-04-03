

var a = "", 
    b = "", 
    operator = "";

devide = (a, b) => a / b;

multiply = (a, b) => a * b;

subtract = (a, b) => a - b;

add = (a, b) =>  a + b;

operate = (a, b, operators) => {
    switch(operator) {
        case "÷":
            return devide(a, b);
        case "X":
            return multiply(a, b);
        case "-":
            return subtract(a, b);
        case "+":
            return add(a,b);
    }
}

//function getResultHistory() {
//    return document.querySelector(".result-screen").innerText;
//}

//function printResultHistory() {
//    document.querySelector(".result-screen").innerText = "answer";
//}

function getResult() {
    return document.getElementById("#screen").innerText;
}
function printResult(num) {
    document.getElementById("#screen").innerText = num;
}

var number = document.getElementsByClassName(".number");
for(let i = 0; i < number.length; i++) {
    number[i].addEventListiner("click", function() {
    });
    console.log("clicked")
}

