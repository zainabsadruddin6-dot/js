//students marksheet
var studentName = prompt("Enter student name: ");
var sub1 = parseFloat(prompt("Enter marks for Subject 1 (out of 100): "));
var sub2 = parseFloat(prompt("Enter marks for Subject 2 (out of 100): "));
var sub3 = parseFloat(prompt("Enter marks for Subject 3 (out of 100): "));
var totalMarks = 300;
function getObtainedMarks(m1, m2, m3) {
  return m1 + m2 + m3;
}
function getPercentage(obtained, total) {
  return (obtained / total) * 100;
}
function checkResult(percentage) {
  if (percentage >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}
function getGrade(percentage) {
  if (percentage >= 80) {
    return "A+";
  } else if (percentage >= 70) {
    return "A";
  } else if (percentage >= 60) {
    return "B";
  } else if (percentage >= 50) {
    return "C";
  } else if (percentage >= 40) {
    return "D";
  } else {
    return "F";
  }
}
var obtainedMarks = getObtainedMarks(sub1, sub2, sub3);
var percentage = getPercentage(obtainedMarks, totalMarks);
var result = checkResult(percentage);
var grade = getGrade(percentage);
document.write(`
  <h3>Marksheet</h3>
  <p><b>Name:</b> ${studentName}</p>
  <p><b>Subject 1:</b> ${sub1} / 100</p>
  <p><b>Subject 2:</b> ${sub2} / 100</p>
  <p><b>Subject 3:</b> ${sub3} / 100</p>
  <p><b>Total Marks:</b> ${totalMarks}</p>
  <p><b>Obtained Marks:</b> ${obtainedMarks}</p>
  <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
  <p><b>Result:</b> ${result}</p>
  <p><b>Grade:</b> ${grade}</p>
`);


// Basic Calculator
var numOne = parseFloat(prompt("Enter value one: "));
var operator = prompt("Enter any operator (+, -, *, /): ");
var numTwo = parseFloat(prompt("Enter value two: "));
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) {
    return "Cannot divided by zero";
  }
  return a / b;
}
var res;
switch (operator) {
  case "+":
    res = add(numOne, numTwo);
    break;
  case "-":
    res = sub(numOne, numTwo);
    break;
  case "*":
    res = mul(numOne, numTwo);
    break;
  case "/":
    res = div(numOne, numTwo);
    break;
  default:
    res = "Invalid operator";
    break;
}
document.write(`Answer: ${res}`);


//Even and odd checker using function
 var num = parseFloat(prompt("Enter a number: "));
function checkEvenOdd(n) {
  if (n === 0) {
    return "Zero is neither even nor odd";
  } else if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
var res = checkEvenOdd(num);
document.write(`Result: ${res}`);


//leap year checker using function
var year = parseInt(prompt("Enter a year: "));
function isLeapYear(y) {
  if (y % 400 === 0) {
    return "Leap Year";
  } else if (y % 100 === 0) {
    return "Not a Leap Year";
  } else if (y % 4 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}
var res = isLeapYear(year);
document.write(`Result: ${res}`);


//fictorial program using function
var num = parseInt(prompt("Enter a whole number: "));
function getFactorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  var fact = 1;
  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
var res = getFactorial(num);
document.write(`Result: ${res}`);  