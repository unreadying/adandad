var menuopen = false;

var contact = document.querySelector('.contact');
var ourwork = document.querySelector('.ourwork');
var content = document.querySelector('.content');

var funboard = document.getElementById("funboard");
var ctx = funboard.getContext("2d");


flicker(document.querySelector(".logo"));
flicker(document.querySelector(".l"));
flicker(document.querySelector(".c"));
flicker(document.querySelector(".r"));



function flicker(e){
    
    var d = (rand(2000)+500);
    var o = (rand(0.8)+0.4);
    e.style.transition="opacity "+(d/1000)+"s ease-in-out 0s";
    setTimeout(function(){flicker(e)},d);
    if(e.style.opacity!=1){
        e.style.opacity=1;
    }else{
        e.style.opacity=""+o+"";
    }
}

function rand(n){
    return ((Math.floor((Math.random()*n)*10))/10);
}

function menu(){

    if(menuopen==false){
        console.log("menu");
        content.style.opacity="0.3"
        content.style.transition="opacity 0.2s ease-in-out 0s";
        contact.style.transition="opacity 0.2s ease-in-out 0s";
        ourwork.style.transition="opacity 0.2s ease-in-out 0s";
        contact.style.visibility="visible" 
        ourwork.style.visibility="visible" 
        contact.style.top="28pt" 
        ourwork.style.top="8pt" 
        contact.style.opacity="100" 
        ourwork.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
        content.style.opacity="1"
        contact.style.visibility="hidden" 
        ourwork.style.visibility="hidden" 
        contact.style.opacity="0" 
        ourwork.style.opacity="0" 
        menuopen=false; 
    }
}

