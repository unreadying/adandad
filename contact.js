var menuopen = false;

var about = document.querySelector('.about');
var ourwork = document.querySelector('.ourwork');
var content = document.querySelector('.content');

document.querySelector('.menubutton').onclick=menu;

function menu(){

    if(menuopen==false){
        console.log("menu");
        content.style.opacity="0.3"
        content.style.transition="opacity 0.2s ease-in-out 0s";
        about.style.transition="opacity 0.2s ease-in-out 0s";
        ourwork.style.transition="opacity 0.2s ease-in-out 0s";
        about.style.visibility="visible" 
        ourwork.style.visibility="visible" 
        about.style.top="28pt" 
        ourwork.style.top="8pt" 
        about.style.opacity="100" 
        ourwork.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
        content.style.opacity="1"
        about.style.visibility="hidden" 
        ourwork.style.visibility="hidden" 
        about.style.opacity="0" 
        ourwork.style.opacity="0" 
        menuopen=false; 
    }
}
