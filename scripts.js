var add = (numOne,numTwo) => numOne+numTwo;
var subtract = (numOne,numTwo) => numOne-numTwo;
var multiply = (numOne,numTwo) => numOne*numTwo;
var divide = (numOne,numTwo) => numOne/numTwo;
var reminder = (numOne,numTwo) => numOne%numTwo;

var numOne=parseInt(prompt('Enter a number:'));
var numTwo=parseInt(prompt('Enter another number:'))

var result = reminder(numOne,numTwo);

alert(result)