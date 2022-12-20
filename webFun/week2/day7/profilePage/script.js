var reqCounter = document.getElementById("conRequests");
var conCounter = document.getElementById("wideBubble");
var requests = parseInt(reqCounter.innerText);
var connections = parseInt(wideBubble.innerText);

function conAccept(id){
    var connection = document.getElementById(id);
    connection.remove();
    requests -= 1;
    connections += 1;
    reqCounter.innerText = requests;
    conCounter.innerText = connections;
}
function conDeny(id){
    var connection = document.getElementById(id);
    connection.remove();
    requests -= 1;
    reqCounter.innerText = requests;
}
function changeName(){
    let name = document.getElementById("name");
    name.innerText = "Shiguraki"
}