function toggleLog(button){
    if(button.innerText == "Login"){
        button.innerText = "Logout";
    } else {
        button.innerText = "Login";
    }
}
function addHidden(button){
    button.style.visibility = "hidden";
}
function addNone(alert){
    console.log(alert);
    alert.style.display = "none";
}
function lightBlue(button){
    button.style.backgroundColor = "lightskyblue";
}
function returnBlue(button){
    button.style.backgroundColor = "cornflowerblue";
}
function lightYellow(button){
    button.style.backgroundColor = "burlywood";
}
function returnYellow(button){
    button.style.backgroundColor = "goldenrod";
}
function lightGreen(button){
    button.style.backgroundColor = 'rgb(' + 207 + ',' + 232 + ',' + 207 + ')';
}
function returnGreen(button){
    button.style.backgroundColor = "darkseagreen";
}
function alertBox(){
    document.getElementById("alert").style.display = "flex";
}