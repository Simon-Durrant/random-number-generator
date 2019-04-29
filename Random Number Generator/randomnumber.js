alert("Would you like a random number?");
var digits = prompt("How many digits would you like?");
var ran = Math.random();
var output = ran * Math.pow(10, digits) + 1;
output = Math.floor(output);
document.write("Your random number is " + output);
