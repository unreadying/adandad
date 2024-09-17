var menuopen = false;

var contact = document.querySelector('.contact');
var about = document.querySelector('.about');
var content = document.querySelector('.content');

document.querySelector('.menubutton').onclick=menu;

document.querySelector('.wc').onmouseover=iconh;
document.querySelector('.ms').onmouseover=iconh;
document.querySelector('.yn').onmouseover=iconh;

document.querySelector('.wc').onmouseleave=icon;
document.querySelector('.ms').onmouseleave=icon;
document.querySelector('.yn').onmouseleave=icon;

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
        contact.style.transition="opacity 0.2s ease-in-out 0s";
        about.style.transition="opacity 0.2s ease-in-out 0s";
        contact.style.visibility="visible" 
        about.style.visibility="visible" 
        contact.style.top="28pt" 
        about.style.top="8pt" 
        contact.style.opacity="100" 
        about.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
        content.style.opacity="1"
        contact.style.visibility="hidden" 
        about.style.visibility="hidden" 
        contact.style.opacity="0" 
        about.style.opacity="0" 
        menuopen=false; 
    }
}

