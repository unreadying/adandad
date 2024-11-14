var menuopen = false;

var contact = document.querySelector('.contact');
var about = document.querySelector('.about');
var ourwork = document.querySelector('.ourwork');
var content = document.querySelector('.content');
var consel = document.getElementById('consel');
var stasel = document.getElementById('stasel');


var sta = false ;
stasel.onclick=gensta;
consel.onclick=gencon;


function gensta(){
	if ( sta == false ) {
		stasel.style.opacity=0.3;
		consel.style.opacity=1;
		
		sta = !sta
	}

}

function gencon(){
	if ( sta == true ) {
		stasel.style.opacity=1;
		consel.style.opacity=0.3;
		
		sta = !sta
	}
}

document.querySelector('.menubutton').onclick=menu;

console.log('menu');

function menu(){

    if(menuopen==false){
        console.log("menu");
        content.style.opacity="0.3"
        content.style.transition="opacity 0.2s ease-in-out 0s";
        about.style.transition="opacity 0.2s ease-in-out 0s";
        ourwork.style.transition="opacity 0.2s ease-in-out 0s";
		contact.style.transition="opacity 0.2s ease-in-out 0s";
        about.style.visibility="visible" 
        ourwork.style.visibility="visible" 
		contact.style.visibility="visible" 
		document.querySelector('.menu').style.top="5vh"
        about.style.top="28pt" 
        ourwork.style.top="8pt" 
		contact.style.top="48pt" 
        about.style.opacity="100" 
        ourwork.style.opacity="100" 
		contact.style.opacity="1"
        menuopen=true;
    }else if(menuopen==true){
		document.querySelector('.menu').style.top="-100vh"
        content.style.opacity="1"
        about.style.visibility="hidden" 
        ourwork.style.visibility="hidden" 
		contact.style.visibility="hidden" 
        about.style.opacity="0" 
        ourwork.style.opacity="0" 
        menuopen=false; 
    }
}




