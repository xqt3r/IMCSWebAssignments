

function multiplication() {
    var number = prompt("enter the number");
    var table = document.getElementById("multiTable");
    //var textbox = doc.querySelector("textbox");
    var tr = "<tr><td>";
    var td = "</td><td>";
    var te = "</td></tr>";
    for (var i=0; i<=10; i++){
        table.innerHTML += tr+ number + td + i + td+ number*i +te;
        //textbox.innerHTML += number + " " + i + " " + number*i;
    }
}
window.onload = multiplication();

