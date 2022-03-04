function inputOne(){
  let numOne = document.getElementById("inputOne").value
  return parseInt(numOne);
}

function inputTwo(){
  let numTwo = document.getElementById("inputTwo").value
  return parseInt(numTwo);
}

function add(){
  let numOne = inputOne()
  let numTwo = inputTwo()
  let sum = numOne + numTwo;
  document.getElementById('output').innerHTML = `The sum of ${numOne} and ${numTwo} is ${sum}.`
}

function subtract(){
  let numOne = inputOne()
  let numTwo = inputTwo()
  let difference = numOne - numTwo;
  document.getElementById('output').innerHTML = `The difference between ${numOne} and ${numTwo} is ${difference}.`
}

function multiply(){
  let numOne = inputOne()
  let numTwo = inputTwo()
  let product = numOne * numTwo;
  document.getElementById('output').innerHTML = `The product of ${numOne} and ${numTwo} is ${product}.`
}

function divide(){
  let numOne = inputOne()
  let numTwo = inputTwo()
  let division = numOne / numTwo;
  document.getElementById('output').innerHTML = `The division of ${numOne} and ${numTwo} is ${division}.`
}