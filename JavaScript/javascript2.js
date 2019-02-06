var number = prompt("Enter a number");

if (number%5 == 0 && number%6 == 0){
    document.getElementById("output").innerHTML = "The number " + number + " is divisible by 5 and 6.";
}
else
    document.getElementById("output").innerHTML = "Not divisible by 5 and 6."