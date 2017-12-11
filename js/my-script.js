
// var add = document.getElementById('addition');
// var subtract = document.getElementById('subtraction');
// var multiply = document.getElementById('multiplication');
// var divide = document.getElementById('division');
// var remind = document.getElementById('reminder');
//
// add.onclick = function () {
//     var firstNumberValue = Number(document.getElementById('firstNumber').value) ;
//     var lastNumberValue = Number(document.getElementById('lastNumber').value);
//
//     document.getElementById('result').value = firstNumberValue+lastNumberValue;
// }
//
// subtract.onclick = function () {
//     var firstNumberValue = document.getElementById('firstNumber').value;
//     var lastNumberValue = document.getElementById('lastNumber').value;
//
//     document.getElementById('result').value = firstNumberValue-lastNumberValue;
// }
//
// multiply.onclick = function () {
//     var firstNumberValue = document.getElementById('firstNumber').value;
//     var lastNumberValue = document.getElementById('lastNumber').value;
//
//     document.getElementById('result').value = firstNumberValue*lastNumberValue;
// }
//
// divide.onclick = function () {
//     var firstNumberValue = document.getElementById('firstNumber').value;
//     var lastNumberValue = document.getElementById('lastNumber').value;
//
//     document.getElementById('result').value = firstNumberValue/lastNumberValue;
// }
//
// remind.onclick = function () {
//     var firstNumberValue = document.getElementById('firstNumber').value;
//     var lastNumberValue = document.getElementById('lastNumber').value;
//
//     document.getElementById('result').value = firstNumberValue%lastNumberValue;
// }
//

var addNumber = document.getElementById('addition');
var subtractNumber = document.getElementById('subtraction');
var multiplyNumber = document.getElementById('multiplication');
var divideNumber = document.getElementById('division');
var remindNumber = document.getElementById('reminder');


// Function for Addition
addNumber.onclick = function () {
    var firsNo = Number(document.getElementById('firstNumber').value);
    var secondNo =Number(document.getElementById('secondNumber').value);
    var sum = firsNo + secondNo;

    var res = document.getElementById('result');
    res.value = sum;
}

subtractNumber.onclick = function () {
    var firsNo = Number(document.getElementById('firstNumber').value);
    var secondNo =Number(document.getElementById('secondNumber').value);
    var difference = firsNo - secondNo;

    var res = document.getElementById('result');
    res.value = difference;

}

multiplyNumber.onclick = function () {
    var firsNo = Number(document.getElementById('firstNumber').value);
    var secondNo =Number(document.getElementById('secondNumber').value);
    var product = firsNo * secondNo;

    var res = document.getElementById('result');
    res.value = product;
}

divideNumber.onclick = function () {
    var firsNo = Number(document.getElementById('firstNumber').value);
    var secondNo =Number(document.getElementById('secondNumber').value);
    var quotient = firsNo / secondNo;

    var res = document.getElementById('result');
    res.value = quotient;
}

remindNumber.onclick = function () {
    var firsNo = Number(document.getElementById('firstNumber').value);
    var secondNo =Number(document.getElementById('secondNumber').value);
    var reminder = firsNo % secondNo;

    var res = document.getElementById('result');
    res.value = reminder;
}
