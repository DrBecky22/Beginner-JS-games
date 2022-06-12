// Time Left Calculator
var name = prompt ("What is your name");
var ageYears = prompt ("Hi, " + name + "! If you tell me your age in years, I will tell you how many days, weeks and months left until your 90th birthday.  Please list your age in years below.");
var yearsLeft = (90-ageYears);
var days = (yearsLeft*365);
var weeks = (yearsLeft*52);
var months = (yearsLeft*12);
alert ("Ok, " + name + " you have " + days + ", " + weeks + ", and " + months + " left before your 90th year. Spend it well, Live long and Prosper, Be excellent and party on."); 


// Love Calculator
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


// BMI Calculator
