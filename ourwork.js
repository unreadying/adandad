var menuopen = false;

var contact = document.querySelector('.contact');
var about = document.querySelector('.about');
var content = document.querySelector('.content');

document.querySelector('.menubutton').onclick=menu;

document.querySelector('.sc').onmouseover=iconh;

document.querySelector('.sc').onmouseleave=icon;

new Image().src='sch.png';


function iconh(evt){
    ci=evt.target.name;
    document.querySelector('.'+ci+'').src='icons/'+ci+'h.png'
}

function icon(evt){
    ci=evt.target.name;
    document.querySelector('.'+ci+'').src='icons/'+ci+'.png'
}



function menu(){

    if(menuopen==false){
        console.log("menu");
        content.style.opacity="0.3"
        content.style.transition="opacity 0.2s ease-in-out 0s";
        about.style.transition="opacity 0.2s ease-in-out 0s";
        contact.style.transition="opacity 0.2s ease-in-out 0s";
        about.style.visibility="visible" 
        contact.style.visibility="visible" 
		document.querySelector('.menu').style.top="5vh"
        contact.style.top="28pt" 
        about.style.top="8pt" 
        about.style.opacity="100" 
        contact.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
		document.querySelector('.menu').style.top="-100vh"
        content.style.opacity="1"
        about.style.visibility="hidden" 
        contact.style.visibility="hidden" 
        about.style.opacity="0" 
        contact.style.opacity="0" 
        menuopen=false; 
    }
}

