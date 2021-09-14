addFunction = (a,b) => {return parseInt(a) + parseInt(b)};
subFunction = (a,b) => {return parseInt(a) - parseInt(b)};
mulFunction = (a,b) => {return parseInt(a) * parseInt(b)};
divFunction = (a,b) => {return parseInt(a) / parseInt(b)};

var operation = parseInt(prompt("Enter a number [1-Addition,2-Subtraction,3-Multiplication,4-Division]"));
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");

switch(operation){
    case 1:
        alert("The result is: " +addFunction(num1,num2));
        break;
    case 2:
        alert("The result is: " +subFunction(num1,num2));
        break;
    case 3:
        alert("The result is: " +mulFunction(num1,num2));
        break;
    case 4:
        alert("The result is: " +divFunction(num1,num2));
        break;
}