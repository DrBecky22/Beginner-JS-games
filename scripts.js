const express = require ('express')
const app = express()

// Time Left Calculator
function TimeCalculator (){
var name = prompt ("What is your name");
var ageYears = prompt ("Hi, " + name + "! If you tell me your age in years, I will tell you how many days, weeks and months left until your 90th birthday.  Please list your age in years below.");
var yearsLeft = (90-ageYears);
var days = (yearsLeft*365);
var weeks = (yearsLeft*52);
var months = (yearsLeft*12);
alert ("Ok, " + name + " you have " + days + ", " + weeks + ", and " + months + " left before your 90th year. Spend it well, Live long and Prosper, Be excellent and party on."); 
}
    let btn = document.getElementById("TimeCalc-btn");
    btn.addEventListener('click', event => {
      TimeCalculator();
    });

// Love Calculator
function loveCalculator () {
prompt ("what is your name");
prompt ("what is your intended's name?");

var loveScore = Math.random () *100;
loveScore = Math.floor(loveScore) +1;

if (loveScore >=70) {
    alert ("Wow! your love score is " +loveScore+ "%, there is some sizzling chemistry here, congratulations!" )
}

if (loveScore >30 && loveScore <=69) {
    alert ("meh, your love sore is " +loveScore+ "%, you have potential, but it will take work.");
}

if (loveScore <30) {
    alert ("boo!  your love score is " +loveScore+ "%, you should walk away and cut your losses");
}
}

// BMI Calculator
// var height = prompt ("what is your weight in kg? For you Imperials, there are 2.2 lbs in one kg");
// var weight = prompt ("What is your height in meters?  For you Obsolete Imperials, there are 3.3 feet in 1 meter");

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);  
    if (Math.round (bmi<18.5)) 
       return ("your BMI is " +bmi+ ", so you are underweight.");
    if (Math.round (bmi >=18.5 && bmi<=24.9))
       return ("your BMI is " +bmi+ ", so you have a normal weight.");
    if (Math.round (bmi >24.9)) 
       return ("your BMI is " +bmi+ ", so you are overweight.");
}
 bmiCalculator(65, 1.8);


//  Leap Year Calculator
if (year%4 === 0) {
    if (year%100===0) {
        if (year%400===0) {
            return "Leap year.";
        } else {
            return "Not leap year.";
        }
    return "Not leap year.";
    } else {
        return "Leap year.";
    }
    return "Leap year.";
} else {
    return "Not leap year."
}


// alert ("your BMI is " +bmi+ ", so you are underweight.");
// alert ("your BMI is " +bmi+ ", so you have a normal weight.");
// alert ("your BMI is " +bmi+ ", so you are overweight.");
