"use strict";
window.onload=init;
function init(){
   
    let greetBtn =document.getElementById("greet");
    greetBtn.onclick=ongreetBtnClicked;
}
    function ongreetBtnClicked(){
        let name=document.getElementById("name");
        console.log(name);
        let message=document.getElementById("message");
        message.innerHTML="Hello "+name.value;

    }
