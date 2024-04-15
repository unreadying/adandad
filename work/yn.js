var menuopen = false;

var contact = document.querySelector('.contact');
var about = document.querySelector('.about');
var ourwork = document.querySelector('.ourwork');

document.querySelector('.menubutton').onclick=menu;

function menu(){

    if(menuopen==false){
        console.log("menu");
        contact.style.visibility="visible" 
        about.style.visibility="visible" 
        ourwork.style.visibility="visible"
        ourwork.style.top="10pt"
        contact.style.top="40pt" 
        about.style.top="25pt" 
        ourwork.style.opacity="1"
        contact.style.opacity="100" 
        about.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
        contact.style.visibility="hidden" 
        about.style.visibility="hidden" 
        ourwork.style.visibility="hidden"
        contact.style.opacity="0" 
        about.style.opacity="0" 
        ourwork.style.opacity="0"
        ourwork.style.top="-13pt"
        contact.style.top="-50pt" 
        about.style.top="-25pt" 
        menuopen=false; 
    }
}

