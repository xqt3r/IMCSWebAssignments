var tableId = document.querySelector("multiTable")
function generate() {

    for (var i=1; i<=10; i++){
       tableId.innerHTML+ = "<tr><td>"+i+"</td></tr>";
    }
}
generate();

console.log("alert");