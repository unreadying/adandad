var menuopen = false;

var about = document.querySelector('.about');
var ourwork = document.querySelector('.ourwork');

document.querySelector('.menubutton').onclick=menu;

function menu(){

    if(menuopen==false){
        console.log("menu");
        about.style.visibility="visible" 
        ourwork.style.visibility="visible" 
        ourwork.style.top="8pt" 
        about.style.top="28pt" 
        about.style.opacity="100" 
        ourwork.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
        about.style.visibility="hidden" 
        ourwork.style.visibility="hidden" 
        ourwork.style.opacity="0" 
        about.style.opacity="0" 
        about.style.top="-50pt" 
        ourwork.style.top="-24pt" 
        menuopen=false; 
    }
}

