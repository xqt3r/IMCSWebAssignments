var num1 = prompt("enter the first number");
var num2 = prompt("enter the second number");
var num3 = prompt("enter the third number");

var num = 100;
var str ="100"

if (num === str){
    document.write("<h1>equal</h1>");
}
else
    document.write("<h1>not equal</h1>");
function largest() {
    if(num1 > num2 && num1 > num3){
        document.getElementById("output").innerHTML = "num1 " +num1+" is greater of all three";
    }
    else if (num2 > num3){
        document.getElementById("output").innerHTML = "num2 " +num2+" is greater of all three";
    }
    else
        document.getElementById("output").innerHTML = "num3 " +num3+" is greater of all three";

}
