
//for addition of two numbers
function addNums (firstNum,secondNum){
    return result = (firstNum+secondNum);
}

//for subtraction of two numbers
function subtractNums (firstNum,secondNum) {
    return result = (firstNum - secondNum);
}

//for division of two numbers
function divideNum (firstNum, secondNum) {
    return result = firstNum / secondNum;
}

//for multiplication of two numbers
function multipyNum (firstNum, secondNum) {
    return result = (firstNum*secondNum);
}


//Validation and Decision

firstNum = prompt("Enter first Number...");
if (length.firstNum == 0) {
    alert("error");
}
else {
    secondNum = prompt("Enter Second Number...");
}
if (length.secondNum == 0) {
    alert("error");
}
else {
    operation = prompt("Choose an Operator (1. for + || 2. for - || 3. for * || 4. for / )");
}
if (length.operation == 0) {
    alert("error");
}
else if (operation == 1) {
   alert("Answer = "+addNums(Number(firstNum), Number(secondNum)));
}
else if (operation == 2) {
    alert("Answer = " +subtractNums(Number(firstNum), Number(secondNum)));
}
else if (operation == 3) {
    alert("Answer = "+multipyNum(Number(firstNum), Number(secondNum)));
}
else if (operation == 4) {
    alert("Answer = "+divideNum(Number(firstNum), Number(secondNum)));
}