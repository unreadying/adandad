var menuopen = false;

var contact = document.querySelector('.contact');
var ourwork = document.querySelector('.ourwork');

document.querySelector('.menubutton').onclick=menu;

function menu(){

    if(menuopen==false){
        console.log("menu");
        contact.style.visibility="visible" 
        ourwork.style.visibility="visible" 
        contact.style.top="28pt" 
        ourwork.style.top="8pt" 
        contact.style.opacity="100" 
        ourwork.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
        contact.style.visibility="hidden" 
        ourwork.style.visibility="hidden" 
        contact.style.opacity="0" 
        ourwork.style.opacity="0" 
        contact.style.top="-50pt" 
        ourwork.style.top="-24pt" 
        menuopen=false; 
    }
}

