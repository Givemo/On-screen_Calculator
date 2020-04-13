

 var a = "", 
    b = "", 
    operator = "";

devide = (a, b) => a / b;

multiply = (a, b) => a * b;

subtract = (a, b) => a - b;

add = (a, b) =>  a + b;

percent = (a) => (a/100) * 100;

operate = (a, b, operators) => {
    switch(operator) {
        case "÷":
            return devide(a, b);
        case "x":
            return multiply(a, b);
        case "-":
            return subtract(a, b);
        case "+":
            return add(a,b);
    }
}
/* 
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}

function getFormattedNumber(num) {
    if(num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
} */

/* var math_it_up = {
    '+': function(x, y) {return x + y},
    '-': function(x, y) {return x - y},
    '&divide': function(x, y) {return x / y},
    '*': function(x, y) {return x * y}
};  */

function getResult() {
    return document.querySelector(".screen").innerText;
}

function printResult(num) {
    if(num == "") {
        document.querySelector(".screen").innerText = num; 
    } else {
        document.querySelector(".screen").innerText = num;
    }
}

var number = document.getElementsByClassName("number");
for(let i = 0; i<number.length; i++) {
    number[i].addEventListener('click',function() {
        let output = getResult();
        if(output != NaN) {
            output = output + this.id;
            printResult(output);
        }

        });
    }

function getResultHistory() {
    return document.querySelector(".result-screen").innerText;
}

function printResultHistory(num) {
    document.querySelector(".result-screen").innerText = num;
}
var a, b;
var operator = document.getElementsByClassName("operator");
for(let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if(this.id == "clear-all") {
            printResult("");
            printResultHistory("");
        }
        if(this.id == "clear-each") {
            let output = ""
            output = getResult().toString();
            if(output) { //if output has a value
                output = output.substr(0, output.length - 1);
                printResult(output);
            }
        } else {
            let output = "";
            let history = "";
            output = getResult();
            history = getResultHistory();

            if(output == "" && history != "") {
                if (isNaN(history[history.length-1])) {
                    history = history.substr(0,history.length-1)
                }
            }
            if(output != "" || history != "") {
                output = output == ""?
                output:output;
                history = history + output;
                printResultHistory("");

                if(this.id == "=") {
                    let result// = (new Function('return '+history))()
                    let firstNumber = Number.parseFloat(output);
                    let secondNumber = Number.parseFloat(history);
                    if(history.includes('*')) {
                        result = multiply(firstNumber, secondNumber);
                    } else if (history.includes('+')) {
                        result = add(firstNumber, secondNumber);
                    } else if (history.includes('-')) {
                        result = subtract(secondNumber, firstNumber);
                    } else if (history.includes('÷')) {
                        result = devide(secondNumber, firstNumber);
                    }
                    printResult(result);
                    printResultHistory("");
                } else {
                    history = history + this.id;
                    printResultHistory(history);
                    printResult("");
                }

            }
            }    
        });
    }
   // });
//}