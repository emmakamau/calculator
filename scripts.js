var add = (numOne,numTwo) => numOne+numTwo;
var subtract = (numOne,numTwo) => numOne-numTwo;
var multiply = (numOne,numTwo) => numOne*numTwo;
var divide = (numOne,numTwo) => numOne/numTwo;
var reminder = (numOne,numTwo) => numOne%numTwo;

//var numOne=parseInt(prompt('Enter a number:'));
//var numTwo=parseInt(prompt('Enter another number:'))

var result = reminder(numOne,numTwo);

alert(result)


/*
//BMI calculator
var bmi = (weight, height) => {
    var height = parseFloat(prompt("What is your height?"));
    var weight = parseInt(prompt("What is your weight?"));
    let myHeight = height*height;
    let myBmi = weight/myHeight;
    if (myBmi > 25) {
      alert('Opps! your BMI is ' + myBmi + ' , consider loosing some weight')
    } else {
      alert('Your BMI is' + myBmi + ', you are in perfect health')
    }
  }
  
  bmi()


  //Adds two numbers and returns an alert
  var myFunction = (name) =>{
	var name=prompt('What is your name?');
    }

    var addNum = (num1,num2)=>{
        var num1 = parseInt(prompt("Enter a number:"));
        var num2 = parseInt(prompt("Enter a second number:"));
        var mySum = num1+num2;
        alert('My name is '+name+' and the sum of my numbers is '+mySum)
    };

    myFunction()
    addNum()

//Temp converter

var temperature = (fah)=>{
	var fah = parseFloat(prompt("Enter temperature in Fahrenheit:"))
	var celcius = (fah-32)/1.8;
  
  alert(fah+'Fahrenheit is equal to '+celcius+'degrees celcius');
}

temperature()



//Even Number calculator

var evenNumber = (num)  => {
	var num = parseInt(prompt('Enter a whole number:'))
	if (num%2 == 0){
  alert(num+' is an even number')
  }else{
  alert(num+' is an odd number')
  }
}

evenNumber()


//Grade app

var myGrade = (grade)=>{
	grade = parseInt(prompt('Fill in marks:'));
  if (grade >= 80){
  	result = "A";
  }else if (grade >=60 && grade<=79 ){
  	result = "B"
  }else if (grade >=40 && grade<= 59){
  	result = "C";
  }else if (grade >= 20 && grade<=39){
  	result = "D";
  }else{
  	result ="E";
  }
  alert ("Grade: "+result)
}

myGrade()


//var leapYearRange = (startYear,endYear) => {
	var startYear = parseInt(prompt("From year"));
  var endYear = parseInt(prompt("End year"));
  var count = 0;
  
  for (let i = startYear; i <= endYear; i++){
  	if (i%4 === 0){
    	count = count+1;
    }
  }
  alert('There are '+count+'leap years between '+startYear+' and '+endYear);
}

leapYearRange()

*/