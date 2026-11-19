document.write("<BR><BR>BASIC CALCULATOR USING PROMPT()<BR>")
 var numone = parseFloat(prompt("Enter value one:"));
 var numtwo = parseFloat(prompt("Enter value two:"));
 var operation = prompt("Enter any operator:");

 function add(a, b) {
     return a + b;
 }

 function subtract(a, b) {
     return a - b;
 }

 function multiply(a, b) {
     return a * b;
 }

 function divide(a, b) {
     if (b === 0) {
         return "cannot divide by zero.";
     }
        return a / b;
    }

    var result;
    switch (operation) {
        case "+":
            result = add(numone, numtwo);
            break;
        case "-":
            result = subtract(numone, numtwo);
            break;
        case "*":
            result = multiply(numone, numtwo);
            break;
        case "/":
            result = divide(numone, numtwo);
            break;
        default:
            result = "Invalid operator";
    }
    document.write("<br>Result: ", result);
 