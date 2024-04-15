var menuopen = false;

var contact = document.querySelector('.contact');
var about = document.querySelector('.about');

document.querySelector('.menubutton').onclick=menu;

function menu(){

    if(menuopen==false){
        console.log("menu");
        contact.style.visibility="visible" 
        about.style.visibility="visible" 
        contact.style.top="28pt" 
        about.style.top="8pt" 
        contact.style.opacity="100" 
        about.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
        contact.style.visibility="hidden" 
        about.style.visibility="hidden" 
        contact.style.opacity="0" 
        about.style.opacity="0" 
        contact.style.top="-50pt" 
        about.style.top="-24pt" 
        menuopen=false; 
    }
}

