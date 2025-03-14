var menuopen = false;

var about = document.querySelector('.about');
var ourwork = document.querySelector('.ourwork');
var content = document.querySelector('.content');

suc();


setInterval(suc,1000);

var funboard = document.getElementById("funboard");
var ctx = funboard.getContext("2d");
funboard.width = window.innerWidth-5;
funboard.height = window.innerHeight-5;

flicker(document.getElementById('e'));
flicker(document.getElementById('emma'));
flicker(document.getElementById('evan'));

var prevx = -10;
var prevy = -10;
var prevw = window.innerWidth;
var prevh = window.innerHeight;

document.addEventListener("mousemove",draw);

function suc(){
    
    if(prevw < window.innerWidth || prevh < window.innerHeight){
    funboard.width = window.innerWidth-5;
    funboard.height = window.innerHeight-5;
    prevw = window.innerWidth;
    prevh = window.innerHeight;
    }
}

function draw(event){
    var x = mousepos(funboard,event).x;
    var y = mousepos(funboard,event).y;
    ctx.beginPath();
    if(prevx<0 && prevy<0){
        ctx.moveTo(x,y);
    }else{
    ctx.moveTo(prevx,prevy);
    }
    ctx.lineTo(x,y);
    ctx.strokeStyle = "white";
    ctx.lineWidth = "10px";
    ctx.stroke();
    
    ctx.closePath();
    prevx=x;
    prevy=y;
}

function mousepos(funboard,event){
    var rect = funboard.getBoundingClientRect();
    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function flicker(e){
	if(e==null){return};
    
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
		document.querySelector('.menu').style.top="5vh"
        about.style.top="28pt" 
        ourwork.style.top="8pt" 
        about.style.opacity="100" 
        ourwork.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
		document.querySelector('.menu').style.top="-100vh"
        content.style.opacity="1"
        about.style.visibility="hidden" 
        ourwork.style.visibility="hidden" 
        about.style.opacity="0" 
        ourwork.style.opacity="0" 
        menuopen=false; 
    }
}

