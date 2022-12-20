function loadingReport(){
    alert("Loading weather report...");
}
function tempConv(selector){
    //Works but not the way to do this.
    //I apologise to whoever looks at this...
    var t1 = document.getElementById('t1');
    var t2 = document.getElementById('t2');
    var t3 = document.getElementById('t3');
    var t4 = document.getElementById('t4');
    var t5 = document.getElementById('t5');
    var t6 = document.getElementById('t6');
    var t7 = document.getElementById('t7');
    var t8 = document.getElementById('t8');
    if(selector.value == 'f'){
        t1.innerText = "75°";
        t2.innerText = "65°";
        t3.innerText = "80°";
        t4.innerText = "66°";
        t5.innerText = "69°";
        t6.innerText = "61°";
        t7.innerText = "78°";
        t8.innerText = "70°";
    } else {
        t1.innerText = "24°";
        t2.innerText = "18°";
        t3.innerText = "27°";
        t4.innerText = "19°";
        t5.innerText = "21°";
        t6.innerText = "16°";
        t7.innerText = "26°";
        t8.innerText = "21°";
    }
}