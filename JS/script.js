/**
 * Created by MissyGotGame on 3/17/15.
 */
/*
Ashley Whitley
SDI Section 01
Conditionals Worksheet
March 17, 2015
 */

/*
 Celsius to Fahrenheit converter

 Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered.
 If the user puts a “C” for the unit, the calculator should convert to Celsius.
 If the user puts “F” for the unit, the calculator should convert to Fahrenheit.
 Given:
 Degrees (in F or C)
 Unit (a string holding an “F” or a “C”)
 Result:
 “The temperature is X degrees Celsius.” Or “The temperature is X degrees Fahrenheit.”
 Data Sets to Test: (Note that data sets are not the only numbers that should work with your code.)
 32F is 0C
 100C is 212F
 90F is 32.22C
 */

//variables
/*var DegreesF = 32;
var DegreesC = 0;
var UnitF = ((DegreesC * 9/5) + 32); //correct formula to convert F to C
var UnitC = (DegreesF - 32) * 5/9; //correct formula to convert C to F


if(DegreesF){
    console.log("The temperature is" + " " + UnitC + " " + "degrees Celsius.");

}else(DegreesC){
    console.log("The temperature is" +" "+ UnitF +" "+ "degrees Fahrenheit.");
}*/



/*
 Check the Login

 Make sure the user has the correct username and password.
 If the username doesn’t match then a specific message for that should be printed to the console.
 If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
Given:
 Username entered by user
 Password entered by user
 Correct username
 Correct password
 Result To Print Out:
 “Welcome, (place their username here)!”  - if the username and password is correct
 “User not found. Try again.” -if the username does not match
 “Password does not match our records.”  -if the username matches but the password does not
 */

var userName;
var passWord;
var CuserName;
var Cpassword;

var userName = prompt("What is your username?");

if(userName === 'MissyGotGame'){
    alert("Thank you.");
}else{
    alert("User not found. Try Again.") //if they type in anything other than yes or no
}

var passWord = prompt("What is your password?");

if(passWord === '123456'){
    alert("Welcome," +" "+ userName+ "!");
}else{
    alert("Password does not match our records.")
}


/*
Movie Ticket Price

 The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older),
 under 10 you get the discounted price of $7.00. In addition,
 if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
 Determine which of the two prices the customer is eligible for.
 Given:
 Time of Movie (Assume whole numbers here)
 Age of the customer
 Result To Print Out:
 “The ticket price is X”
 */

var ticketPrice = 12;
var DiscountS = 7;
var senior = 55;
var age = 20;
var dayRate = true;

if(age >= senior || dayRate){
    console.log("The ticket price is" +" "+ DiscountS +".");
}else{
    console.log("The ticket price is" + " " + ticketPrice+".");
}
